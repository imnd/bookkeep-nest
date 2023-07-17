import { UpdateOptions } from "sequelize/types/model";
import { Service } from "./service";

export class HasRowsService extends Service {
  protected repository;
  protected service;
  protected parentIdName: string = "";

  async create (dto) {
    const contract = await this.repository.create(dto);

    const { rows, sum } = await this.createRows(contract.id, dto.rows);
    await contract.update({ sum });

    return {
      contract,
      rows
    }
  }

  async update (id, dto) {
    const res = await this.repository.update(dto, <UpdateOptions>{ where: { id: id } });
    if (0 == res[0]) {
      return null
    }

    await this.repository.update(dto, <UpdateOptions>{ where: { id: id } });

    await this.deleteRows(id);

    const { rows, sum } = await this.createRows(id, dto.rows);

    const contract = await this.repository.findByPk(id)
    await contract.update({ sum });

    return {
      contract,
      rows
    }
  }

  async delete (id) {
    await this.deleteRows(id);
    await this.repository.destroy({ where: { id: id } });
  }

  /**
   * delete all rows
   */
  async deleteRows (parentId) {
    let where = {}
    where[this.parentIdName] = parentId
    let rows = await this.service.findAll({ where })
    for (const row of rows) {
      await this.service.delete(row.id);
    }
  }

  /**
   * create new rows
   */
  async createRows (parentId: number, rowsData) {
    let rows = [];
    let sum = 0;
    for (const rowData of rowsData) {
      rowData[this.parentIdName] = parentId;
      let row = await this.service.create(rowData);
      rows.push(row);
      sum += row.price * row.quantity
    }

    return { rows, sum };
  }

}
