function firstElement<T>(arr: T[]): T {
  return arr[0];
}

firstElement<number>([1, 2, 3]);

const arr = [];

// arr.forEach((item, index) => {})

function customForEach<T>(arr: T[], callbackFunc: (item: T, index?: number) => void) {
  // Track index manually
  for (let i = 0; i < arr.length; i++) {
    const index = i+1
    callbackFunc(arr[i], index);
  }
}

function logItem<T>(item: T, index?: number): void {
  console.log(`Item: ${item}, Index: ${index}`);
}

// Using customForEach with the callback function
customForEach<string>(["first", "second", "third"], logItem);
