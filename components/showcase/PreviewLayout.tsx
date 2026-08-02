"use client";

import Image from "next/image";
import { ProjectMetadata } from "@/data/projects";

interface PreviewLayoutProps {
  project: ProjectMetadata;
}

export default function PreviewLayout({ project }: PreviewLayoutProps) {
  const currentImage = project.screenshots[0] || project.thumbnail || "/portfolio/restaurant/thumbnail.webp";

  return (
    <div className="w-full h-full relative font-sans select-none pointer-events-none bg-white">
      <Image
        src={currentImage}
        alt={`${project.name} preview`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top"
      />
    </div>
  );
}
