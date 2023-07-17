import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article } from './articles.model';
import { SequelizeModule } from "@nestjs/sequelize";
import { Client } from "../clients/clients.model";
import { ClientArticlePrice } from "../clients/client-article-prices.model";

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [
    SequelizeModule.forFeature([Article, Client, ClientArticlePrice])
  ]
})
export class ArticlesModule {}
