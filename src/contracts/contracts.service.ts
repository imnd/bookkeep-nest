import { Injectable } from "@nestjs/common";
import { Contract } from "./contracts.model";
import { InjectModel } from "@nestjs/sequelize";
import { ContractRowsService } from "../contract-rows/contract-rows.service";
import { DocumentService } from "../share/document-service";

@Injectable()
export class ContractsService extends DocumentService {
  constructor(
    @InjectModel(Contract) protected repository: typeof Contract,
    protected service: ContractRowsService,
  ) {
    super();
  }
}
