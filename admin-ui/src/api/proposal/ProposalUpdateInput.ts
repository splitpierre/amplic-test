import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProposalUpdateInput = {
  longDescription?: string | null;
  project?: ProjectWhereUniqueInput | null;
  shortDescription?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
