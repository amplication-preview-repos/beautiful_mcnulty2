import { TableData as TTableData } from "../api/tableData/TableData";

export const TABLEDATA_TITLE_FIELD = "id";

export const TableDataTitle = (record: TTableData): string => {
  return record.id?.toString() || String(record.id);
};
