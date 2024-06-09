import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TableDataService } from "./tableData.service";
import { TableDataControllerBase } from "./base/tableData.controller.base";

@swagger.ApiTags("tableData")
@common.Controller("tableData")
export class TableDataController extends TableDataControllerBase {
  constructor(protected readonly service: TableDataService) {
    super(service);
  }
}
