import { Project } from "../project/Project";
import { User } from "../user/User";

export type Proposal = {
  createdAt: Date;
  id: string;
  longDescription: string | null;
  project?: Project | null;
  shortDescription: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
