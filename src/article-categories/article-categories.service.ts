import { Injectable } from "@nestjs/common";
import { ArticleCategory } from "./article-categories.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";

@Injectable()
export class ArticleCategoriesService extends Service {
  constructor(@InjectModel(ArticleCategory) protected repository: typeof ArticleCategory) {
    super();
  }
}
