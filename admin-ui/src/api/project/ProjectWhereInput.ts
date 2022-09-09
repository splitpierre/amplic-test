import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProjectWhereInput = {
  categories?: CategoryListRelationFilter;
  favoriteProjects?: UserWhereUniqueInput;
  id?: StringFilter;
  projectDescription?: StringNullableFilter;
  projectIcon?: StringFilter;
  projectName?: StringFilter;
  user?: UserWhereUniqueInput;
};
