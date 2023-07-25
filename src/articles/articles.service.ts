import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Article } from "./articles.model";
import { Service } from "../share/service";

@Injectable()
export class ArticlesService extends Service {
  constructor(@InjectModel(Article) protected repository: typeof Article) {
    super();
  }
}
