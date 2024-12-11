import { ProcessedContentWhereInput } from "./ProcessedContentWhereInput";
import { ProcessedContentOrderByInput } from "./ProcessedContentOrderByInput";

export type ProcessedContentFindManyArgs = {
  where?: ProcessedContentWhereInput;
  orderBy?: Array<ProcessedContentOrderByInput>;
  skip?: number;
  take?: number;
};
