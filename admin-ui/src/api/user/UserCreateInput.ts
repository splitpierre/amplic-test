import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { ProposalCreateNestedManyWithoutUsersInput } from "./ProposalCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  address: string;
  favoriteProjects?: ProjectCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  proposals?: ProposalCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
