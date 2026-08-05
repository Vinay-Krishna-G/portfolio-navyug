export const BRAND = {
  name: "NavYug",
  tagline: "Premium Digital Experiences",
  subhead: "Design. Engineering. AI.",
  supportingText: "Built for ambitious businesses.",
  email: "hello@navyug.in",
  websiteUrl: "https://navyug.in",
  themeColor: "#F7F8FC",
  accentLime: "#FF6B5E",
  assets: {
    fullLogo: "/branding/full-logo.png",
    fullLogoWebp: "/branding/full-logo.webp",
    logoMark: "/branding/logo-mark.png",
    logoMarkWebp: "/branding/logo-mark.webp",
    logoWhite: "/branding/logo-white.png",
    logoGold: "/branding/logo-gold.png",
    faviconSvg: "/favicon/favicon.svg",
    faviconIco: "/favicon/favicon.ico",
    appleTouchIcon: "/favicon/apple-touch-icon.png",
    ogImage: "/social/og-image.png",
    twitterImage: "/social/twitter-image.png",
  },
} as const;

export type BrandConfig = typeof BRAND;
