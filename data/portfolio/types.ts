export type PreviewType = "image" | "video";

export interface ProjectMetadata {
  id: string;
  name: string;
  industry: string;
  client?: string;
  year?: string;
  status?: string;
  techStack?: string[];
  features: string[];
  accentColor: string;
  dotColor: string;
  previewType: PreviewType;
  screenshots: string[];
  thumbnail?: string;
  logo?: string;
  demoUrl?: string;
  githubUrl?: string;
}
