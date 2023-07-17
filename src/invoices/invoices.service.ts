import { Injectable } from "@nestjs/common";
import { Invoice } from "./invoices.model";
import { InjectModel } from "@nestjs/sequelize";
import { InvoiceRowsService } from "../invoice-rows/invoice-rows.service";
import { DocumentService } from "../share/document-service";

@Injectable()
export class InvoicesService extends DocumentService {
  constructor(
    @InjectModel(Invoice) protected repository: typeof Invoice,
    protected service: InvoiceRowsService,
  ) {
    super();
  }
}
