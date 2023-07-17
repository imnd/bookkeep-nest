import { Injectable } from "@nestjs/common";
import { Bill } from "./bills.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";

@Injectable()
export class BillsService extends Service {
  constructor(@InjectModel(Bill) protected repository: typeof Bill) {
    super();
  }
}
