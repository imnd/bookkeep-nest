import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PurchaseRow } from "./purchase-rows.model";
import { Service } from "../share/service";

@Injectable()
export class PurchaseRowsService extends Service {
  constructor(@InjectModel(PurchaseRow) protected repository: typeof PurchaseRow) {
    super();
  }
}
