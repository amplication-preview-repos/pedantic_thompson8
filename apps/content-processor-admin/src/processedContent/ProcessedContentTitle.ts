import { ProcessedContent as TProcessedContent } from "../api/processedContent/ProcessedContent";

export const PROCESSEDCONTENT_TITLE_FIELD = "id";

export const ProcessedContentTitle = (record: TProcessedContent): string => {
  return record.id?.toString() || String(record.id);
};
