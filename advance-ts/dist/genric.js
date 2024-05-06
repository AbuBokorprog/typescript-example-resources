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
    const createArrayWithGenerics = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
    };
    const res1 = createArrayWithGenerics(3, 8);
    // console.log(res1);
    const createObj = (val) => {
        return { val };
    };
    const res2 = createObj({ user: "bokor", computer: "HP" });
    // console.log(res2);
    const genericWithTuple = (val, val2, val3) => {
        return [val, val2, val3];
    };
    const res3 = genericWithTuple("bokor", 7, true);
    // console.log(res3);
}
