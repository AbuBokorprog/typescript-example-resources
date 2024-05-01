"use strict";
{
    // Normal function
    function multiply(a, b) {
        return a * b;
    }
    // void means no return value
    multiply(5, 2);
    // Arrow functions
    const multiply2 = (a, b) => {
        console.log(a * b);
    };
    const arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const callbackFunc = arr.map((c) => {
        return c * 2;
    });
    console.log(callbackFunc);
}
