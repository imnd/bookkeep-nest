import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { Region } from './regions.model';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [RegionsController],
  providers: [RegionsService],
  imports: [
    SequelizeModule.forFeature([Region])
  ]
})
export class RegionsModule {}
