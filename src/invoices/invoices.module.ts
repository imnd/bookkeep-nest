import { Module } from '@nestjs/common';
import { InvoicesController } from "./invoices.controller";
import { InvoicesService } from "./invoices.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Invoice } from "./invoices.model";
import { InvoiceRowsModule } from "../invoice-rows/invoice-rows.module";
import { InvoiceBill } from "./invoice-bill.model";

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService],
  imports: [
    SequelizeModule.forFeature([Invoice, InvoiceBill]),
    InvoiceRowsModule
  ]
})
export class InvoicesModule {}
