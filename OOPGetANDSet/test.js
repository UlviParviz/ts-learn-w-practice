class Person {
    //   public setAge(age: number) {
    //     if (age < 0) {
    //       throw new Error("Age must be positive");
    //     }
    //     this.age = age;
    //   }
    //set keyword
    set Age(age) {
        if (age < 0) {
            throw new Error("Age must be positive");
        }
        this.age = age;
    }
    //   public getAge() {
    //    return this.age;
    //   }
    //get keyword
    get Age() {
        return this.age;
    }
}
const person = new Person();
person.Age = 25; // person.setAge(25);
console.log(person.Age); // person.getAge();
