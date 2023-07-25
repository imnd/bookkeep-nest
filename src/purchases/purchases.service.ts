import { Injectable } from "@nestjs/common";
import { Purchase } from "./purchases.model";
import { InjectModel } from "@nestjs/sequelize";
import { PurchaseRowsService } from "../purchase-rows/purchase-rows.service";
import { DocumentService } from "../share/document-service";
import { FindOptions } from "sequelize/types/model";
import { PurchaseRow } from "../purchase-rows/purchase-rows.model";

@Injectable()
export class PurchasesService extends DocumentService {
  constructor(
    @InjectModel(Purchase) protected repository: typeof Purchase,
    protected service: PurchaseRowsService,
  ) {
    super();
  }

  async find(id: string) {
    return await this.repository.findByPk(id, {
      include: [{ model: PurchaseRow, as: "rows" }],
    });
  }

  async findAll(options?: object) {
    return await this.repository.findAll(<FindOptions>{
      ...options,
      ...{
        include: [{ model: PurchaseRow, as: "rows" }],
      },
    });
  }
}
