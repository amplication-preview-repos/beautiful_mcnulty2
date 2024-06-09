import * as graphql from "@nestjs/graphql";
import { TableDataResolverBase } from "./base/tableData.resolver.base";
import { TableData } from "./base/TableData";
import { TableDataService } from "./tableData.service";

@graphql.Resolver(() => TableData)
export class TableDataResolver extends TableDataResolverBase {
  constructor(protected readonly service: TableDataService) {
    super(service);
  }
}
