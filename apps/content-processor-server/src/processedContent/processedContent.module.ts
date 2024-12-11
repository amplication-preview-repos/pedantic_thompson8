import { Module } from "@nestjs/common";
import { ProcessedContentModuleBase } from "./base/processedContent.module.base";
import { ProcessedContentService } from "./processedContent.service";
import { ProcessedContentController } from "./processedContent.controller";
import { ProcessedContentResolver } from "./processedContent.resolver";

@Module({
  imports: [ProcessedContentModuleBase],
  controllers: [ProcessedContentController],
  providers: [ProcessedContentService, ProcessedContentResolver],
  exports: [ProcessedContentService],
})
export class ProcessedContentModule {}
