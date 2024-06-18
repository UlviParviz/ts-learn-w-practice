//Named Import
//Relative Import path
import { add, multiply } from "./math";
import increase from "./math";

import * as MATH from "./math"

const firstName: string = "Ulvi";

console.log(firstName);

console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(increase(5));
console.log(MATH.decrease(4));


