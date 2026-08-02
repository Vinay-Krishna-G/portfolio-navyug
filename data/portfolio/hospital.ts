import { ProjectMetadata } from "./types";

export const hospitalProject: ProjectMetadata = {
  id: "hospital",
  name: "Hospital & Healthcare",
  industry: "Healthcare",
  client: "St. Jude Specialist Center",
  year: "2026",
  status: "Delivered",
  techStack: ["Next.js", "TailwindCSS", "TypeScript"],
  features: ["Appointment Booking", "Doctor Directory", "Emergency Hotline"],
  accentColor: "#0369A1",
  dotColor: "#0284C7",
  previewType: "image",
  screenshots: [
    "/portfolio/hospital/screenshots/01-home.webp",
    "/portfolio/hospital/screenshots/02-services.webp",
    "/portfolio/hospital/screenshots/03-gallery.webp",
    "/portfolio/hospital/screenshots/04-contact.webp",
  ],
  thumbnail: "/portfolio/hospital/thumbnail.webp",
  demoUrl: "#contact",
};
