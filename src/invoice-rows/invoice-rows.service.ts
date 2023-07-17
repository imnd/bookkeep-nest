import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { InvoiceRow } from "./invoice-rows.model";
import { Service } from "../share/service";

@Injectable()
export class InvoiceRowsService extends Service {
  constructor(@InjectModel(InvoiceRow) protected repository: typeof InvoiceRow) {
    super();
  }
}
