// let js = 'amazing';
// if (js === 'amazing') alert('Javascript is FUN!');

// console.log("40 + 8 + 23 - 10 = " + (40 + 8 + 23 - 10));
// console.log('Oluwadamisi');

// let firstName = 'Bob';
// console.log(firstName);



// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log("Type of true is: " + (typeof true));
// console.log("Type of 1 is: " + (typeof 1));
// console.log("Type of 'true' is: " + (typeof "true"));
// console.log("Type of javascriptIsFun variable is: " + (typeof javascriptIsFun));
// javascriptIsFun = 'YES';
// console.log("Type of javascriptIsFun variable is: " + (typeof javascriptIsFun));
// // console.log("Type of true is: " + (sizeof, 1));

// let year;
// console.log(year);
// console.log(typeof year);

// year = 33;
// console.log(year);
// console.log(typeof year);

// const birthYear = 1991;
// console.log(birthYear);

// console.log(typeof birthYear);

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Oluwadamisi';
// const lastName = 'Ayinde';
// console.log(firstName + ' ' + lastName);

// let x = 10+5; // 15
// x += 10;    // 15 + 10 = 25
// x *= 4;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18


// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;

// console.log(x, y);

// y = 15;

// console.log(x, y);

// x = y;

// console.log(x, y);

// y = 20;

// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(averageAge);

// const firstName = 'Oluwadamisi';
// let job = 'Business Man';
// const birthYear = 2002;
// let year = 2037;

// const oluwadamisi = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(oluwadamisi);
// job = 'Software Engineer';
// year = 2027;
// const oluwadamisiAyinde = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(oluwadamisiAyinde);


// console.log('Just a \nregular \nstring...');
// console.log(
//             `Just a 
//             regular
//             string
//             ...`);


// const age = 15;

// if (age >= 18) {
//     console.log('Sarah is old enough to have a license 🚗')
// } else {
//     const yearsLeft = 18 - age;
//     if (yearsLeft > 1) {
//         console.log(`Sarah is not old enough to have a license, so she has to walk 🚶 for ${yearsLeft} years`);
//     } else {
//         console.log(`Sarah is not old enough to have a license, so she has to walk 🚶 for a year`)
//     }
// }

// const birthYear = 1991;
// let century;
// if (birthYear < 2000) {
//     century = '20th';
// } else {
//     century = '21st';
// }

// console.log(century);

// Type Conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Oluwadamisi'))

// console.log(typeof NaN);

// console.log(String(23) + 23);


// // Type Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('65' - '34' + '5' - 2);

// Falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }


// let height = "";
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED')
// }


// const age = '18';
// if (age === 18) console.log("You just became an adult (strict)");

// if (age == 18) console.log("You just became an adult (loose)");


// const favorite = Number(prompt("what's your favorite number?"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log("Cool! 23 is an amazing number!")
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7');
// }

// if (favorite !== 23) {
//     console.log("Cool! why not 23")
// }


// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }


// Challenge

// dolphinsTestData = [96, 108, 89];
// dolphinsTestDataBonus1 = [97, 112, 101];
// dolphinsTestDataBonus2 = [97, 112, 101];

// koalasTestData = [88, 91, 110];
// koalasTestDataBonus1 = [109, 95, 123];
// koalasTestDataBonus2 = [109, 95, 106];

// function average (data) {
//     let res = 0;
//     for (let i = 0; i < data.length; i++) {
//         res += data[i];
//     }
//     return res / data.length;
// }

// // if (average(dolphinsTestData) > average(koalasTestData)){
// //     console.log("The Dolphins won the match");
// // } else if (average(dolphinsTestData) === average(koalasTestData)) {
// //     console.log("The match ended in a tie");
// // } else {
// //     console.log("The Koalas won the match")
// // }


// if (average(dolphinsTestData) > average(koalasTestData) && average(dolphinsTestData) > 100){
//     console.log("The Dolphins won the match!!!");
// } else if (average(dolphinsTestData) === average(koalasTestData) && average(dolphinsTestData) > 100) {
//     console.log("The match ended in a tie");
// } else if (average(dolphinsTestData) < average(koalasTestData) && average(koalasTestDataBonus2) > 100) {
//     console.log("The Koalas won the match!!!")
// } else {
//     console.log("No qualified winner ;)")
// }


// const day = 'tuesday';

// switch(day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }



// let age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

// console.log(drink);

// age = 15;

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)


let bill = 40;
let tip = 50 < bill && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and total value ${tip + bill}`);