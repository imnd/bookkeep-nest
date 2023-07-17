import { Injectable } from "@nestjs/common";
import { Bank } from "./banks.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";

@Injectable()
export class BanksService extends Service {
  constructor(@InjectModel(Bank) protected repository: typeof Bank) {
    super();
  }
}
