import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { Setting } from './settings.model';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [SettingsController],
  providers: [SettingsService],
  imports: [
    SequelizeModule.forFeature([Setting])
  ]
})
export class SettingsModule {}
