const test: number = 0;

const person = {
  id: 5,
  name: "John",
};

// if (Object.keys(person).includes("id")) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (person["id"]) {
//   console.log(person["id"]);
// }

if ("id" in person) {
  console.log("true", person["id"]);
}

function logValue(value: string | Date) {
  if (value instanceof Date) {
    console.log(value.toUTCString());
  } else {
    console.log(value.toUpperCase());
  }
}

logValue(new Date());

type Car = { wheels: number };
type Book = { pages: number };
type Item = Car | Book;

const Camaro: Car = { wheels: 4 };
const Book1: Book = { pages: 150 };

const items: Item[] = [Camaro, Book1]; //Obj to Array

function printAll(items: Item[]) {
  for (const item of items) {
    if (isCar(item)) {
      console.log(`Car with ${item.wheels} wheels`);
    } else {
      console.log(`Book with ${item.pages} pages`);
    }
  }
}

function isCar(item: Item): item is Car {
  return "wheels" in item;
}

printAll(items)