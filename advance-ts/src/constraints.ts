{
  // constraints

  interface info {
    name: string;
    email: string;
    id: number;
  }

  function Student<T extends { name: string; email: string; id: number }>(
    val: T
  ): T {
    return val;
  }
  const student1 = Student<info>({
    name: "bokr",
    email: "bokor@gmail.com",
    id: 987492134,
  });
  //   console.log(student1);

  const student2 = Student<info>({
    name: "alaap",
    email: "",
    id: 0,
  });
  //   console.log(student2);

  // constraints keyof

  interface users {
    name: string;
    email: string;
    role: string;
  }

  const keyOfConstraints = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "bokor",
    email: "@gmail.com",
    role: "admin",
  };

  const res3 = keyOfConstraints(user, "email");
  console.log(res3);
}
