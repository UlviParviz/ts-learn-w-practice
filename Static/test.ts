class Database {
  public static host: string = "localhost"; // only classname.host according to static
}

const db = new Database();

// console.log(db.host); --> Error
console.log(Database.host); //localhost

console.log("------------------------------------------------------");

//Singleton design pattern
class Data {
  private constructor() {}
  private static instance: Data;
  public static getConnection(): Data {
    if (!Data.instance) {
      Data.instance = new Data();
    }
    return Data.instance;
  }
}

// const data = new Data() --> Error because constructor is private

const data1 = Data.getConnection(); //New instance
const data2 = Data.getConnection(); //Same instance
const data3 = Data.getConnection(); //Same instance

console.log("------------------------------------------------------");

class DB {
  static port: number = 8080;

  static {
    console.log("First Static Block"); //1st
  }

  constructor() {
    console.log(`Second constructor and PORT:${DB.port}`); //2nd (default 1st)
  }
}

const db1 = new DB();
