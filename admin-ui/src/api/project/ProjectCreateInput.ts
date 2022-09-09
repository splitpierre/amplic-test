import { CategoryCreateNestedManyWithoutProjectsInput } from "./CategoryCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  categories?: CategoryCreateNestedManyWithoutProjectsInput;
  projectDescription?: string | null;
  projectIcon: string;
  projectName: string;
};
