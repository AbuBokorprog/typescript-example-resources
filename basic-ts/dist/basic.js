"use strict";
{
    // -----------------Basic Type of TypeScript--------------------
    // Number
    let num = 20;
    // console.log(num);
    // String
    let a = "hello world";
    // Boolean
    let isBool = true;
    // Array
    let arr = [1, 2, 3, 4, 5];
    let arr2 = [1, 2, 3, 4, 5];
    // Tuple
    let tupleArr = [
        1,
        "hello",
        true,
        [1, 2, 3, 4, 5],
    ];
    // Object
    const user = {
        name: "John",
        age: 20,
        //   address: "USA",
        isMarried: false,
    };
    // Enum
    let Color;
    (function (Color) {
        Color["Red"] = "red";
        Color["Green"] = "green";
        Color["Blue"] = "blue";
    })(Color || (Color = {}));
    let color = Color.Blue;
}
