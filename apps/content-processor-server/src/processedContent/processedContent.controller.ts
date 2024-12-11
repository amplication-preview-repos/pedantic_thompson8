import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedContentService } from "./processedContent.service";
import { ProcessedContentControllerBase } from "./base/processedContent.controller.base";

@swagger.ApiTags("processedContents")
@common.Controller("processedContents")
export class ProcessedContentController extends ProcessedContentControllerBase {
  constructor(protected readonly service: ProcessedContentService) {
    super(service);
  }
}
