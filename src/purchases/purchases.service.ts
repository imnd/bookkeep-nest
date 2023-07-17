import { Injectable } from "@nestjs/common";
import { Purchase } from "./purchases.model";
import { InjectModel } from "@nestjs/sequelize";
import { PurchaseRowsService } from "../purchase-rows/purchase-rows.service";
import { HasRowsService } from "../share/has-rows-service";

@Injectable()
export class PurchasesService extends HasRowsService {
  constructor(
    @InjectModel(Purchase) protected repository: typeof Purchase,
    protected service: PurchaseRowsService
  ) {
    super();
    this.parentIdName = "purchaseId";
  }
}
