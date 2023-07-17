import { Injectable } from "@nestjs/common";
import { Invoice } from "./invoices.model";
import { InjectModel } from "@nestjs/sequelize";
import { InvoiceRowsService } from "../invoice-rows/invoice-rows.service";
import { HasRowsService } from "../share/has-rows-service";

@Injectable()
export class InvoicesService extends HasRowsService {
  constructor(
    @InjectModel(Invoice) protected repository: typeof Invoice,
    protected service: InvoiceRowsService
  ) {
    super();
    this.parentIdName = "invoiceId";
  }
}
