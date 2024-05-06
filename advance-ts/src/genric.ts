{
  // Generics

  //   -----------------type-------------------------
  // number

  type genericsType<t> = Array<t>;

  const arrNumber: genericsType<number> = [1, 2, 3, 4, 5];

  //   string

  const arrString: genericsType<string> = ["a", "b", "c", "d", "e", "hello"];

  //   boolean

  const arrBool: genericsType<boolean> = [true, false, false];

  // -------------------------interface------------------------
  interface genericsObj<x, y> {
    name: string;
    age: x;
    isMarried: boolean;
    computer: y;
  }

  const developer1: genericsObj<number, string> = {
    name: "bokor",
    age: 20,
    isMarried: false,
    computer: "HP",
  };

  const developer2: genericsObj<boolean, number> = {
    name: "bokor",
    age: true,
    isMarried: false,
    computer: 20,
  };

  //----------------------------function-----------------------

  interface obj {
    user: string;
    computer: string;
  }

  const createArrayWithGenerics = <T, Q>(param1: T, param2: Q) => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    }
  };
  const res1 = createArrayWithGenerics<number, number>(3, 8);
  // console.log(res1);

  const createObj = <T>(val: T) => {
    return { val };
  };

  const res2 = createObj<obj>({ user: "bokor", computer: "HP" });
  // console.log(res2);

  const genericWithTuple = <T, U, V>(val: T, val2: U, val3: V): [T, U, V] => {
    return [val, val2, val3];
  };

  const res3 = genericWithTuple<string, number, boolean>("bokor", 7, true);
  // console.log(res3);
}
