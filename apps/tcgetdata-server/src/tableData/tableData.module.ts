import { Module } from "@nestjs/common";
import { TableDataModuleBase } from "./base/tableData.module.base";
import { TableDataService } from "./tableData.service";
import { TableDataController } from "./tableData.controller";
import { TableDataResolver } from "./tableData.resolver";

@Module({
  imports: [TableDataModuleBase],
  controllers: [TableDataController],
  providers: [TableDataService, TableDataResolver],
  exports: [TableDataService],
})
export class TableDataModule {}
