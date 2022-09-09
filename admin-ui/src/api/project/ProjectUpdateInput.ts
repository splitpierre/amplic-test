import { ProposalUpdateManyWithoutProjectsInput } from "./ProposalUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  projectDescription?: string | null;
  projectIcon?: string;
  projectName?: string;
  proposals?: ProposalUpdateManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
