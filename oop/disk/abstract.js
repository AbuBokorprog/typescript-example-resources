"use strict";
{
    // Real Implementation of Vehicle
    class Car {
        startEngine() {
            console.log("Car engine started");
        }
        stopEngine() {
            console.log("Car engine stopped");
        }
        move() {
            console.log("Car move started");
        }
    }
    //   const toyota = new Car();
    //   toyota.startEngine();
    //   toyota.stopEngine();
    //   toyota.move();
    // ---------------------------abstract-------------------------
    // idea
    class vehicle2 {
        test() {
            console.log("car testing");
        }
    }
    //Real Implementation
    class Car2 extends vehicle2 {
        startEngine() {
            console.log("Car engine started");
        }
        stopEngine() {
            console.log("Car engine stopped");
        }
        move() {
            console.log("Car is moving");
        }
    }
    const BMW = new Car2();
    BMW.startEngine();
}
