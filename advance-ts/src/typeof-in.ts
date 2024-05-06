{
  // type guard using type of

  function add<T, U>(p: T, p2: U) {
    if (typeof p == "number" && typeof p2 == "number") {
      return p + p2;
    } else {
      return `${p}` + `${p2}`;
    }
  }

  const res1 = add<number, string>(2, "5");
  // console.log(res1);

  // Type guard using type in

  interface admin {
    name: string;
    email: string;
    role: "Admin";
  }

  interface manager {
    name: string;
    email: string;
    role: "Manager";
  }

  interface user {
    name: string;
    email: string;
  }

  const manageUser = (user: admin | user | user) => {
    if ("role" in user && user.role === "Admin") {
      console.log("this is admin");
    } else {
      console.log("this is user");
    }
  };

  const adminUser: admin = {
    name: "john",
    email: "@gmail.com",
    role: "Admin",
  };
  manageUser(adminUser);
}
