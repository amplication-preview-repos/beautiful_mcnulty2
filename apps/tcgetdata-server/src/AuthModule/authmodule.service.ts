import { Injectable } from "@nestjs/common";
import { TableDataDto } from "../authModule/TableDataDto";
import { UserLoginInput } from "../authModule/UserLoginInput";

@Injectable()
export class AuthModuleService {
  constructor() {}
  async AuthFetchTableData(args: string): Promise<TableDataDto[]> {
    throw new Error("Not implemented");
  }
  async AuthUserLogin(args: UserLoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchTableData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UserLogin(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
