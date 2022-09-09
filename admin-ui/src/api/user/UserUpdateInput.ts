import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { ProposalUpdateManyWithoutUsersInput } from "./ProposalUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  address?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  projects?: ProjectUpdateManyWithoutUsersInput;
  proposals?: ProposalUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
