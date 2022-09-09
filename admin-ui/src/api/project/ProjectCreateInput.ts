import { CategoryCreateNestedManyWithoutProjectsInput } from "./CategoryCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  categories?: CategoryCreateNestedManyWithoutProjectsInput;
  favoriteProjects?: UserWhereUniqueInput | null;
  projectDescription?: string | null;
  projectIcon: string;
  projectName: string;
  user?: UserWhereUniqueInput | null;
};
