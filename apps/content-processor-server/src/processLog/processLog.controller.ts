import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessLogService } from "./processLog.service";
import { ProcessLogControllerBase } from "./base/processLog.controller.base";

@swagger.ApiTags("processLogs")
@common.Controller("processLogs")
export class ProcessLogController extends ProcessLogControllerBase {
  constructor(protected readonly service: ProcessLogService) {
    super(service);
  }
}
