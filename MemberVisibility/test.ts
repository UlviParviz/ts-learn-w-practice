class Parent {
  private name: string = "qwerty"; //Use only in Parent
  private surname: string = "ytrewq";

  protected getName() {
    //Use in Parent or Child
    return this.name;
  }

  public getSurname() {
    //Use Everywhere
    return this.surname;
  }
}

class Child extends Parent {
  public sayHi() {
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
  constructor(public name: string, public surname: string) {} // same as what i got in the comment above
}

const person = new Person("Abc", "bca");

console.log(person.name, person.surname);
