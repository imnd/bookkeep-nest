import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Article } from './articles/articles.model';
import { ArticlesModule } from './articles/articles.module';
import { ArticleCategory } from "./article-categories/article-categories.model";
import { ArticleCategoriesModule } from "./article-categories/article-categories.module";
import { ArticleSubcategory } from "./article-subcategories/article-subcategories.model";
import { ArticleSubcategoriesModule } from "./article-subcategories/article-subcategories.module";
import { BillsModule } from './bills/bills.module';
import { Bill } from "./bills/bills.model";
import { ClientsModule } from "./clients/clients.module";
import { Client } from "./clients/clients.model";
import { BanksModule } from "./banks/banks.module";
import { Bank } from "./banks/banks.model";
import { RegionsModule } from "./regions/regions.module";
import { Region } from "./regions/regions.model";
import { ClientArticlePrice } from "./clients/client-article-prices.model";
import { ContractsModule } from "./contracts/contracts.module";
import { Contract } from "./contracts/contracts.model";
import { ContractRow } from "./contract-rows/contract-rows.model";
import { ContractRowsModule } from './contract-rows/contract-rows.module';
import { SettingsModule } from "./settings/settings.module";
import { Setting } from "./settings/settings.model";
import { InvoiceRow } from "./invoice-rows/invoice-rows.model";
import { Invoice } from "./invoices/invoices.model";
import { InvoicesModule } from "./invoices/invoices.module";
import { InvoiceRowsModule } from "./invoice-rows/invoice-rows.module";
import { InvoiceBill } from "./invoices/invoice-bill.model";
import { PurchasesModule } from "./purchases/purchases.module";
import { Purchase } from "./purchases/purchases.model";
import { PurchaseRowsModule } from "./purchase-rows/purchase-rows.module";
import { PurchaseRow } from "./purchase-rows/purchase-rows.model";

@Module({
  imports: [
    ConfigModule.forRoot(<ConfigModuleOptions>{
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    SequelizeModule.forRoot(<SequelizeModuleOptions>{
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [ Article, ArticleCategory, ArticleSubcategory, Bank, Bill, Client, ClientArticlePrice, Contract, ContractRow, Invoice, InvoiceBill, InvoiceRow, Purchase, PurchaseRow, Region, Setting ],
      autoLoadModels: true
    }),
    ArticlesModule,
    ArticleCategoriesModule,
    ArticleSubcategoriesModule,
    BanksModule,
    BillsModule,
    ClientsModule,
    ContractsModule,
    ContractRowsModule,
    InvoicesModule,
    InvoiceRowsModule,
    PurchasesModule,
    PurchaseRowsModule,
    RegionsModule,
    SettingsModule,
  ],
})
export class AppModule {}
