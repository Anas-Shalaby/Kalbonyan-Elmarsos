'use strict';
/*
///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const Anas = new Person('Anas', 2002);
console.log(Anas);

// 1- New Empty object is created
// 2- function is called and the this keyword will be set to this empty object
// 3- This empty object is linked to a prototype
// 4- Function automatically return the new object

const Mohamed = new Person('Mohamed Elgamal', 2002);
const jack = new Person('Jack', 1975);
console.log(Mohamed, jack);

console.log(Anas instanceof Person);
// console.log(mohamed instanceof Person);
Person.hey = function(){
  console.log("Hey there 😊");
  console.log(this)
}
Person.hey();
// Anas.hey(); wrong 

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.clacAge = function () {
  console.log(2022 - this.birthYear);
};

Anas.clacAge();
jack.clacAge();

console.log(Anas.__proto__);
console.log(Anas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Anas));
console.log(Person.prototype.isPrototypeOf(Person));
Person.prototype.peices = 'Rice';
console.log(Anas.peices, Mohamed.peices);

console.log(Anas.hasOwnProperty('peices'));
console.log(Anas.hasOwnProperty('firstName'));

///////////////////////////////////////
//Prototypal Inheritance on Built-In Objects

console.log(Anas.__proto__);
// Object.prototype (top of prototype chain)
console.log(Anas.__proto__.__proto__);
console.log(Anas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 54, 5, 6, 2, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
//ES6 Classes

// class expression
// const PersonCl = class{}
// class declaraion
class PersonCl{
  // constructor method
  constructor(fullName , birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instace methods
  // methods will be added to the prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet (){
  console.log(`Hey ${this.fullName}`);
  }

  get age(){
    return 2037 - this.birthYear;
  }

  // Set property that already exists
  set fullName(name){
    console.log(name);
    if(name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName(){
    return this._fullName;
  }

  // static method
  static hey(){
    console.log("hey there 😊");
    console.log(this);
  }
}

const Anas = new PersonCl("Anas Youssef" , 2002);
console.log(Anas);
Anas.calcAge();
console.log(Anas.age);

console.log(Anas.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.fullName}`);
// }

Anas.greet();

// classes are not hoisted 
// classes are first-calss- citizes
// classes are excuted in strict mode

const Mohamed = new PersonCl("Mohamed Elgamal" , 2002);

PersonCl.hey();
///////////////////////////////////////
// Setters and Getters

const account = {
  owner :"Anas",
  movements: [200,2002,4000],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(move){
     this.movements.push(move);
  }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
//  Object.create

const PersonProto = {
  clacAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Anas = Object.create(PersonProto);
console.log(Anas);
Anas.name = 'Anas';
Anas.birthYear = 2002;
Anas.clacAge();

console.log(Anas.__proto__ === PersonProto);

const Sarah = Object.create(PersonProto);
Sarah.init('sarah', 2002);
Sarah.clacAge();


///////////////////////////////////////
//  Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linkings Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Ibrahim = new Student('Ibrahim', 2002, 'computer Science');
Ibrahim.introduce();
Ibrahim.calcAge();

console.log(Ibrahim.__proto__);
console.log(Ibrahim.__proto__.__proto__);

console.log(Ibrahim instanceof Student);
console.log(Ibrahim instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
//  Inheritance Between "Classes": ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const Anas = new StudentCl('Anas Youssef', 2012, 'Computer Science');
Anas.introduce();
Anas.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);

  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Anas = Object.create(StudentProto);
Anas.init('Anas', 2010, 'Computer Science');
Anas.introduce();
Anas.calcAge();

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/
