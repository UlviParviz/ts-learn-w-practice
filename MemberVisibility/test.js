class Parent {
    constructor() {
        this.name = "qwerty"; //Use only in Parent
        this.surname = "ytrewq";
    }
    getName() {
        //Use in Parent or Child
        return this.name;
    }
    getSurname() {
        //Use Everywhere
        return this.surname;
    }
}
class Child extends Parent {
    sayHi() {
        console.log(`Hi, ${this.getName()}`);
    }
}
const child = new Child();
child.sayHi();
console.log("------------------------------------------------------");
class Person {
    //   public name: string = "ulvi";
    //   public surname: string = "parviz";
    //   constructor(name: string, surname: string) {
    //     this.name = name;
    //     this.surname = surname;
    //   }
    //Shortcut
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    } // same as what i got in the comment above
}
const person = new Person("Abc", "bca");
console.log(person.name, person.surname);
