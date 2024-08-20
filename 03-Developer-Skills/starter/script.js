// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 34;

// function logger () {
//     console.log('My name is Oluwadamisi');
// }

// logger();

// function fruitProcessor(apples, oranges) {

//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`

//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);

// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(5, 4);

// console.log(appleOrangeJuice);

// const num = Number('23')

// console.log(num);

// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(2002));

// const calcAge4 = (year, birthYear) => year - birthYear;

// console.log(calcAge3(2002));

// const yearsUntilRetirement = (firstName, birthYear) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement('Oluwadamisi', 2002));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;

//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (firstName, birthYear) => {
//     const age = calcAge2(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🥳`)
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement('Oluwadamisi', 2002));

// const calcAverage = (a, b, c) => {
//     return (a + b + c) / 3;
// }

// const koalasAverage1 = calcAverage(65, 54, 49);
// console.log(`The Koalas average score for first test data is ${koalasAverage1}`);
// const dolphinsAverage1 = calcAverage(44, 23, 71);
// console.log(`The Dolphins average score for first test data is ${dolphinsAverage1}`);

// const koalasAverage2 = calcAverage(23, 34, 27);
// console.log(`The Koalas average score for second test data is ${koalasAverage2}`);
// const dolphinsAverage2 = calcAverage(85, 54, 41);
// console.log(`The Dolphins average score for second test data is ${dolphinsAverage2}`);

// function checkWinner(koalasAverage, dolphinsAverage) {
//     let winner;

//     if (koalasAverage > dolphinsAverage*2) {
//         console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`);
//     } else if (koalasAverage*2 < dolphinsAverage) {
//         console.log(`Dolphins win (${koalasAverage} vs. ${dolphinsAverage})`);
//     } else {
//         console.log("No team wins!");
//     }
// }

// checkWinner(koalasAverage1, dolphinsAverage1);
// checkWinner(koalasAverage2, dolphinsAverage2);

// const friends = ['Michael', 'Steven', 'peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[friends.length-1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Oluwadamisi';
// const oluwadamisi = [firstName, 'Ayinde', 2037-2002, 'Engineer', friends];

// console.log(oluwadamisi);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'peter'];

// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// const shifted = friends.shift();
// console.log(friends);
// console.log(shifted);

// friends.push(23);
// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));
// console.log(friends.includes(23));

// const calcTip = (bill) => {
//     return (bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2);
// }

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length-1])]

// console.log(tips);

// const totals = [tips[0]+bills[0], tips[1]+bills[1], tips[tips.length-1]+bills[bills.length-1]];

// console.log(totals);

// const friends = ['Michael', 'Steven', 'peter'];
// console.log(friends);

// const firstName = 'Oluwadamisi';
// const oluwadamisi = [firstName, 'Ayinde', 2037-2002, 'Engineer', friends];

// const oluwadamisi = {
//     firstName: 'Oluwadamisi',
//     lastName: 'Ayinde',
//     age: 2037-2002,
//     job: 'Engineer',
//     friends: ['Michael', 'Steven', 'peter']
// };

// console.log(oluwadamisi);

// console.log(oluwadamisi.lastName);

// const nameKey = 'Name';
// console.log(oluwadamisi['first' + nameKey]);
// console.log(oluwadamisi['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (oluwadamisi[interestedIn]) {
//     console.log(oluwadamisi[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// oluwadamisi.location = 'Nigeria';
// oluwadamisi['twitter'] = '@a_oluwadamisi';

// console.log(oluwadamisi);

// console.log(`${oluwadamisi.firstName} has ${oluwadamisi.friends.length} friends and his best friend is called ${oluwadamisi.friends[0]}`);

// const oluwadamisi = {
//     firstName: 'Oluwadamisi',
//     lastName: 'Ayinde',
//     birthYear: 2002,
//     // age: this.calcAge(),
//     job: 'Engineer',
//     friends: ['Michael', 'Steven', 'peter'],
//     hasDriversLicense: true,
// calcAge: function(birthYear) {
//     return 2037-birthYear;
// }

// calcAge: function() {
//     console.log(this);
//     return 2037-this.birthYear;
// }

//     calcAge: function() {
//         this.age = 2037-this.birthYear
//         return this.age;
//     },
//     getSummary: function () {
//         console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`);
//         this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// console.log(oluwadamisi.calcAge());

