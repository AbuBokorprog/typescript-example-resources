{
  // Interface is always use to non-primitive data types
  // but good practice of interface only use in object
  interface num {
    name: string;
    age: number;
    isMarried: boolean;
  }
  const obj: num = {
    name: "Abu Bokor",
    age: 30,
    isMarried: false,
  };
}

//  difference between type and interface
