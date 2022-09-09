import { SortOrder } from "../../util/SortOrder";

export type ProposalOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  longDescription?: SortOrder;
  projectId?: SortOrder;
  shortDescription?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
