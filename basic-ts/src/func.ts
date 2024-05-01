{
  // Normal function
  function multiply(a: number, b: number): number {
    return a * b;
  }
  // void means no return value
  multiply(5, 2);

  // Arrow functions

  const multiply2 = (a: number, b: number): void => {
    console.log(a * b);
  };

  const arr: Array<number> = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const callbackFunc = arr.map((c: number): number => {
    return c * 2;
  });
  console.log(callbackFunc);
}
