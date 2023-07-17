import { Module } from '@nestjs/common';
import { BillsController } from "./bills.controller";
import { BillsService } from "./bills.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Bill } from "./bills.model";
import { InvoiceBill } from "../invoices/invoice-bill.model";

@Module({
  controllers: [BillsController],
  providers: [BillsService],
  imports: [
    SequelizeModule.forFeature([Bill, InvoiceBill])
  ]
})
export class BillsModule {}
