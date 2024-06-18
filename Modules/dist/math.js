"use strict";
//Named Export
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrease = exports.multiply = exports.add = void 0;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const multiply = (a, b) => {
    return a * b;
};
exports.multiply = multiply;
const increase = (a) => {
    return a + 1;
};
const decrease = (a) => {
    return a - 1;
};
exports.decrease = decrease;
//Default export --> only one default export per file
exports.default = increase;
