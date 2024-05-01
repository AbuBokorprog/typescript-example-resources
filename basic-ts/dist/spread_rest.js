"use strict";
{
    // Spread Operators
    const arr1 = ["a", "b", "c", "d", "e", "f"];
    //   const arr2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr2 = ["g", "h", "i", "j", "k", "l"];
    arr1.push(...arr2);
    //   Rest Operators
    const func = (a, b, ...number) => {
        console.log(a, b, ...number);
    };
    func(1, 4, 6, 78);
}
