import * as graphql from "@nestjs/graphql";
import { ProcessedContentResolverBase } from "./base/processedContent.resolver.base";
import { ProcessedContent } from "./base/ProcessedContent";
import { ProcessedContentService } from "./processedContent.service";

@graphql.Resolver(() => ProcessedContent)
export class ProcessedContentResolver extends ProcessedContentResolverBase {
  constructor(protected readonly service: ProcessedContentService) {
    super(service);
  }
}
