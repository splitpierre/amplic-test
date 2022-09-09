import { CategoryUpdateManyWithoutProjectsInput } from "./CategoryUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  categories?: CategoryUpdateManyWithoutProjectsInput;
  projectDescription?: string | null;
  projectIcon?: string;
  projectName?: string;
};
