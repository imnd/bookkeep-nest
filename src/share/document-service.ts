import { UpdateOptions } from "sequelize/types/model";
import { Service } from "./service";

export class DocumentService extends Service {
  protected repository;
  protected service;

  async create(dto) {
    const model = await this.repository.create(dto);

    const { rows, sum } = await this.createRows(model.id, dto.rows);
    await model.update({ sum });

    return { model, rows };
  }

  async update(id: string, dto) {
    const res = await this.repository.update(dto, <UpdateOptions>{
      where: { id: id },
    });
    if (0 == res[0]) {
      return null;
    }

    await this.repository.update(dto, <UpdateOptions>{ where: { id: id } });

    await this.deleteRows(id);

    const { rows, sum } = await this.createRows(id, dto.rows);

    const model = await this.repository.findByPk(id);
    await model.update({ sum });

    return { model, rows };
  }

  async delete(id: string) {
    await this.deleteRows(id);
    await this.repository.destroy({ where: { id: id } });
  }

  /**
   * delete all rows
   */
  async deleteRows(parentId: string) {
    let rows = await this.service.findAll({
      where: {
        parentId,
      },
    });
    for (const row of rows) {
      await this.service.delete(row.id);
    }
  }

  /**
   * create new rows
   */
  async createRows(parentId: string, rowsData: any[]) {
    let rows = [],
      sum = 0;

    if (rowsData) {
      for (const rowData of rowsData) {
        rowData["parentId"] = parentId;
        let row = await this.service.create(rowData);
        rows.push(row);
        sum += row.price * row.quantity;
      }
    }

    return { rows, sum };
  }
}
