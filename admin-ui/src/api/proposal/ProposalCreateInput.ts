import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProposalCreateInput = {
  longDescription?: string | null;
  project?: string | null;
  shortDescription?: string | null;
  status?: "Active" | "Pending" | "Closed" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
