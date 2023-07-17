import { Module } from '@nestjs/common';
import { ArticleCategoriesController } from './article-categories.controller';
import { ArticleCategoriesService } from './article-categories.service';
import { ArticleCategory } from './article-categories.model';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [ArticleCategoriesController],
  providers: [ArticleCategoriesService],
  imports: [
    SequelizeModule.forFeature([ArticleCategory])
  ]
})
export class ArticleCategoriesModule {}
