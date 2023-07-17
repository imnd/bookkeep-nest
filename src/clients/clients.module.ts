import { Module } from '@nestjs/common';
import { ClientsController } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Client } from "./clients.model";
import { Article } from "../articles/articles.model";
import { ClientArticlePrice } from "./client-article-prices.model";

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    SequelizeModule.forFeature([Client, Article, ClientArticlePrice])
  ]
})
export class ClientsModule {}