// console.log(oluwadamisi.age);
// console.log(oluwadamisi.age);

// console.log(oluwadamisi.summary());

// Challenge

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height**2;
//         return this.BMI;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height**2;
//         return this.BMI;
//     }
// }

// markBMI = mark.calcBMI();
// johnBMI = john.calcBMI();

// // console.log(`${mark.calcBMI() > john.calcBMI() ? mark.firstName : john.firstName}'s BMI (${(mark.BMI > john.BMI ? mark.BMI : john.BMI).toFixed(2)}) is higher than ${mark.BMI > john.BMI ? john.firstName : mark.firstName}'s (${(mark.BMI > john.BMI ? john.BMI : mark.BMI).toFixed(2)})!`);

// // Loops

// for (let rep = 5; rep <= 25; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// const oluwadamisi = {
//     firstName: 'Oluwadamisi',
//     lastName: 'Ayinde',
//     age: 2037-2002,
//     job: 'Engineer',
//     friends: ['Michael', 'Steven', 'peter']
// };

// const oluwadamisi = ['Oluwadamisi', 'Ayinde', 2037-2002, 'Engineer', ['Michael', 'Steven', 'peter'], true];

// const types = []

// for (let i = 0; i < oluwadamisi.length; i++) {
//     console.log(oluwadamisi[i], typeof oluwadamisi[i]);
//     types.push(typeof oluwadamisi[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < oluwadamisi.length; i++) {
//     if (typeof oluwadamisi[i] !== 'string') continue;

//     console.log(oluwadamisi[i], typeof oluwadamisi[i]);
// }

// console.log('--- ONLY NUMBERS ---')
// for (let i = 0; i < oluwadamisi.length; i++) {
//     if (typeof oluwadamisi[i] === 'number') break;

//     console.log(oluwadamisi[i], typeof oluwadamisi[i]);
// }

// const oluwadamisi = ['Oluwadamisi', 'Ayinde', 2037-2002, 'Engineer', ['Michael', 'Steven', 'peter'], true];

// for (let i = oluwadamisi.length-1; i >= 0; i--) {
//     console.log(i, oluwadamisi[i]);
// }

// for (let exercise=1; exercise < 4; exercise++) {
//     console.log(`------- Starting Exercise ${exercise} --------`);

//     for (let rep=1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
//     }
// }

// While loop

// for (let rep = 5; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// let rep=1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is ending now...`)
// }

// Challenge

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];

// const totals = [];

// const calcTip = (bill) => {
//     return (bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2);
// }

// for (let num=0; num < bills.length; num++) {
//     tips.push(calcTip(bills[num]));
//     totals.push(tips[num] + bills[num]);
// }

// console.log(bills)
// console.log(tips)
// console.log(totals)

// function calcAverage(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     return res/arr.length;
// }

// console.log(`Average bill: ${calcAverage(bills)}`);
// console.log(`Average tip: ${calcAverage(tips)}`);
// console.log(`Average total: ${calcAverage(totals)}`)

// const x = '34';

// if (x === 34) console.log(34);

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1970));

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);

//   return max - min;
// };
// const amplitude = calcTempAmplitude([3, 7, 'error', 23]);
// console.log(amplitude);

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);

//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 7, 'error', 23], [34, 2, 3, 89]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     // value: Number(prompt('Degrees celsius: ')),
//     value: 27,
//   };

//   console.log(measurement);
//   console.table(measurement);
//   //   console.log(measurement);
//   //   console.warn(measurement);
//   //   console.error(measurement);

//   const kelvin = measurement.value + 273;

//   return kelvin;
// };

// console.log(measureKelvin());

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     debugger;
//     if (temps[i] > max) max = curTemp;
//     if (temps[i] < min) min = curTemp;
//   }
//   console.log(max, min);

//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 7, 'error', 23], [34, 2, 3, 89]);
// console.log(amplitudeNew);

// Challenge

function printForecast(arr) {
  let res = ``;
  for (let i = 0; i < arr.length; i++) {
    res += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(`... ${res}`);
  return res;
}

printForecast([17, 21, 23]);
console.log(printForecast([12, 5, -5, 0, 4]));
