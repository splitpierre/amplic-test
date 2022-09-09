import { Proposal } from "../proposal/Proposal";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  projectDescription: string | null;
  projectIcon: string;
  projectName: string;
  proposals?: Array<Proposal>;
  updatedAt: Date;
  user?: User | null;
};
