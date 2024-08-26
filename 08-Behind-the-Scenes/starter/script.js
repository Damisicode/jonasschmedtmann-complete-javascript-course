'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }

//     function add(a, b) {
//       output = 'New Output!';
//       return a + b;
//     }

//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// // console.log(age);
// // printAge();

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Oluwadamisi';
// let job = 'Engineer';
// const year = 2002;


// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b
// }

// var addArrow = (a, b) => {
//   return a + b
// }


// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All Products has been deleted!');
// }


// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }

// calcAge(2002);


// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// }

// calcAgeArrow(2002);


// const Oluwadamisi = {
//   year: 2002,
//   calcAge: function() {
//     console.log(2037 - this.year);
//     console.log(this);
//   }
// }

// Oluwadamisi.calcAge()

// const oluwagbogo = {
//   year: 2004,
// };

// oluwagbogo.calcAge = Oluwadamisi.calcAge;

// oluwagbogo.calcAge();

// const f = Oluwadamisi.calcAge;

// var year = 2006;
// f();



// const Oluwadamisi = {
//   year: 2002,
//   firstName: 'Oluwadamisi',
//   calcAge: function() {
//     console.log(2037 - this.year);
//     // console.log(this);

//     // const self = this;

//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   // greet: () => {
//   //   console.log(this);
//   //   console.log(`Hey ${this.firstName}`);
//   // }
// };

// // Oluwadamisi.greet();

// Oluwadamisi.calcAge();


// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(addExpr(2,3,5, 7, 9));


// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }

// console.log(addArrow(2,3,5, 6)) 


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);


const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);