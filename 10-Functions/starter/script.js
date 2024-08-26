'use strict';


// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);


// const flight = 'LH234';

// const oluwadamisi = {
//     name: 'Oluwadamisi Ayinde',
//     passport: 247334434345
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 247334434345) {
//         alert('Checked In');
//     } else {
//         alert('Wrong Passport');
//     }
// };

// checkIn(flight, oluwadamisi);
// console.log(flight);
// console.log(oluwadamisi);


// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000000000);
// }

// newPassport(oluwadamisi);
// checkIn(flight, oluwadamisi);
// console.log(oluwadamisi);






// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function (str, fn) {
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);


// const high5 = function() {
//     console.log('👋');
// }


// // ['Jonas', 'Martha', 'Adam'].forEach(high5);



// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');


// greet('Hello')('Jonas');
// greetArrow('Hello')('Jonas');

// // const five = () => {
// //     return 5;
// // }

// // four(add(five()));


// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     }
// };

// lufthansa.book(239, 'Oluwadamisi Ayinde');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: []
// }

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);



// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);


// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// }

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(lufthansa, ...flightData);


// const bookSW = book.bind(swiss);
// const bookLT = book.bind(lufthansa);
// const bookEW = book.bind(eurowings);
// bookSW(23, 'Steven Williams');


// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Oluwadamisi Ayinde');
// bookEW23('Jonas Schmedtmann');


// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//     return function (value) {
//         console.log(value + value * rate);
//     }
// }

// const addVAT2 = addTaxRate(0.23);
// addVAT2(23);



// const poll = {
//     question: 'What is your favorite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer () {
//         // let promptStr = `${(this.question)}\n${this.options.join('\n')}\n(Write option number)`;
        
//         // for (const option of this.options) {
//         //     promptStr += `${option}\n`;
//         // };
//         // promptStr += '(Write option number)';
//         const answer = Number(prompt(`${(this.question)}\n${this.options.join('\n')}\n(Write option number)`));
//         console.log(answer, typeof answer);
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//         // answer < this.options.length && answer >= 0 ? this.answers[answer]++ : console.log('Invalid Answer');
//         this.displayResults('string');
//     },
//     displayResults (type='array') {
//         if (type === 'array') {
//             console.log(this.answers)
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//         // type === 'array' ? console.log(this.answers) : console.log(`Poll results are ${[...this.answers].join(', ')}`);
//     }
// };

// console.log(poll);
// const handleClick = poll.registerNewAnswer.bind(poll);
// document.querySelector('.poll').addEventListener('click', handleClick);

// const displayResults = poll.displayResults

// // const data1 = {answers: [5, 2, 3]};
// // const data2 = {answers: [1, 5, 3, 9, 6, 1]};

// // const data1Display = displayResults.bind(data1);
// // data1Display();

// // const data2Display = displayResults.bind(data2);
// // data2Display();

// poll.displayResults.call({answers: [5, 2, 3]});
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});


// (function () {
//     console.log('This will never run again');
//     const isPrivate = 23;
// })()

// (() => console.log('This will never run again'))();


// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();


// booker();
// booker();
// booker();

// console.dir(booker);


// let f;

// const g = function() {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// };

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);



// // Example 2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`)
// }

// boardPassengers(180, 3);



// Challenge

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click', () => {header.style.color = 'blue'});
})();