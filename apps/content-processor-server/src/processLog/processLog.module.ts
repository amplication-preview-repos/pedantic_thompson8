import { Module } from "@nestjs/common";
import { ProcessLogModuleBase } from "./base/processLog.module.base";
import { ProcessLogService } from "./processLog.service";
import { ProcessLogController } from "./processLog.controller";
import { ProcessLogResolver } from "./processLog.resolver";

@Module({
  imports: [ProcessLogModuleBase],
  controllers: [ProcessLogController],
  providers: [ProcessLogService, ProcessLogResolver],
  exports: [ProcessLogService],
})
export class ProcessLogModule {}
