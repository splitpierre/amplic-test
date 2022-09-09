import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProjectWhereInput = {
  categories?: CategoryListRelationFilter;
  id?: StringFilter;
  projectDescription?: StringNullableFilter;
  projectIcon?: StringFilter;
  projectName?: StringFilter;
};
