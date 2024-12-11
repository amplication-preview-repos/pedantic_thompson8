import * as graphql from "@nestjs/graphql";
import { ProcessLogResolverBase } from "./base/processLog.resolver.base";
import { ProcessLog } from "./base/ProcessLog";
import { ProcessLogService } from "./processLog.service";

@graphql.Resolver(() => ProcessLog)
export class ProcessLogResolver extends ProcessLogResolverBase {
  constructor(protected readonly service: ProcessLogService) {
    super(service);
  }
}
