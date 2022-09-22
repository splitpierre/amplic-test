import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type UserWhereInput = {
  address?: StringFilter;
  apiKey?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  proposals?: ProposalListRelationFilter;
  username?: StringFilter;
};
