import { Injectable } from "@nestjs/common";
import { Client } from "./clients.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";
import {FindOptions} from "sequelize/types/model";
import {Bank} from "../banks/banks.model";
import {Region} from "../regions/regions.model";

@Injectable()
export class ClientsService extends Service {
  constructor(@InjectModel(Client) protected repository: typeof Client) {
    super();
  }

  async find(id: string) {
    return await this.repository.findByPk(id, {
      include: [{ model: Bank, as: "bank" }, { model: Region, as: "region" }],
    });
  }

  async findAll(options?: object) {
    return await this.repository.findAll(<FindOptions>{
      ...options,
      ...{
        include: [{ model: Bank, as: "bank" }, { model: Region, as: "region" } ],
      },
    });
  }
}
