import { CategoryUpdateManyWithoutProjectsInput } from "./CategoryUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  categories?: CategoryUpdateManyWithoutProjectsInput;
  favoriteProjects?: UserWhereUniqueInput | null;
  projectDescription?: string | null;
  projectIcon?: string;
  projectName?: string;
  user?: UserWhereUniqueInput | null;
};
