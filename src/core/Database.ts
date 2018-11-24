import { Table } from "./Table";

/**
 * 数据库类
 */
export class Database {
  /**
   * 表名到表结构对象的映射
   */
  private nameToTable: Map<string, Table> = new Map();
  /**
   * 表名对表数据列表的映射
   */
  private nameToRows: Map<string, any[]> = new Map();
  constructor() {}

  /**
   * 添加新的表进数据库，如果已经存在同名表将添加失败
   * @param table 新的表结构对象
   */
  addTable(table: Table): boolean {
    if (this.nameToTable.has(table.name)) {
      return false;
    }
    this.nameToTable.set(table.name, table);
    return true;
  }

  /**
   * 根据表名查找对应表
   * @param name 表名
   */
  getTableByName(name: string) {
    return this.nameToTable.get(name);
  }

  /**
   * 根据表名称删除表，如果对应表不成功返回 false
   * @param name 表名称
   */
  deleteTableByName(name: string): boolean {
    return this.nameToTable.delete(name);
  }

  /**
   * 列出所有表名
   */
  listTableNames(): string[] {
    const names: string[] = [];
    for (const name of this.nameToTable.keys()) {
      names.push(name);
    }
    return names;
  }
}
