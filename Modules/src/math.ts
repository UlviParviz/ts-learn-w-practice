//Named Export

export const add = (a: number, b: number): number => {
  return a + b;
};

export const multiply = (a: number, b: number): number => {
  return a * b;
};

const increase = (a: number): number => {
  return a + 1;
};

export const decrease = (a: number): number => {
  return a - 1;
};

//Default export --> only one default export per file
export default increase;
