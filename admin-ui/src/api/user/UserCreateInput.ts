import { ProposalCreateNestedManyWithoutUsersInput } from "./ProposalCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address: string;
  apiKey?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  proposals?: ProposalCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
