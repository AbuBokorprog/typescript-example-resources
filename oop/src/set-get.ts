{
  // We can easily get data and set value in properties
  class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    // Set the gender value
    setGender(val: string) {
      this.gender = val;
    }

    // Get the age value
    getAge() {
      return this.age;
    }
  }
  const person1 = new Person("Hasin Hayder", 40, "male");

  //    Now I inherit the students with Person.
  class Student extends Person {
    favoriteSubject: string;
    department: string;
    private _id: number;

    constructor(
      name: string,
      age: number,
      gender: string,
      favoriteSubject: string,
      department: string,
      _id: number
    ) {
      super(name, age, gender);
      this.favoriteSubject = favoriteSubject;
      this.department = department;
      this._id = _id;
    }

    set setId(val: number) {
      this._id = val;
    }

    get getId() {
      return this._id;
    }
  }

  const student = new Student(
    "Pranto",
    26,
    "male",
    "Programming",
    "CSE",
    98729
  );
  student.setId = 22;

  const id = student.getId;

  console.log(id);
}
