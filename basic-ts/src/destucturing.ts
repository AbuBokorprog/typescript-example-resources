{
  const obj: {
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    isMarried: boolean;
  } = {
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

  const {
    name,
    address: { city },
    age,
  } = obj;
}
