const person = { id: 1, name: "Semistan" };
person.name = "Abuzer";
console.log(person.id, person.name); //readonly dont allow change value of property
console.log("-----------------------------------------------------------");
let writablePerson = { age: 25 };
let readonlyPerson = writablePerson; //shallow copy
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
console.log("-----------------------------------------------------------");
const array = [1, 2, 3];
array.length = 5;
array[1] = 24;
console.log(array, "-", array.length);
const readonlyArray = [1, 2, 4];
// array.length = 5;      -> Error
// readonlyArray[1] = 35
