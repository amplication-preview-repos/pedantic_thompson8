import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedContentServiceBase } from "./base/processedContent.service.base";

@Injectable()
export class ProcessedContentService extends ProcessedContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
