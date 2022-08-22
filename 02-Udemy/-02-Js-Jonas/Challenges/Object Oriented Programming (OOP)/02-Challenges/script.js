"use strict";
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log((this.speed += 10));
  }
  break() {
    console.log((this.speed -= 5));
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    return (this.speed = speed * 1.6);
  }
}

const car1 = new Car("Ford", 120);

car1.accelerate();
car1.accelerate();
car1.break();
car1.accelerate();

car1.speedUs = 220;
console.log(car1);
