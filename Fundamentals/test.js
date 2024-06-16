var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const ulvi = "ulvi";
const message = "Please"; //Static type checking
const user1 = {
    name: "asdasd",
    age: 15,
};
console.log(user1.age);
function greet(day, date) {
    console.log(`Hello ${day} and ${date}`);
}
greet(1, new Date());
const arr = ["Hello", 1, true];
function sum(a, b) {
    //return type
    return a + b;
}
console.log(sum(5, 4));
function sumAsync(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        //async function promise type
        return a + b;
    });
}
const obj = { id: 1, name: "asdasd" };
console.log(((_a = obj.name) === null || _a === void 0 ? void 0 : _a.concat(" ")) + "asdasdadasd");
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        id.toLocaleString();
        console.log(id + "abc");
    }
}
printId(121);
function welcome(people) {
    if (Array.isArray(people)) {
        console.log(`Welcome ` + people.join(" and "));
    }
    else {
        console.log(`Welcome ` + people);
    }
}
welcome(["John", "Doe", "Jane"]);
const customObj1 = { id: 15, name: "John" };
const customObj2 = { id: 15, name: "John", surname: 'Doe', age: 25 };
const customName = "John";
