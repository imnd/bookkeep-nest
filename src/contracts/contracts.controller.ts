import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateContractDto } from "./create-contract.dto";
import { ContractsService } from "./contracts.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Contract } from "./contracts.model";

@ApiTags('Contracts')
@Controller('api/contracts')
export class ContractsController {
  constructor(private service: ContractsService) {}

  @ApiOperation({summary: 'Create contract'})
  @ApiResponse({status: 200, type: Contract})
  @Post()
  create(@Body() dto: CreateContractDto) {
    return this.service.create(dto)
  }

  @ApiOperation({summary: 'Update contract'})
  @ApiResponse({status: 200, type: Contract})
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreateContractDto) {
    return this.service.update(param.id, dto)
  }

  @ApiOperation({summary: 'Get contract by ID'})
  @ApiResponse({status: 200, type: Contract})
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id)
  }

  @ApiOperation({summary: 'Get all contracts'})
  @ApiResponse({status: 200, type: [Contract]})
  @Get()
  findAll() {
    return this.service.findAll()
  }
}
