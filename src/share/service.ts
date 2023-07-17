import { FindOptions, UpdateOptions } from "sequelize/types/model";

export class Service {
  protected repository;

  async create (dto) {
    return await this.repository.create(dto)
  }

  async update (id, dto) {
    return await this.repository.update(dto, <UpdateOptions>{ where: { id: id } });
  }

  async find (id: string) {
    return await this.repository.findByPk(id);
  }

  async findAll (options?: object) {
    return await this.repository.findAll(<FindOptions>options)
  }

  async delete (id) {
    return await this.repository.destroy({ where: { id: id } });
  }
}
