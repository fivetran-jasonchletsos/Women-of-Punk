#!/usr/bin/env node
/**
 * fetch-covers.js
 *
 * Fetches album cover art from the MusicBrainz Cover Art Archive for every
 * entry in src/lib/data/albums.ts, saving JPGs to public/covers/<slug>.jpg
 * and a manifest at public/covers/manifest.json.
 *
 * Usage: node scripts/fetch-covers.js
 *
 * Rate limits: ~1.2s between MusicBrainz API calls (their published limit
 * is 1 req/sec; we leave a small buffer). CAA has no equivalent throttle.
 */

import {
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { Agent as HttpsAgent, request as httpsRequest } from "https";
import { Agent as HttpAgent, request as httpRequest } from "http";
import { URL } from "url";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// musicbrainz.org / coverartarchive.org are behind a host whose IPv6 AAAA
// records and TLS 1.3 handshakes are unreliable from some networks. We:
//   - pin family: 4 (IPv4 only)
//   - cap maxVersion at TLS 1.2 (TLS 1.3 handshakes get killed mid-flight)
//   - disable keepAlive so a dead socket can't be reused on the next call
const httpsAgent = new HttpsAgent({
  keepAlive: false,
  family: 4,
  maxVersion: "TLSv1.2",
});
const httpAgent = new HttpAgent({ keepAlive: false, family: 4 });

// Hosts that need the IPv4 + TLS 1.2 workaround
const TLS12_HOSTS = new Set([
  "musicbrainz.org",
  "coverartarchive.org",
  "archive.org",
  "ia800304.us.archive.org",
  "ia800500.us.archive.org",
  "ia801308.us.archive.org",
]);

function httpsGet(url, options, cb) {
  let host = "";
  try {
    host = new URL(url).hostname;
  } catch {
    // ignore
  }
  const tweak = TLS12_HOSTS.has(host)
    ? { agent: httpsAgent, family: 4, maxVersion: "TLSv1.2" }
    : {};
  const merged = { ...options, ...tweak };
  const req = httpsRequest(url, merged, cb);
  req.end();
  return req;
}

function httpGet(url, options, cb) {
  const merged = { ...options, agent: httpAgent, family: 4 };
  const req = httpRequest(url, merged, cb);
  req.end();
  return req;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const COVERS_DIR = join(ROOT, "public", "covers");
const MANIFEST_PATH = join(COVERS_DIR, "manifest.json");
const ALBUMS_PATH = join(ROOT, "src", "lib", "data", "albums.ts");

const UA = "WomenOfPunk/1.0 (jason.chletsos@example.com)";

const MB_DELAY_MS = 1200; // MusicBrainz: 1 req/sec — be polite, use 1.2s
const RETRY_DELAY_MS = 5000; // on 503 / rate-limit
const MAX_RETRIES = 3;

// ---------------------------------------------------------------------------
// Parse albums.ts without a TS toolchain
// ---------------------------------------------------------------------------
function parseAlbums() {
  const src = readFileSync(ALBUMS_PATH, "utf8");
  const albums = [];

  // Match each object literal in the albums array. Album bodies don't contain
  // nested braces in the source, so a simple non-greedy match works.
  const objRe = /\{\s*slug:\s*'([^']+)',\s*([^{}]*?)\},?/gs;
  let m;
  while ((m = objRe.exec(src)) !== null) {
    const slug = m[1];
    const body = m[2];

    const titleM = body.match(/title:\s*'((?:[^'\\]|\\.)*)'/);
    const artistM = body.match(/artist:\s*'((?:[^'\\]|\\.)*)'/);
    const yearM = body.match(/year:\s*(\d+)/);

    if (titleM && artistM && yearM) {
      albums.push({
        slug,
        title: titleM[1].replace(/\\'/g, "'"),
        artist: artistM[1].replace(/\\'/g, "'"),
        year: parseInt(yearM[1], 10),
      });
    }
  }
  return albums;
}

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const mod = parsed.protocol === "https:" ? httpsGet : httpGet;
    const req = mod(
      url,
      {
        headers: {
          "User-Agent": UA,
          Accept: "application/json",
        },
      },
      (res) => {
        if (res.statusCode === 404) {
          res.resume();
          return resolve({ status: 404, body: null });
        }
        if (res.statusCode === 503 || res.statusCode === 429) {
          res.resume();
          return resolve({ status: res.statusCode, body: null });
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve({ status: 200, body: JSON.parse(data) });
          } catch (e) {
            reject(new Error(`JSON parse error for ${url}: ${e.message}`));
          }
        });
      }
    );
    req.on("error", reject);
    req.setTimeout(30000, () => {
      req.destroy(new Error(`Timeout fetching ${url}`));
    });
  });
}

