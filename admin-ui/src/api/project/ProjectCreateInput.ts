import { ProposalCreateNestedManyWithoutProjectsInput } from "./ProposalCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  projectDescription?: string | null;
  projectIcon: string;
  projectName: string;
  proposals?: ProposalCreateNestedManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
