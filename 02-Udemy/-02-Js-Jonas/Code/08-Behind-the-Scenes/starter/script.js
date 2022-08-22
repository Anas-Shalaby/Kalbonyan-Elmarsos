'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2002 && birthYear <= 2010) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Anas';
calcAge(2002);
// console.log(age);
// printAge(); */

///////////////////////////////////////
// Hoisting and TDZ in Practice
/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Anas';
let job = 'student';
const year = '2002';

// Functions

console.log(addDecl(1, 3));

// console.log(addExpr(1, 3));
console.log(addArrow);
// console.log(addArrow(1, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All Products Deleted!');
}

var x = 1;
let y = 2;
const z = 4;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);
*/

///////////////////////////////////////
// The this Keyword in Practice

/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(2002);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(2002);

const Anas = {
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);
  },
};
Anas.calcAge();

const Youssef = {
  year: 2001,
};

Youssef.calcAge = Anas.calcAge;
Youssef.calcAge();

const f = Anas.calcAge;
f();
*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

/* const Anas = {
  firstName: 'Anas',
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2020 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
Anas.greet();
Anas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

///////////////////////////////////////
// Objects vs. primitives

/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const Anas = {
  name: 'Anas',
  age: 20,
};
const Friend = Anas;
Friend.age = 22;

console.log('Friend', Friend);
console.log('me', Anas); */

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Youssef';
let oldLastName = lastName;
lastName = 'Anas';
console.log(lastName, oldLastName);

// Reference types
/* const Anas1 = {
  firstName: 'Anas',
  lastName: 'Youssef',
  age: 20,
};
const marriedAnas = Anas1;
marriedAnas.lastName = 'Shalaby';
console.log('Before marriage:', Anas1);
console.log('After marriage: ', marriedAnas);
// marriedJessica = {};

// Copying objects
const Anas2 = {
  firstName: 'Anas',
  lastName: 'Youssef',
  age: 20,
  family: ['Azza', 'Shalaby'],
};
const anasCopy = Object.assign({}, Anas2);

anasCopy.lastName = 'Shalaby';

console.log(anasCopy);
console.log(Anas2);
*/
