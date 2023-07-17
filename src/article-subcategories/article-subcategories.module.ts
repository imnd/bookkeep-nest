import { Module } from '@nestjs/common';
import { ArticleSubcategoriesController } from './article-subcategories.controller';
import { ArticleSubcategoriesService } from './article-subcategories.service';
import { ArticleSubcategory } from './article-subcategories.model';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [ArticleSubcategoriesController],
  providers: [ArticleSubcategoriesService],
  imports: [
    SequelizeModule.forFeature([ArticleSubcategory])
  ]
})
export class ArticleSubcategoriesModule {}
