import { Module } from '@nestjs/common';
import { InvoiceRowsService } from "./invoice-rows.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { InvoiceRow } from "./invoice-rows.model";

@Module({
  providers: [InvoiceRowsService],
  imports: [
    SequelizeModule.forFeature([InvoiceRow])
  ],
  exports: [InvoiceRowsService]
})
export class InvoiceRowsModule {}
