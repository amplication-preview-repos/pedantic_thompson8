import { ProcessLogWhereInput } from "./ProcessLogWhereInput";
import { ProcessLogOrderByInput } from "./ProcessLogOrderByInput";

export type ProcessLogFindManyArgs = {
  where?: ProcessLogWhereInput;
  orderBy?: Array<ProcessLogOrderByInput>;
  skip?: number;
  take?: number;
};
