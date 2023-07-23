import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateClientDto } from "./create-client.dto";
import { ClientsService } from "./clients.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Client } from "./clients.model";

@ApiTags("Clients")
@Controller("api/clients")
export class ClientsController {
  constructor(private service: ClientsService) {}

  @ApiOperation({ summary: "Create client" })
  @ApiResponse({ status: 200, type: Client })
  @Post()
  create(@Body() dto: CreateClientDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: "Update client" })
  @ApiResponse({ status: 200, type: Client })
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreateClientDto) {
    dto.active = dto.active ? dto.active : false;
    return this.service.update(param.id, dto);
  }

  @ApiOperation({ summary: "Get client by ID" })
  @ApiResponse({ status: 200, type: Client })
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id);
  }

  @ApiOperation({ summary: "Delete client" })
  @ApiResponse({ status: 200 })
  @Delete(":id")
  delete(@Param() param: { id: string }) {
    return this.service.delete(param.id);
  }

  @ApiOperation({ summary: "Get all clients" })
  @ApiResponse({ status: 200, type: [Client] })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
