import { ProjectMetadata } from "./portfolio/types";
import { restaurantProject } from "./portfolio/restaurant";
import { giftShopProject } from "./portfolio/gift-shop";
import { boutiqueProject } from "./portfolio/boutique";
import { gymProject } from "./portfolio/gym";
import { hospitalProject } from "./portfolio/hospital";
import { constructionProject } from "./portfolio/construction";

export type { ProjectMetadata } from "./portfolio/types";
export type ProjectData = import("./portfolio/types").ProjectMetadata;

export const PROJECTS: ProjectMetadata[] = [
  restaurantProject,
  giftShopProject,
  boutiqueProject,
  gymProject,
  hospitalProject,
  constructionProject,
];
