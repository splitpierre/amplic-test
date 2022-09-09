import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type UserWhereInput = {
  address?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  proposals?: ProposalListRelationFilter;
  username?: StringFilter;
};
