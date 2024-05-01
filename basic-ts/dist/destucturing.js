"use strict";
{
    const obj = {
        name: "John",
        age: 20,
        address: {
            street: "",
            city: "Uttara",
            state: "",
            zip: "",
        },
        isMarried: false,
    };
    const { name, address: { city }, age, } = obj;
}
