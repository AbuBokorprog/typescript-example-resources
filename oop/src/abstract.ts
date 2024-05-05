{
  //abstract 1. interface 2. abstract

  //idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // Real Implementation of Vehicle
  class Car implements Vehicle {
    startEngine(): void {
      console.log("Car engine started");
    }
    stopEngine(): void {
      console.log("Car engine stopped");
    }

    move(): void {
      console.log("Car move started");
    }
  }

  //   const toyota = new Car();
  //   toyota.startEngine();
  //   toyota.stopEngine();
  //   toyota.move();

  // ---------------------------abstract-------------------------
  // idea
  abstract class vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("car testing");
    }
  }

  //Real Implementation
  class Car2 extends vehicle2 {
    startEngine(): void {
      console.log("Car engine started");
    }
    stopEngine(): void {
      console.log("Car engine stopped");
    }
    move(): void {
      console.log("Car is moving");
    }
  }

  const BMW = new Car2();
  BMW.startEngine();
}
