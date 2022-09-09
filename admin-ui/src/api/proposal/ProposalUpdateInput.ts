import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProposalUpdateInput = {
  longDescription?: string | null;
  project?: string | null;
  shortDescription?: string | null;
  status?: "Active" | "Pending" | "Closed" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
