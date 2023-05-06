import { AssetCollection } from "contentful";

export interface Project {
  name: string;
  projectsName: string;
  description: string;
  images: AssetCollection;
}
