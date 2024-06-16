var _a;
function printA(data) {
    console.log(data);
}
printA({ id: 1, name: "John" });
printA([1, 2, 3, 4]);
printA(new Boolean(true));
const randomPerson = { id: 1, name: "John" };
(_a = randomPerson.name) === null || _a === void 0 ? void 0 : _a.trim(); //optional
randomPerson.name.trim(); //cheat ts (always name has value)
function test(callbackFunc) {
    callbackFunc(5);
}
test((n) => console.log(n));
function spread(...arg) {
    console.log(arg);
}
spread(1, 8, 9, 9);
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
function mergeArray1(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}
function mergeArray2(arr1, arr2) {
    return [...arr1, ...arr2];
}
function mergeArray3(arr1, arr2) {
    return arr1.concat(arr2);
}
// arr1.push(...arr2);
// console.log(arr1);
console.log(mergeArray1(arr1, arr2));
console.log(mergeArray2(arr1, arr2));
console.log(mergeArray3(arr1, arr2));
