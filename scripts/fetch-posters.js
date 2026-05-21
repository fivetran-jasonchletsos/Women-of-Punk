#!/usr/bin/env node
/**
 * Fetch movie/doc posters from OMDB for every entry in films.ts and docs.ts.
 * Writes posters to public/posters/<slug>.jpg and a manifest at
 * public/posters/manifest.json.
 *
 * Run:
 *   node scripts/fetch-posters.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const API_KEY = process.env.OMDB_API_KEY || "7971eec1";

// --- Parse films.ts and docs.ts ---------------------------------------------

function parseEntries(tsPath) {
  const src = readFileSync(tsPath, "utf8");
  const entries = [];
  // Match each object literal block in the array.
  // Look for blocks containing slug, title, year, optional director.
  const blockRe = /\{\s*slug:\s*'([^']+)',[\s\S]*?title:\s*'((?:[^'\\]|\\.)+)',[\s\S]*?year:\s*(\d+),(?:[\s\S]*?director:\s*'((?:[^'\\]|\\.)+)',)?[\s\S]*?\},/g;
  let m;
  while ((m = blockRe.exec(src)) !== null) {
    entries.push({
      slug: m[1],
      title: m[2].replace(/\\'/g, "'"),
      year: parseInt(m[3], 10),
      director: m[4] ? m[4].replace(/\\'/g, "'") : undefined,
    });
  }
  return entries;
}

const filmsPath = resolve(ROOT, "src/lib/data/films.ts");
const docsPath = resolve(ROOT, "src/lib/data/docs.ts");

const films = parseEntries(filmsPath);
const docs = parseEntries(docsPath);
console.log(`Parsed ${films.length} films, ${docs.length} docs`);

const all = [
  ...films.map((f) => ({ ...f, kind: "film" })),
  ...docs.map((d) => ({ ...d, kind: "doc" })),
];

// --- Output ------------------------------------------------------------------

const postersDir = resolve(ROOT, "public/posters");
if (!existsSync(postersDir)) mkdirSync(postersDir, { recursive: true });
const manifestPath = resolve(postersDir, "manifest.json");

// --- OMDB --------------------------------------------------------------------

// Strip parenthetical alt-titles for fallback queries
function stripParens(title) {
  return title.replace(/\s*\([^)]*\)\s*/g, "").trim();
}

async function omdbQuery(params) {
  const url = `https://www.omdbapi.com/?${params}&apikey=${API_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
      return { posterUrl: data.Poster, imdbId: data.imdbID, source: params };
    }
    return null;
  } catch {
    return null;
  }
}

async function searchOmdb(entry) {
  const { title, year, director } = entry;
  const stripped = stripParens(title);

  const attempts = [
    `t=${encodeURIComponent(title)}&y=${year}`,
    `t=${encodeURIComponent(title)}`,
  ];
  if (stripped !== title) {
    attempts.push(`t=${encodeURIComponent(stripped)}&y=${year}`);
    attempts.push(`t=${encodeURIComponent(stripped)}`);
  }
  // Use search endpoint as last resort
  if (director) {
    attempts.push(`s=${encodeURIComponent(stripped)}&y=${year}&type=movie`);
    attempts.push(`s=${encodeURIComponent(stripped)}&type=movie`);
  }

  for (const params of attempts) {
    if (params.startsWith("s=")) {
      // Search endpoint returns Search[] — pick first with poster
      const url = `https://www.omdbapi.com/?${params}&apikey=${API_KEY}`;
      try {
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        if (data.Response !== "True" || !Array.isArray(data.Search)) continue;
        for (const hit of data.Search) {
          if (hit.Poster && hit.Poster !== "N/A") {
            return { posterUrl: hit.Poster, imdbId: hit.imdbID, source: params };
          }
        }
      } catch {
        // ignore
      }
      continue;
    }
    const result = await omdbQuery(params);
    if (result) return result;
  }
  return null;
}

async function downloadImage(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

// --- Main --------------------------------------------------------------------

async function main() {
  const manifest = [];
  let okCount = 0;
  let missCount = 0;

  for (let i = 0; i < all.length; i++) {
    const entry = all[i];
    const dest = resolve(postersDir, `${entry.slug}.jpg`);
    const prefix = `[${(i + 1).toString().padStart(2)}/${all.length}]`;
    const label = `${entry.kind} ${entry.title} (${entry.year})`;

    if (existsSync(dest)) {
      console.log(`${prefix} ${label} — already cached`);
      manifest.push({ slug: entry.slug, kind: entry.kind, title: entry.title, year: entry.year, found: true, cached: true });
      okCount++;
      continue;
    }

    try {
      const result = await searchOmdb(entry);
      if (!result) {
        console.log(`${prefix} ${label} — NOT FOUND`);
        manifest.push({ slug: entry.slug, kind: entry.kind, title: entry.title, year: entry.year, found: false });
        missCount++;
      } else {
        const size = await downloadImage(result.posterUrl, dest);
        const kb = (size / 1024).toFixed(0);
        console.log(`${prefix} ${label} — ${kb}KB [${result.imdbId}]`);
        manifest.push({
          slug: entry.slug,
          kind: entry.kind,
          title: entry.title,
          year: entry.year,
          found: true,
          imdbId: result.imdbId,
          source: result.source,
        });
        okCount++;
      }
    } catch (err) {
      console.log(`${prefix} ${label} — ERROR: ${err.message}`);
      manifest.push({ slug: entry.slug, kind: entry.kind, title: entry.title, year: entry.year, found: false, error: err.message });
      missCount++;
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\n${okCount} found, ${missCount} missing`);
  console.log(`Manifest: ${manifestPath}`);
}

main().catch((err) => {
  console.error("FAILED:", err);
  process.exit(1);
});
