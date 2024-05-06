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

  interface Developer<O> {
    name: string;
    position: string;
    salary: number;
    isInternship: boolean;
    computer: O;
  }

  interface computer {
    name: string;
    ssd: string;
    company: string;
  }

  const developerObj: Developer<computer> = {
    name: "Abu Bokor",
    position: "Frontend develoepr",
    salary: 12000,
    isInternship: true,
    computer: {
      name: "hp 840 g5",
      ssd: "16GB",
      company: "HP",
    },
  };
  console.log(developerObj);
}

//  difference between type and interface
