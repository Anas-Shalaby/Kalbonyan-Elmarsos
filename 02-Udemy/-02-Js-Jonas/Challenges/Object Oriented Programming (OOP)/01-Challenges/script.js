"use strict";

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.break = function () {
  console.log((this.speed -= 5));
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Merceds", 95);

car1.accelerate();
car1.accelerate();
car1.break();
car1.accelerate();
