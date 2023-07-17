import { Injectable } from "@nestjs/common";
import { Client } from "./clients.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";

@Injectable()
export class ClientsService extends Service {
  constructor(@InjectModel(Client) protected repository: typeof Client) {
    super();
  }
}
