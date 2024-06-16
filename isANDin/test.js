const test = 0;
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
function logValue(value) {
    if (value instanceof Date) {
        console.log(value.toUTCString());
    }
    else {
        console.log(value.toUpperCase());
    }
}
logValue(new Date());
const Camaro = { wheels: 4 };
const Book1 = { pages: 150 };
const items = [Camaro, Book1]; //Obj to Array
function printAll(items) {
    for (const item of items) {
        if (isCar(item)) {
            console.log(`Car with ${item.wheels} wheels`);
        }
        else {
            console.log(`Book with ${item.pages} pages`);
        }
    }
}
function isCar(item) {
    return "wheels" in item;
}
printAll(items);
