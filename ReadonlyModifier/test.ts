interface Person {
  readonly id: number;
  name: string;
}

const person: Person = { id: 1, name: "Semistan" };

person.name = "Abuzer";

console.log(person.id, person.name); //readonly dont allow change value of property

console.log("-----------------------------------------------------------");

interface WritablePerson {
  age: number;
}

interface ReadonlyPerson {
  readonly age: number;
}

let writablePerson: WritablePerson = { age: 25 };
let readonlyPerson: ReadonlyPerson = writablePerson; //shallow copy

console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);

console.log("-----------------------------------------------------------");

const array: Array<number> = [1, 2, 3];

array.length = 5;

array[1] = 24;

console.log(array, "-", array.length);

const readonlyArray: ReadonlyArray<number> = [1, 2, 4];

// array.length = 5;      -> Error
// readonlyArray[1] = 35
