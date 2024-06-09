import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TableDataServiceBase } from "./base/tableData.service.base";

@Injectable()
export class TableDataService extends TableDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