/**
 * Download a binary URL (follows up to 5 redirects) and save to dest.
 * Returns true on success, false on 404, throws on other errors.
 */
function downloadBinary(url, dest, redirects = 0, extraOpts = {}) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) {
      return reject(new Error(`Too many redirects for ${url}`));
    }
    const parsed = new URL(url);
    const mod = parsed.protocol === "https:" ? httpsGet : httpGet;
    const headers = {
      "User-Agent": UA,
      ...(extraOpts.headers || {}),
    };
    const req = mod(
      url,
      { headers },
      (res) => {
        if (res.statusCode === 404) {
          res.resume();
          return resolve(false);
        }
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          res.resume();
          const next = new URL(res.headers.location, url).href;
          return resolve(downloadBinary(next, dest, redirects + 1, extraOpts));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const out = createWriteStream(dest);
        res.pipe(out);
        out.on("finish", () => resolve(true));
        out.on("error", reject);
        res.on("error", reject);
      }
    );
    req.on("error", reject);
    req.setTimeout(45000, () => {
      req.destroy(new Error(`Timeout downloading ${url}`));
    });
  });
}

// ---------------------------------------------------------------------------
// MusicBrainz search with retry on 503/429
// ---------------------------------------------------------------------------
async function mbSearchReleaseGroup(artist, title) {
  // Lucene query — escape double-quotes inside artist/title (rare but possible)
  const escArtist = artist.replace(/"/g, '\\"');
  const escTitle = title.replace(/"/g, '\\"');
  const q = `artist:"${escArtist}" AND releasegroup:"${escTitle}"`;
  const url = `https://musicbrainz.org/ws/2/release-group/?query=${encodeURIComponent(q)}&fmt=json&limit=10`;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetchJson(url);
      if (res.status === 200) {
        return res.body;
      }
      if (res.status === 404) {
        return null;
      }
      // 503 / 429 — back off and retry
      console.log(
        `    rate limited (HTTP ${res.status}), retry ${attempt}/${MAX_RETRIES} after ${RETRY_DELAY_MS}ms`
      );
      await sleep(RETRY_DELAY_MS);
    } catch (err) {
      if (attempt === MAX_RETRIES) throw err;
      console.log(
        `    error "${err.message}", retry ${attempt}/${MAX_RETRIES} after ${RETRY_DELAY_MS}ms`
      );
      await sleep(RETRY_DELAY_MS);
    }
  }
  return null;
}

/**
 * Pick the best release-group match from MB search results.
 * Prefers official Album type, excludes Compilation/Live/Soundtrack/etc.
 */
function pickBestReleaseGroup(mbData, expectedTitle, expectedArtist) {
  if (!mbData || !mbData["release-groups"]) return null;
  const groups = mbData["release-groups"];
  if (groups.length === 0) return null;

  const norm = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  const wantTitle = norm(expectedTitle);
  const wantArtist = norm(expectedArtist);

  const isBadType = (g) => {
    const types = [
      g["primary-type"] || "",
      ...(g["secondary-types"] || []),
    ].map((t) => t.toLowerCase());
    return (
      types.includes("compilation") ||
      types.includes("live") ||
      types.includes("soundtrack") ||
      types.includes("demo") ||
      types.includes("interview") ||
      types.includes("dj-mix") ||
      types.includes("mixtape/street")
    );
  };

  const scored = groups.map((g) => {
    let score = 0;
    if ((g["primary-type"] || "").toLowerCase() === "album") score += 10;
    if (isBadType(g)) score -= 50;

    // Title proximity
    const gTitle = norm(g.title || "");
    if (gTitle === wantTitle) score += 20;
    else if (gTitle.includes(wantTitle) || wantTitle.includes(gTitle))
      score += 8;

    // Artist proximity
    const artistName = (g["artist-credit"] || [])
      .map((ac) => ac.name || (ac.artist && ac.artist.name) || "")
      .join(" ");
    const gArtist = norm(artistName);
    if (gArtist === wantArtist) score += 20;
    else if (gArtist.includes(wantArtist) || wantArtist.includes(gArtist))
      score += 8;

    // MB's own confidence score
    if (typeof g.score === "number") score += g.score / 10;

    return { g, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0].g;
}

// ---------------------------------------------------------------------------
// Cover Art Archive fetch — try release-group first, then fall back to any
// release within the group.
// ---------------------------------------------------------------------------
async function downloadWithRetry(url, destPath, label, extraOpts = {}) {
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const ok = await downloadBinary(url, destPath, 0, extraOpts);
      return { ok, err: null };
    } catch (err) {
      lastErr = err;
      const isTls =
        err.message.includes("TLS") ||
        err.message.includes("socket disconnected") ||
        err.message.includes("ECONNRESET") ||
        err.message.includes("ETIMEDOUT");
      if (!isTls || attempt === MAX_RETRIES) {
        return { ok: false, err };
      }
      console.log(
        `    ${label} retry ${attempt}/${MAX_RETRIES} after ${RETRY_DELAY_MS}ms: ${err.message}`
      );
      await sleep(RETRY_DELAY_MS);
    }
  }
  return { ok: false, err: lastErr };
}

