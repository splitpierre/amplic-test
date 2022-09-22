import { ProposalUpdateManyWithoutUsersInput } from "./ProposalUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string;
  apiKey?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  proposals?: ProposalUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
