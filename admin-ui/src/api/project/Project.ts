import { Category } from "../category/Category";
import { User } from "../user/User";

export type Project = {
  categories?: Array<Category>;
  createdAt: Date;
  favoriteProjects?: User | null;
  id: string;
  projectDescription: string | null;
  projectIcon: string;
  projectName: string;
  updatedAt: Date;
  user?: User | null;
};
