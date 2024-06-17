class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getNameUppercase() {
    console.log(this.name.toUpperCase());
  }
}

const person = new Person("Hello", 15);

person.name = "abcvadas";
person.age = 11;

person.getNameUppercase();

console.log("------------------------------------------------------");

class Point {
  x: number = 1;
  y: number = 2;

  getX() {
    return this.x;
  }

  getY = () => {
    return this.y;
  };
}

const point = new Point();

console.log(point.getX());
console.log(point.getY());

console.log("------------------------------------------------------");

// const getX_ = point.getX; --> undefined because can't send this
const getX_ = point.getX.bind(point); //possible with bind
const getY_ = point.getY; //arrow function allow send this

// console.log(getX_());   --> undefined
console.log(getX_()); // --> 1
console.log(getY_()); // --> 2
console.log("------------------------------------------------------");

class Base1 {
  name: string = "base1";

  constructor() {
    console.log(`My name is ${this.name}`);
  }
}

class Base2 extends Base1 {
  name: string = "base2";
}

const base = new Base2(); // --> My name is base1 (Because first created parent of Base2, after constructor, after Base2)
console.log("------------------------------------------------------");

abstract class Animal {
  abstract makeSound(): void; //Abstract Method

  move(): void {
    //Normal Method
    console.log("Move..");
  }
}

// const animal = new Animal() --> Error

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

const dog = new Dog()

console.log(dog.makeSound()); // --> Bark , undefined

