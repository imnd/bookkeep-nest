import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreatePurchaseDto } from "./create-purchase.dto";
import { PurchasesService } from "./purchases.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Purchase } from "./purchases.model";

@ApiTags("Purchases")
@Controller("api/purchases")
export class PurchasesController {
  constructor(private service: PurchasesService) {}

  @ApiOperation({ summary: "Create purchase" })
  @ApiResponse({ status: 200, type: Purchase })
  @Post()
  create(@Body() dto: CreatePurchaseDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: "Update purchase" })
  @ApiResponse({ status: 200, type: Purchase })
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreatePurchaseDto) {
    return this.service.update(param.id, dto);
  }

  @ApiOperation({ summary: "Get purchase by ID" })
  @ApiResponse({ status: 200, type: Purchase })
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id);
  }

  @ApiOperation({ summary: "Delete purchase" })
  @ApiResponse({ status: 200 })
  @Delete(":id")
  delete(@Param() param: { id: string }) {
    return this.service.delete(param.id);
  }

  @ApiOperation({ summary: "Get all purchases" })
  @ApiResponse({ status: 200, type: [Purchase] })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
