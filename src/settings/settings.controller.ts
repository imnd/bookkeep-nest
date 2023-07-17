import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateSettingsDto } from "./create-settings.dto";
import { SettingsService } from "./settings.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Setting } from "./settings.model";

@ApiTags('Settings')
@Controller('api/settings')
export class SettingsController {
  constructor(private service: SettingsService) {}

  @Post()
  @ApiOperation({summary: 'Create setting'})
  @ApiResponse({status: 200, type: Setting})
  create(@Body() dto: CreateSettingsDto) {
    return this.service.create(dto) || { message: "Setting already exist." }
  }

  @Post(":id")
  @ApiOperation({summary: 'Update setting'})
  @ApiResponse({status: 200, type: Setting})
  update(@Param() param: { id: string }, @Body() dto: CreateSettingsDto) {
    return this.service.update(param.id, dto)
  }

  @Get(":id")
  @ApiOperation({'summary': 'Get setting by ID'})
  @ApiResponse({status: 200, type: Setting})
  get(@Param() param: { id: string }) {
    return this.service.find(param.id)
  }

  @Get()
  @ApiOperation({'summary': 'Get all settings'})
  @ApiResponse({status: 200, type: [Setting]})
  findAll() {
    return this.service.findAll()
  }
}
