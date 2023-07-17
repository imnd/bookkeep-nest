import { Injectable } from "@nestjs/common";
import { Region } from "./regions.model";
import { InjectModel } from "@nestjs/sequelize";
import { Service } from "../share/service";

@Injectable()
export class RegionsService extends Service {
  constructor(@InjectModel(Region) protected repository: typeof Region) {
    super();
  }
}
