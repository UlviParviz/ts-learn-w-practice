class Base {
  hello() {
    console.log(`Hello, World`);
  }
}

class Derived extends Base {
  hello(name?: string): void {
    if (name === undefined) {
      console.log(super.hello());
    } else {
      console.log(`Hello, ${name?.charAt(0) + name?.slice(1)}`);
    }
  }
}

const d = new Derived();
d.hello(); //Hello, World
d.hello("Ulvi"); //Hello, Ulvi

console.log("------------------------------------------------------");

class CustomError extends Error {
  constructor(message: string) {
    super(message);
  }
  public printError() {
    return "This is " + this.message;
  }
}

const notFound404 = new CustomError("Not Found 404");

console.log(notFound404.printError());
 
