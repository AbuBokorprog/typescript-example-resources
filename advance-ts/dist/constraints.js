"use strict";
{
    function Student(val) {
        return val;
    }
    const student1 = Student({
        name: "bokr",
        email: "bokor@gmail.com",
        id: 987492134,
    });
    //   console.log(student1);
    const student2 = Student({
        name: "alaap",
        email: "",
        id: 0,
    });
    const keyOfConstraints = (obj, key) => {
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
