import { Column } from "./Column";

/**
 * 数据表结构
 */
export class Table {
  constructor(
    /**
     * 表名称
     */
    readonly name: string,
    /**
     * 表列
     */
    readonly columns: Column<any>[]
  ) {}
}
