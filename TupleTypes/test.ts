//Union Type

type UnionArray = (string | number | boolean)[];

const unionArray: UnionArray = [1, 2, 3, "asdasd", true];

//Tuple Type

type TupleArray = [number, string];

const tupleArray: TupleArray = [1, "asda"]; //[number,string]

type AnotherTupleArray = [number, string, string?];

const anotherTupleArray1: AnotherTupleArray = [1, "asda"]; //[number,string,string?]
const anotherTupleArray2: AnotherTupleArray = [2, "asda", "semistan"]; //[number,string,string?]

type Type1 = [string, number];
type Type2 = [...string[], number];
type Type3 = [string, number, ...boolean[]];
type Type4 = [string, ...number[], boolean];

const example1: Type1 = ["salam", 1];
const example2: Type2 = ["salam", "sagol", "hello", "hi", "asdasda", 2];
const example3: Type3 = ["salam", 3, true, false, true, true];
const example4: Type4 = ["sasda", 1,2,3,4,5,6,7,8,2,3,4,88,89,45,65, false]

//Dectracture Tuples
type Person = [string, number, ...boolean[]]

function logPerson (...args: Person){
    const [name, age, ...isMarriedInputs] = args

    console.log(`Name: ${name}, Age: ${age} , MarriedInputs: ${isMarriedInputs}`);
    
}

logPerson("Semistan", 15, true,false,true,true)
