'use strict';
/*
///////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  numPassengers = numPassengers || 1;
  price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'LH234';
const Anas = {
  name: 'Anas Youssef',
  passport: 2312312412,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2312312412) {
    // alert('Checked in ');
  } else {
    // alert('Wrong Passport');
  }
};

checkIn(flight, Anas);
console.log(flight);
console.log(Anas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(Anas);
checkIn(flight, Anas);

///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);

// JS uses callbacks all the time
const highFive = function () {
  console.log('👋');
};
document.body.addEventListener('click', highFive);

['Anas', 'Youssef', 'Shalaby'].forEach(highFive);

///////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Anas');

greet('Hello')('Anas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Welcome')('Anas');

///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat in ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Anas');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Doesnot work
// book(23, 'Anas Youssef');

// Call method
book.call(eurowings, 23, 'Anas');
console.log(eurowings);

book.call(lufthansa, 239, 'Mohamed Elgamal');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'Kareem Elanaosy'];

book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

///////////////////////////////////////
// The bind Method
// book.call(eurowings, 23, 'Anas');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'AnasY');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Khalid beshr');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(200));
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This will never call again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never call again');
  const privating =50;
})();

(() => console.log('This will never call again'))();
{
  const isPrivate = 23;
  var notPrivate = 2;
}
console.log(notPrivate);
// console.log(isPrivate);


///////////////////////////////////////
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/
