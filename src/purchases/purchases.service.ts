import { Injectable } from "@nestjs/common";
import { Purchase } from "./purchases.model";
import { InjectModel } from "@nestjs/sequelize";
import { PurchaseRowsService } from "../purchase-rows/purchase-rows.service";
import { DocumentService } from "../share/document-service";

@Injectable()
export class PurchasesService extends DocumentService {
  constructor(
    @InjectModel(Purchase) protected repository: typeof Purchase,
    protected service: PurchaseRowsService,
  ) {
    super();
  }
}
