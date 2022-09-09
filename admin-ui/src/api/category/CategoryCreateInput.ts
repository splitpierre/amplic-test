import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type CategoryCreateInput = {
  project?: ProjectWhereUniqueInput | null;
  slug?: string | null;
  title: string;
};
