import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateBillDto } from "./create-bill.dto";
import { BillsService } from "./bills.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Bill } from "./bills.model";

@ApiTags('Bills')
@Controller('api/bills')
export class BillsController {
  constructor(private service: BillsService) {}

  @ApiOperation({summary: 'Create bill'})
  @ApiResponse({status: 200, type: Bill})
  @Post()
  create(@Body() dto: CreateBillDto) {
    return this.service.create(dto)
  }

  @ApiOperation({summary: 'Update bill'})
  @ApiResponse({status: 200, type: Bill})
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreateBillDto) {
    return this.service.update(param.id, dto)
  }

  @ApiOperation({'summary': 'Get bill by ID'})
  @ApiResponse({status: 200, type: Bill})
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id)
  }

  @ApiOperation({'summary': 'Get all bills'})
  @ApiResponse({status: 200, type: [Bill]})
  @Get()
  findAll() {
    return this.service.findAll()
  }
}
