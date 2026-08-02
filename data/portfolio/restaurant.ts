import { ProjectMetadata } from "./types";

export const restaurantProject: ProjectMetadata = {
  id: "restaurant",
  name: "Restaurant Website",
  industry: "Food & Beverage",
  client: "Maison Artisanal Bistro",
  year: "2026",
  status: "Delivered",
  techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
  features: ["Reservation System", "WhatsApp Ordering", "SEO Optimized"],
  accentColor: "#5F8E1E",
  dotColor: "#86D227",
  previewType: "image",
  screenshots: [
    "/portfolio/restaurant/screenshots/01-home.webp",
    "/portfolio/restaurant/screenshots/02-services.webp",
    "/portfolio/restaurant/screenshots/03-gallery.webp",
    "/portfolio/restaurant/screenshots/04-contact.webp",
  ],
  thumbnail: "/portfolio/restaurant/thumbnail.webp",
  demoUrl: "#contact",
};
