import { Injectable } from "@nestjs/common";
import { ArticleSubcategory } from "./article-subcategories.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";
import { FindOptions } from "sequelize/types/model";
import { ArticleCategory } from "../article-categories/article-categories.model";

@Injectable()
export class ArticleSubcategoriesService extends Service {
  constructor(
    @InjectModel(ArticleSubcategory)
    protected repository: typeof ArticleSubcategory,
  ) {
    super();
  }

  async find(id: string) {
    return await this.repository.findByPk(id, {
      include: [{ model: ArticleCategory, as: "category" }],
    });
  }

  async findAll(options?: object) {
    return await this.repository.findAll(<FindOptions>{
      ...options,
      ...{
        include: [{ model: ArticleCategory, as: "category" }],
      },
    });
  }
}
