import { TableDataWhereInput } from "./TableDataWhereInput";
import { TableDataOrderByInput } from "./TableDataOrderByInput";

export type TableDataFindManyArgs = {
  where?: TableDataWhereInput;
  orderBy?: Array<TableDataOrderByInput>;
  skip?: number;
  take?: number;
};
