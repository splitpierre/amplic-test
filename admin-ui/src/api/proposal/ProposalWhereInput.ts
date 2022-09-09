import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProposalWhereInput = {
  id?: StringFilter;
  longDescription?: StringNullableFilter;
  project?: StringNullableFilter;
  shortDescription?: StringNullableFilter;
  status?: "Active" | "Pending" | "Closed";
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
