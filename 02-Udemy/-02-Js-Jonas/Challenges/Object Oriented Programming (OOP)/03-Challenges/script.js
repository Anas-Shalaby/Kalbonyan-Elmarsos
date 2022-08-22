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

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  console.log((this.speed += 20));
  this.charge--;
  console.log(this.charge);
};

const newCar = new Ev("Tesla", 120, 23);
newCar.chargeBattery(90);
console.log(newCar);
newCar.break();
newCar.accelerate();
