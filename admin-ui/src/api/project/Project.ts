import { Category } from "../category/Category";

export type Project = {
  categories?: Array<Category>;
  createdAt: Date;
  id: string;
  projectDescription: string | null;
  projectIcon: string;
  projectName: string;
  updatedAt: Date;
};
