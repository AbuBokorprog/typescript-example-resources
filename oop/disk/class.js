"use strict";
{
    // class object
    class Person {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
    const person1 = new Person("John", 22, "male");
    console.log(person1);
    //   If we want to don't repeat the declare typing multiple times. Then we can follow the example below
    class Developer {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
    const developer1 = new Developer("bokor", 20, "male");
    console.log(developer1);
}