// Deezer's public API is IPv4-friendly and reliable. Used as a fallback when
// MusicBrainz / Cover Art Archive is unreachable or has no art.
function normLoose(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function deezerSearchAlbum(query) {
  const url = `https://api.deezer.com/search/album?q=${encodeURIComponent(query)}&limit=10`;
  try {
    const res = await fetchJson(url);
    if (res.status !== 200 || !res.body) return [];
    return Array.isArray(res.body.data) ? res.body.data : [];
  } catch (err) {
    console.log(`    Deezer search error: ${err.message}`);
    return [];
  }
}

function scoreDeezerHit(hit, wantArtist, wantTitle) {
  const a = normLoose(hit.artist && hit.artist.name);
  const t = normLoose(hit.title);
  let score = 0;
  if (a === wantArtist) score += 10;
  else if (a.includes(wantArtist) || wantArtist.includes(a)) score += 5;
  if (t === wantTitle) score += 10;
  else if (t.includes(wantTitle) || wantTitle.includes(t)) score += 5;
  return score;
}

/**
 * Try several query variants to find an album on Deezer. Returns the highest-
 * resolution cover URL or null. Strips honorifics like "The" / "Group" from
 * artist, and punctuation from title.
 */
async function deezerCoverUrl(artist, title) {
  const wantArtist = normLoose(artist);
  const wantTitle = normLoose(title);

  const artistAlt = artist
    .replace(/\s+group\s*$/i, "")
    .replace(/^the\s+/i, "")
    .trim();
  const titleAlt = title
    .replace(/[¡!¿?]/g, "")
    .trim();

  const queries = [
    `artist:"${artist}" album:"${title}"`,
    `artist:"${artistAlt}" album:"${titleAlt}"`,
    `${artist} ${title}`,
    `${artistAlt} ${titleAlt}`,
  ];

  let best = null;
  let bestScore = 0;
  const tried = new Set();

  for (const q of queries) {
    if (tried.has(q)) continue;
    tried.add(q);
    const hits = await deezerSearchAlbum(q);
    for (const h of hits) {
      const s = scoreDeezerHit(h, wantArtist, wantTitle);
      if (s > bestScore) {
        best = h;
        bestScore = s;
      }
    }
    // Early exit on perfect match
    if (bestScore >= 20) break;
    // Brief courtesy delay
    await sleep(150);
  }

  if (!best || bestScore < 10) return null;
  return (
    best.cover_xl ||
    best.cover_big ||
    best.cover_medium ||
    best.cover ||
    null
  );
}

// Wikipedia REST API: last-resort cover lookup. Pulls the lead image from
// the article whose title matches the album title (URL-encoded with
// underscores). Wikipedia hosts album-art thumbnails on upload.wikimedia.org
// under fair-use; we use them only when MB/CAA and Deezer don't have the art.
async function wikipediaCoverUrl(title) {
  const slugified = title
    .replace(/[¡¿]/g, "")
    .replace(/\s+/g, "_")
    .replace(/\?/g, "%3F");
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slugified)}`;
  try {
    const res = await fetchJson(url);
    if (res.status !== 200 || !res.body) return null;
    const orig = res.body.originalimage && res.body.originalimage.source;
    const thumb = res.body.thumbnail && res.body.thumbnail.source;
    return orig || thumb || null;
  } catch (err) {
    console.log(`    Wikipedia error: ${err.message}`);
    return null;
  }
}

async function fetchCover(mbid, destPath) {
  // Primary: release-group front cover at 500px
  const rgUrl = `https://coverartarchive.org/release-group/${mbid}/front-500`;
  const rg = await downloadWithRetry(rgUrl, destPath, "release-group CAA");
  if (rg.ok) {
    return { ok: true, source: "caa" };
  }
  if (rg.err) {
    console.log(`    release-group CAA error: ${rg.err.message}`);
  }

  // Fallback: look up releases inside the release-group, try each one
  const browseUrl = `https://musicbrainz.org/ws/2/release?release-group=${mbid}&fmt=json&limit=25`;
  let releases = [];
  try {
    const res = await fetchJson(browseUrl);
    if (res.status === 200 && res.body && Array.isArray(res.body.releases)) {
      releases = res.body.releases;
    }
  } catch (err) {
    console.log(`    release browse error: ${err.message}`);
  }
  await sleep(MB_DELAY_MS);

  // Prefer "Official" status releases
  releases.sort((a, b) => {
    const sa = (a.status || "").toLowerCase() === "official" ? 1 : 0;
    const sb = (b.status || "").toLowerCase() === "official" ? 1 : 0;
    return sb - sa;
  });

  for (const r of releases) {
    const relUrl = `https://coverartarchive.org/release/${r.id}/front-500`;
    const rel = await downloadWithRetry(relUrl, destPath, "release CAA");
    if (rel.ok) {
      return { ok: true, source: "fallback" };
    }
    // try next release
  }

  return { ok: false, source: null };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  mkdirSync(COVERS_DIR, { recursive: true });

  const albums = parseAlbums();
  console.log(`Parsed ${albums.length} albums from albums.ts`);

  // Load prior manifest so we can preserve provenance (source / mbid) for
  // already-downloaded covers across runs.
  let priorManifest = {};
  if (existsSync(MANIFEST_PATH)) {
    try {
      const arr = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
      if (Array.isArray(arr)) {
        for (const e of arr) priorManifest[e.slug] = e;
      }
    } catch {
      // ignore parse error; start fresh
    }
  }

  const manifest = [];
  let found = 0;
  let missed = 0;
  const startTime = Date.now();

  for (let i = 0; i < albums.length; i++) {
    const { slug, title, artist } = albums[i];
    const destPath = join(COVERS_DIR, `${slug}.jpg`);
    const label = `[${String(i + 1).padStart(2)}/${albums.length}] ${artist} — ${title}`;
    console.log(label);

    // If file already exists, keep it and preserve prior provenance if any
    if (existsSync(destPath)) {
      console.log("    SKIP (cached on disk)");
      const prior = priorManifest[slug];
      manifest.push({
        slug,
        mbid: prior && prior.mbid ? prior.mbid : null,
        found: true,
        source: prior && prior.found && prior.source ? prior.source : "caa",
      });
      found++;
      continue;
    }

    // 1. Search MusicBrainz
    let mbid = null;
    let mbData = null;
    try {
      mbData = await mbSearchReleaseGroup(artist, title);
    } catch (err) {
      console.log(`    MB lookup failed: ${err.message}`);
    }
    await sleep(MB_DELAY_MS);

    if (mbData) {
      const best = pickBestReleaseGroup(mbData, title, artist);
      if (best) {
        mbid = best.id;
        console.log(`    MB id: ${mbid}  (${best["primary-type"] || "?"})`);
      } else {
        console.log("    no MB release-group match");
      }
    }

    // 2. If we have an MBID, try CAA (release-group then release-level)
    let result = { ok: false, source: null };
    if (mbid) {
      try {
        result = await fetchCover(mbid, destPath);
      } catch (err) {
        console.log(`    CAA fetch failed: ${err.message}`);
      }
    }

    // 3. Deezer fallback if CAA didn't deliver
    if (!result.ok) {
      const dzUrl = await deezerCoverUrl(artist, title);
      if (dzUrl) {
        console.log(`    Deezer art: ${dzUrl}`);
        const dl = await downloadWithRetry(dzUrl, destPath, "Deezer");
        if (dl.ok) {
          result = { ok: true, source: "deezer" };
        } else if (dl.err) {
          console.log(`    Deezer download failed: ${dl.err.message}`);
        }
      } else {
        console.log("    Deezer: no match");
      }
    }

    // 4. Wikipedia last-resort. Wikimedia 403s on bot-style UAs, so we
    // override with a browser-shaped string for this download only.
    if (!result.ok) {
      const wpUrl = await wikipediaCoverUrl(title);
      if (wpUrl) {
        console.log(`    Wikipedia art: ${wpUrl}`);
        const dl = await downloadWithRetry(wpUrl, destPath, "Wikipedia", {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
          },
        });
        if (dl.ok) {
          result = { ok: true, source: "wikipedia" };
        } else if (dl.err) {
          console.log(`    Wikipedia download failed: ${dl.err.message}`);
        }
      } else {
        console.log("    Wikipedia: no match");
      }
    }

    if (result.ok) {
      console.log(`    OK (source=${result.source})`);
      manifest.push({ slug, mbid, found: true, source: result.source });
      found++;
    } else {
      console.log("    MISS (no cover anywhere)");
      manifest.push({ slug, mbid, found: false, source: null });
      missed++;
    }
  }

  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(
    `\nDone in ${elapsed}s — ${found} covers, ${missed} misses, of ${albums.length} total`
  );
  console.log(`Manifest: ${MANIFEST_PATH}`);

  // Print failures for easy review
  const failures = manifest.filter((m) => !m.found);
  if (failures.length) {
    console.log(`\nFailures (${failures.length}):`);
    for (const f of failures) {
      console.log(`  - ${f.slug}`);
    }
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
