import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ContractRow } from "./contract-rows.model";
import { Service } from "../share/service";

@Injectable()
export class ContractRowsService extends Service {
  constructor(@InjectModel(ContractRow) protected repository: typeof ContractRow) {
    super();
  }
}
