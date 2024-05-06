{
  // conditional type
  type person = {
    name: string;
    email: string;
    address: string;
  };

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type checkVehicle<T> = T extends Vehicle ? true : false;
  type hasBike = checkVehicle<"ship">;
}
