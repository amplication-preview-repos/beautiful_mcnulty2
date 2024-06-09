import * as graphql from "@nestjs/graphql";
import { TableDataDto } from "../authModule/TableDataDto";
import { UserLoginInput } from "../authModule/UserLoginInput";
import { AuthModuleService } from "./authmodule.service";

export class AuthModuleResolver {
  constructor(protected readonly service: AuthModuleService) {}

  @graphql.Query(() => [TableDataDto])
  async AuthFetchTableData(
    @graphql.Args()
    args: string
  ): Promise<TableDataDto[]> {
    return this.service.AuthFetchTableData(args);
  }

  @graphql.Mutation(() => String)
  async AuthUserLogin(
    @graphql.Args()
    args: UserLoginInput
  ): Promise<string> {
    return this.service.AuthUserLogin(args);
  }

  @graphql.Query(() => String)
  async FetchTableData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchTableData(args);
  }

  @graphql.Query(() => String)
  async UserLogin(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UserLogin(args);
  }
}
