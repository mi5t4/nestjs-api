import { Injectable, NotFoundException } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { QueryTypes } from "sequelize";
import { IWidgetConfig } from "./dto";

@Injectable()
export class WidgetsService {
  constructor(private sequelize: Sequelize) {}

  async getWidgets() {
    try {
      const queryString = `SELECT * FROM widgets`;

      const result = (await this.sequelize.query(queryString, {
        logging: false,
        type: QueryTypes.SELECT,
      })) as IWidgetConfig[];

      if (!result) throw new NotFoundException("No Widgets Found");

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getWidget(id: number) {
    try {
      const queryString = `SELECT * FROM widgets WHERE id ='${id}'`;

      const [widget] = await this.sequelize.query(queryString, {
        logging: false,
        type: QueryTypes.SELECT,
      });

      if (!widget) throw new NotFoundException("No Widget Found");

      return widget;
    } catch (error) {
      throw error;
    }
  }
}
