import { Injectable } from "@nestjs/common";
import { ArticleSubcategory } from "./article-subcategories.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";

@Injectable()
export class ArticleSubcategoriesService extends Service {
  constructor(@InjectModel(ArticleSubcategory) protected repository: typeof ArticleSubcategory) {
    super();
  }
}
