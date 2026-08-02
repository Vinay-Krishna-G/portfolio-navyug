import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { BRAND } from "@/lib/brand";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: BRAND.themeColor,
};

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description: `${BRAND.name} crafts modern websites and AI-powered digital products for ambitious businesses. ${BRAND.subhead}`,
  keywords: ["web design", "web development", "AI websites", "agency", "NavYug", "digital agency"],
  icons: {
    icon: [
      { url: BRAND.assets.faviconSvg, type: "image/svg+xml" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: BRAND.assets.appleTouchIcon, sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: BRAND.assets.faviconSvg, color: BRAND.accentLime },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: "Crafting websites that businesses remember.",
    url: BRAND.websiteUrl,
    siteName: BRAND.name,
    type: "website",
    images: [
      {
        url: BRAND.assets.ogImage,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: "Crafting websites that businesses remember.",
    images: [BRAND.assets.twitterImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
