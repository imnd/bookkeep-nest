import { Injectable } from "@nestjs/common";
import { Invoice } from "./invoices.model";
import { InjectModel } from "@nestjs/sequelize";
import { InvoiceRowsService } from "../invoice-rows/invoice-rows.service";
import { DocumentService } from "../share/document-service";
import { FindOptions } from "sequelize/types/model";
import { Client } from "../clients/clients.model";
import { RowModel } from "../share/row-model";
import { InvoiceRow } from "../invoice-rows/invoice-rows.model";

@Injectable()
export class InvoicesService extends DocumentService {
  constructor(
    @InjectModel(Invoice) protected repository: typeof Invoice,
    protected service: InvoiceRowsService,
  ) {
    super();
  }

  async find(id: string) {
    return await this.repository.findByPk(id, {
      include: [
        { model: Client, as: "client" },
        { model: InvoiceRow, as: "rows" },
      ],
    });
  }

  async findAll(options?: object) {
    return await this.repository.findAll(<FindOptions>{
      ...options,
      ...{
        include: [
          { model: Client, as: "client" },
          { model: InvoiceRow, as: "rows" },
        ],
      },
    });
  }
}
