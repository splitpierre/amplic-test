import { Proposal } from "../proposal/Proposal";
import { JsonValue } from "type-fest";

export type User = {
  address: string;
  apiKey: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  proposals?: Array<Proposal>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
