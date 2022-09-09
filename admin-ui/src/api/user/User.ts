import { Project } from "../project/Project";
import { Proposal } from "../proposal/Proposal";

export type User = {
  address: string;
  createdAt: Date;
  favoriteProjects?: Array<Project>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Project>;
  proposals?: Array<Proposal>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
