import { Module } from '@nestjs/common';
import { BanksController } from './banks.controller';
import { BanksService } from './banks.service';
import { Bank } from './banks.model';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [BanksController],
  providers: [BanksService],
  imports: [
    SequelizeModule.forFeature([Bank])
  ]
})
export class BanksModule {}
