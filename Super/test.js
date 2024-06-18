class Base {
    hello() {
        console.log(`Hello, World`);
    }
}
class Derived extends Base {
    hello(name) {
        if (name === undefined) {
            console.log(super.hello());
        }
        else {
            console.log(`Hello, ${(name === null || name === void 0 ? void 0 : name.charAt(0)) + (name === null || name === void 0 ? void 0 : name.slice(1))}`);
        }
    }
}
const d = new Derived();
d.hello(); //Hello, World
d.hello("Ulvi"); //Hello, Ulvi
console.log("------------------------------------------------------");
class CustomError extends Error {
    constructor(message) {
        super(message);
    }
    printError() {
        return "This is " + this.message;
    }
}
const notFound404 = new CustomError("Not Found 404");
console.log(notFound404.printError());
