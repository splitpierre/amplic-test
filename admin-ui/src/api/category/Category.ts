import { Project } from "../project/Project";

export type Category = {
  createdAt: Date;
  id: string;
  project?: Project | null;
  slug: string | null;
  title: string;
  updatedAt: Date;
};
