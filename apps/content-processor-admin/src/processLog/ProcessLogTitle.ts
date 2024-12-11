import { ProcessLog as TProcessLog } from "../api/processLog/ProcessLog";

export const PROCESSLOG_TITLE_FIELD = "id";

export const ProcessLogTitle = (record: TProcessLog): string => {
  return record.id?.toString() || String(record.id);
};
