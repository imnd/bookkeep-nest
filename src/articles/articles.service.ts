import { Injectable } from "@nestjs/common";
import { Article } from "./articles.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";

@Injectable()
export class ArticlesService extends Service {
  constructor(@InjectModel(Article) protected repository: typeof Article) {
    super();
  }
}
