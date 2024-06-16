function firstElement(arr) {
    return arr[0];
}
firstElement([1, 2, 3]);
const arr = [];
// arr.forEach((item, index) => {})
function customForEach(arr, callbackFunc) {
    // Track index manually
    for (let i = 0; i < arr.length; i++) {
        const index = i + 1;
        callbackFunc(arr[i], index);
    }
}
function logItem(item, index) {
    console.log(`Item: ${item}, Index: ${index}`);
}
// Using customForEach with the callback function
customForEach(["first", "second", "third"], logItem);
