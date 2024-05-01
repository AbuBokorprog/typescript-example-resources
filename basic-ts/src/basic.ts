{
  // -----------------Basic Type of TypeScript--------------------

  // Number

  let num: number = 20;
  // console.log(num);

  // String

  let a: string = "hello world";

  // Boolean

  let isBool: boolean = true;

  // Array

  let arr: number[] = [1, 2, 3, 4, 5];
  let arr2: Array<number> = [1, 2, 3, 4, 5];

  // Tuple

  let tupleArr: [number, string, boolean, Array<number>] = [
    1,
    "hello",
    true,
    [1, 2, 3, 4, 5],
  ];

  // Object

  const user: {
    name: string;
    age: number;
    address?: string;
    isMarried: boolean;
  } = {
    name: "John",
    age: 20,
    //   address: "USA",
    isMarried: false,
  };

  // Enum

  enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
  }

  let color: Color = Color.Blue;
}
