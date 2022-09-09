import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  projectDescription?: StringNullableFilter;
  projectIcon?: StringFilter;
  projectName?: StringFilter;
  proposals?: ProposalListRelationFilter;
  user?: UserWhereUniqueInput;
};
