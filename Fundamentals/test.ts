export {};

const ulvi: string = "ulvi";

const message = "Please"; //Static type checking

const user1 = {
  name: "asdasd",
  age: 15,
};

console.log(user1.age);

function greet(day: number, date: Date) {
  console.log(`Hello ${day} and ${date}`);
}

greet(1, new Date());

const arr: [string, number, boolean] = ["Hello", 1, true];

function sum(a: number, b: number): number {
  //return type
  return a + b;
}

console.log(sum(5, 4));

async function sumAsync(a: number, b: number): Promise<number> {
  //async function promise type
  return a + b;
}

const obj: { id: number; name?: string } = { id: 1, name: "asdasd" };

console.log(obj.name?.concat(" ") + "asdasdadasd");

type ID = number | string;

function printId(id: ID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    id.toLocaleString();
    console.log(id + "abc");
  }
}

printId(121);

type peopleType = string[] | string;

function welcome(people: peopleType) {
  if (Array.isArray(people)) {
    console.log(`Welcome ` + people.join(" and "));
  } else {
    console.log(`Welcome ` + people);
  }
}

welcome(["John", "Doe", "Jane"]);

//Union Type (type)

type CustomType = {
  id: number,
  name: string,
}

//Type vs Interface

interface OtherInterface {
  age: number
}

interface CustomInterface extends OtherInterface {
  id: number,
  name: string,
}

interface CustomInterface  {
  surname: string
}

const customObj1 : CustomType = {id:15, name: "John"}
const customObj2 : CustomInterface = {id:15, name: "John", surname: 'Doe' ,age:25}


type CustomLiteralType = "John" | "Tom" | "Jerry"  //Literal Type (value)

const customName : CustomLiteralType = "John"

