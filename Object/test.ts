function printA(data: object): any {
  console.log(data);
}

printA({ id: 1, name: "John" });
printA([1, 2, 3, 4]);
printA(new Boolean(true));

interface Person {
  id: number;
  name?: string;
}

const randomPerson: Person = { id: 1, name: "John" };

randomPerson.name?.trim(); //optional
randomPerson.name!.trim(); //cheat ts (always name has value)

function test(callbackFunc: Function) {
  callbackFunc(5);
}

test((n: any) => console.log(n));

function spread(...arg: number[]) {
  console.log(arg);
}

spread(1, 8, 9, 9);

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [5, 6, 7, 8];

function mergeArray1(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

function mergeArray2(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

function mergeArray3(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

// arr1.push(...arr2);
// console.log(arr1);

console.log(mergeArray1(arr1, arr2));
console.log(mergeArray2(arr1, arr2));
console.log(mergeArray3(arr1, arr2));
