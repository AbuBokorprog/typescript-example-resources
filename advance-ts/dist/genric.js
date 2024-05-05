"use strict";
{
    const arrNumber = [1, 2, 3, 4, 5];
    //   string
    const arrString = ["a", "b", "c", "d", "e", "hello"];
    //   boolean
    const arrBool = [true, false, false];
    const developer1 = {
        name: "bokor",
        age: 20,
        isMarried: false,
        computer: "HP",
    };
    const developer2 = {
        name: "bokor",
        age: true,
        isMarried: false,
        computer: 20,
    };
    const createArrayWithGenerics = (params) => {
        return [params];
    };
    const res1 = createArrayWithGenerics(3);
    const createObj = (val) => {
        return { val };
    };
    const res2 = createObj({ user: "bokor", computer: "HP" });
    console.log(res2);
}
