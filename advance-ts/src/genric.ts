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

  const createArrayWithGenerics = <T>(params: T): T[] => {
    return [params];
  };
  const res1 = createArrayWithGenerics<number>(3);

  const createObj = <T>(val: T) => {
    return { val };
  };

  const res2 = createObj<obj>({ user: "bokor", computer: "HP" });
  console.log(res2);
}
