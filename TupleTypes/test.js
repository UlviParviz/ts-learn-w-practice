//Union Type
const unionArray = [1, 2, 3, "asdasd", true];
const tupleArray = [1, "asda"]; //[number,string]
const anotherTupleArray1 = [1, "asda"]; //[number,string,string?]
const anotherTupleArray2 = [2, "asda", "semistan"]; //[number,string,string?]
const example1 = ["salam", 1];
const example2 = ["salam", "sagol", "hello", "hi", "asdasda", 2];
const example3 = ["salam", 3, true, false, true, true];
const example4 = ["sasda", 1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 88, 89, 45, 65, false];
function logPerson(...args) {
    const [name, age, ...isMarriedInputs] = args;
    console.log(`Name: ${name}, Age: ${age} , MarriedInputs: ${isMarriedInputs}`);
}
logPerson("Semistan", 15, true, false, true, true);
