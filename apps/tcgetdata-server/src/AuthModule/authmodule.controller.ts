import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthModuleService } from "./authmodule.service";
import { TableDataDto } from "../authModule/TableDataDto";

@swagger.ApiTags("authModules")
@common.Controller("authModules")
export class AuthModuleController {
  constructor(protected readonly service: AuthModuleService) {}

  @common.Get("/auth/table-data")
  @swagger.ApiOkResponse({
    type: TableDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthFetchTableData(
    @common.Body()
    body: string
  ): Promise<TableDataDto[]> {
        return this.service.AuthFetchTableData(body);
      }

  @common.Post("/auth/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthUserLogin(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AuthUserLogin(body);
      }

  @common.Get("/:id/fetch-table-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchTableData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchTableData(body);
      }

  @common.Get("/:id/user-login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserLogin(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UserLogin(body);
      }
}
