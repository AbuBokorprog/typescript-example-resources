{
  //polymorphism
  class Person {
    getSleep() {
      console.log("I'm sleeping 8 hours a day");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("I'm sleeping 6 hours a day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I'm sleeping 4 hours a day");
    }
  }

  const getSleepHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  //   getSleepHours(person1);
  //   getSleepHours(person2);
  //   getSleepHours(person3);

  //   Advanced way to understand the polymorphism
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    return param.getArea();
  };

  const shape1 = new Shape();
  const shape2 = new Circle(2);
  const shape3 = new Rectangle(4, 6);
  const shape = getShapeArea(shape1);
  const circle = getShapeArea(shape2).toFixed(2);
  const rectangle = getShapeArea(shape3);
  console.log(shape, circle, rectangle);
}
