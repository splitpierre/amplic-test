import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type UserWhereInput = {
  address?: StringFilter;
  favoriteProjects?: ProjectListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  proposals?: ProposalListRelationFilter;
  username?: StringFilter;
};
