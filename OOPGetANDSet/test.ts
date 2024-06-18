class Person {
  //OOP Encapsulation
  private age: number;
  private name: string;

  //   public setAge(age: number) {
  //     if (age < 0) {
  //       throw new Error("Age must be positive");
  //     }
  //     this.age = age;
  //   }

  //set keyword
  public set Age(age: number) {
    if (age < 0) {
      throw new Error("Age must be positive");
    }
    this.age = age;
  }

  //   public getAge() {
  //    return this.age;
  //   }

  //get keyword
  public get Age() {
    return this.age;
  }
}

const person = new Person();

person.Age = 25; // person.setAge(25);
console.log(person.Age); // person.getAge();
