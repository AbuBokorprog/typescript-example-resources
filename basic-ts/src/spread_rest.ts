{
  // Spread Operators
  const arr1: Array<string> = ["a", "b", "c", "d", "e", "f"];
  //   const arr2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2: Array<string> = ["g", "h", "i", "j", "k", "l"];
  arr1.push(...arr2);

  //   Rest Operators
  const func = (a: number, b: number, ...number: number[]) => {
    console.log(a, b, ...number);
  };

  func(1, 4, 6, 78);
}
