import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateBankDto } from "./create-bank.dto";
import { BanksService } from "./banks.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Bank } from "./banks.model";
import { Article } from "../articles/articles.model";
import { CreateArticleDto } from "../articles/create-article.dto";

@ApiTags('Banks')
@Controller('api/banks')
export class BanksController {
  constructor(private service: BanksService) {}

  @ApiOperation({summary: 'Create bank'})
  @ApiResponse({status: 200, type: Bank})
  @Post()
  create(@Body() dto: CreateBankDto) {
    return this.service.create(dto)
  }

  @ApiOperation({summary: 'Update bank'})
  @ApiResponse({status: 200, type: Bank})
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreateBankDto) {
    return this.service.update(param.id, dto)
  }

  @ApiOperation({'summary': 'Get bank by ID'})
  @ApiResponse({status: 200, type: Bank})
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id)
  }

  @ApiOperation({'summary': 'Get all banks'})
  @ApiResponse({status: 200, type: [Bank]})
  @Get()
  findAll() {
    return this.service.findAll()
  }
}
