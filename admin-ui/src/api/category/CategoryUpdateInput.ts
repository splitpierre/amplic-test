import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type CategoryUpdateInput = {
  project?: ProjectWhereUniqueInput | null;
  slug?: string | null;
  title?: string;
};
