class Database {
}
Database.host = "localhost"; // only classname.host according to static
const db = new Database();
// console.log(db.host); --> Error
console.log(Database.host); //localhost
console.log("------------------------------------------------------");
//Singleton design pattern
class Data {
    constructor() { }
    static getConnection() {
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
    constructor() {
        console.log(`Second constructor and PORT:${DB.port}`);
    }
}
DB.port = 8080;
(() => {
    console.log("First Static Block");
})();
const db1 = new DB();
