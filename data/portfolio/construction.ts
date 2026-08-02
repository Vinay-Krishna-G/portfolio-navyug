import { ProjectMetadata } from "./types";

export const constructionProject: ProjectMetadata = {
  id: "construction",
  name: "Construction Co.",
  industry: "Construction & Real Estate",
  client: "Apex Commercial Engineering",
  year: "2026",
  status: "Delivered",
  techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
  features: ["Project Gallery", "Cost Estimator", "Spec Sheets"],
  accentColor: "#B45309",
  dotColor: "#D97706",
  previewType: "image",
  screenshots: [
    "/portfolio/construction/screenshots/01-home.webp",
    "/portfolio/construction/screenshots/02-services.webp",
    "/portfolio/construction/screenshots/03-gallery.webp",
    "/portfolio/construction/screenshots/04-contact.webp",
  ],
  thumbnail: "/portfolio/construction/thumbnail.webp",
  demoUrl: "#contact",
};
