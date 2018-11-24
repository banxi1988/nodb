/**
 * 表格列声明基类,各类型以子类具体类型类实现
 */
export abstract class Column<T> {
  constructor(
    /* Name of this column, \000, then the type */
    readonly name: string,
    readonly defaultValue: T
  ) {}
}

/**
 * 字符串列类型
 */
export class StringColumn extends Column<string> {
  constructor(name: string, defaultValue: string = "") {
    super(name, defaultValue);
  }
}

/**
 * 数字列类型
 */
export class NumberColumn extends Column<number> {
  constructor(name: string, defaultValue: number = 0) {
    super(name, defaultValue);
  }
}

/**
 *  Allowed values for Column.colFlags:
 */
export const enum ColFlag {
  /**
   * Column is part of the primary key
   */
  primkey = 0x1,
  /**
   * A hidden column in a virtual table
   */ hidden = 0x2,
  /**
   * Type name follows column name
   */ hastype = 0x4,
  /**
   * Column def contains "UNIQUE" or "PK"
   */ unique = 0x8,
  /**
   *  Use sorter-refs with this column
   */ sorterref,
}
