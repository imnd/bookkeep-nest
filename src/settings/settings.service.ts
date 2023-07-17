import { Injectable } from "@nestjs/common";
import { Setting } from "./settings.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateSettingsDto } from "./create-settings.dto";
import { Service } from "../share/service";

@Injectable()
export class SettingsService extends Service {
  constructor(@InjectModel(Setting) protected repository: typeof Setting) {
    super();
  }

  async create (dto: CreateSettingsDto) {
    let settings = await this.repository.findAll({ where: { key: dto.key } })
    if (settings.length === 0) {
      return await this.repository.create(dto);
    }
    return false;
  }
}
