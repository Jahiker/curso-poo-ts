export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: "",
//   password: "",
//   port: 23,
//   connect(): void {

//   }
// };

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    throw new Error("Method not implemented");
  }

  disconnect(): void {
    throw new Error("Method not implemented");
  }

  isConnected(name: string): boolean {
    return name != "";
  }
}
const postgresDb = new PostgresDriver("database", "1234", 3000);

class MysqlDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}

  disconnect(): void {}

  isConnected(name: string): boolean {
    return name != "";
  }
}
const mysqlDb = new MysqlDriver("database", "1234", 3000);
