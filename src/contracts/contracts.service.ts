import { Injectable } from "@nestjs/common";
import { Contract } from "./contracts.model";
import { InjectModel } from "@nestjs/sequelize";
import { ContractRowsService } from "../contract-rows/contract-rows.service";
import { DocumentService } from "../share/document-service";
import { Client } from "../clients/clients.model";
import { FindOptions } from "sequelize/types/model";
import { ContractRow } from "../contract-rows/contract-rows.model";

@Injectable()
export class ContractsService extends DocumentService {
  constructor(
    @InjectModel(Contract) protected repository: typeof Contract,
    protected service: ContractRowsService,
  ) {
    super();
  }

  async find(id: string) {
    return await this.repository.findByPk(id, {
      include: [
        { model: Client, as: "client" },
        { model: ContractRow, as: "rows" },
      ],
    });
  }

  async findAll(options?: object) {
    return await this.repository.findAll(<FindOptions>{
      ...options,
      ...{
        include: [
          { model: Client, as: "client" },
          { model: ContractRow, as: "rows" },
        ],
      },
    });
  }
}
