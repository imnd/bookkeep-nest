import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateInvoiceDto } from "./create-invoice.dto";
import { InvoicesService } from "./invoices.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Invoice } from "./invoices.model";

@ApiTags("Invoices")
@Controller("api/invoices")
export class InvoicesController {
  constructor(private service: InvoicesService) {}

  @ApiOperation({ summary: "Create invoice" })
  @ApiResponse({ status: 200, type: Invoice })
  @Post()
  create(@Body() dto: CreateInvoiceDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: "Update invoice" })
  @ApiResponse({ status: 200, type: Invoice })
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreateInvoiceDto) {
    return this.service.update(param.id, dto);
  }

  @ApiOperation({ summary: "Get invoice by ID" })
  @ApiResponse({ status: 200, type: Invoice })
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id);
  }

  @ApiOperation({ summary: "Delete invoice by ID" })
  @ApiResponse({ status: 200 })
  @Delete(":id")
  delete(@Param() param: { id: string }) {
    return this.service.delete(param.id);
  }

  @ApiOperation({ summary: "Get all invoices" })
  @ApiResponse({ status: 200, type: [Invoice] })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
