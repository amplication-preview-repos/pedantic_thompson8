import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessLogServiceBase } from "./base/processLog.service.base";

@Injectable()
export class ProcessLogService extends ProcessLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
