import type { Metadata } from "next";
import { Anton, Inter, Special_Elite } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap"
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-elite",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Women of Punk — A History in Noise",
  description:
    "A monument to the women who built punk: the bands, the records, the films, the books, the voices. Loud, unfinished, ours.",
  openGraph: {
    title: "Women of Punk",
    description: "A history in noise.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${specialElite.variable} ${inter.variable}`}>
      <body className="paper-bg min-h-screen flex flex-col font-body">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
