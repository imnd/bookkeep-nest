import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRegionsDto } from "./create-regions.dto";
import { RegionsService } from "./regions.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Region } from "./regions.model";

@ApiTags('Regions')
@Controller('api/regions')
export class RegionsController {
  constructor(private service: RegionsService) {}

  @Post()
  @ApiOperation({summary: 'Create region'})
  @ApiResponse({status: 200, type: Region})
  create(@Body() dto: CreateRegionsDto) {
    return this.service.create(dto)
  }

  @Post(":id")
  @ApiOperation({summary: 'Update region'})
  @ApiResponse({status: 200, type: Region})
  update(@Param() param: { id: string }, @Body() dto: CreateRegionsDto) {
    return this.service.update(param.id, dto)
  }

  @Get(":id")
  @ApiOperation({'summary': 'Get region by ID'})
  @ApiResponse({status: 200, type: Region})
  get(@Param() param: { id: string }) {
    return this.service.find(param.id)
  }

  @Get()
  @ApiOperation({'summary': 'Get all regions'})
  @ApiResponse({status: 200, type: [Region]})
  findAll() {
    return this.service.findAll()
  }
}
