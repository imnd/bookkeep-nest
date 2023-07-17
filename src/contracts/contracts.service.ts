import { Injectable } from "@nestjs/common";
import { Contract } from "./contracts.model";
import { InjectModel } from "@nestjs/sequelize";
import { ContractRowsService } from "../contract-rows/contract-rows.service";
import { HasRowsService } from "../share/has-rows-service";

@Injectable()
export class ContractsService extends HasRowsService {
  constructor(
    @InjectModel(Contract) protected repository: typeof Contract,
    protected service: ContractRowsService,
  ) {
    super();
    this.parentIdName = "contractId";
  }
}
