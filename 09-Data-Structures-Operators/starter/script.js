'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of [...flights.split('+')]) {
  const [type, from, to, time] = flight.split(';');
  const flightStr = `${type.includes('Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44);
  console.log(flightStr);
}


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
  

const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat']
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex=1, mainIndex=0, time='20:00', address}) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};


// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat'];

// for (let day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }


// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);


// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log(restaurant);





// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu, ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i=0; i<numbers.length; i++) {
//     // console.log(numbers);
//     sum += numbers[i];
//   }
//   return sum;
// };

// console.log(add(2, 3));
// console.log(add(3, 5, 2, 4));
// console.log(add(2, 3, 4, 2, 1, 1, 3));

// const x = [23, 2, 5];
// console.log(add(...x));

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2, starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// })


// const arr = [2,3,4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;



// [main, secondary] = [secondary, main];
// console.log(main, secondary);


// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);


// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);



// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);


// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

// console.log(restaurantName, hours, tags);


// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({a, b} = obj);
// console.log(a, b);

// const {
//   fri: {
//     open, close
//   },
// } = openingHours;

// console.log(open, close);



// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 3, 4, 5);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(newMenu);

// // Join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Oluwadamisi';
// const letters = [...str, " ", 'S.'];
// console.log(letters);
// console.log(...str);
// console.log('O', 'l', 'u', 'w', 'a', 'd', 'a', 'm', 'i', 's', 'i');

// console.log(`${[...str, " "]} Ayinde`);


// const ingredients = [prompt("Let's make pasta! ingredient 1: "), prompt('Ingredient 2: '), prompt('Ingredient 3: ')]
// console.log(ingredients);


// const newResturant = {
//   foundedIn: 1998, ...restaurant, founder: 'Guiseppe'
// };

// console.log(newResturant);


// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// restaurant.orderPasta(...ingredients);



// console.log(3 || 'Oluwadamisi');

// restaurant.numGuests = 0;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);


// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);


// console.log(0 && 'Oluwadamisi');
// console.log(7 && 0 && "" && 'Oluwadamisi');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');





// restaurant.numGuests = 0;

// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0
// }

// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni Rossi'
// }

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;


// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= "<anonymous>"
// rest2.owner &&= "<anonymous>"

// console.log(rest1);
// console.log(rest2);




// // challenge

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrusia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandoski'
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze'
//     ]
//   ],
//   score: '4:0',
//   scored: ['Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   }
// }

// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];

// const [players1, players2] = [...game.players]

// console.log(players1);
// console.log(players2);

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;

// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   // const goalsSum = {}

//   // for (let i = 0; i<players.length; i++) {
//   //   // if (goalsSum[i]) {
//   //   //   goalsSum[players[i]] += 1;
//   //   // } else {
//   //   //   goalsSum[players[i]] = 1;
//   //   // }
//   //   goalsSum[players[i]] ||= 0;
//   //   goalsSum[players[i]] += 1;
//   // }

//   console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandoski', 'Kimmich', 'Davies');
// printGoals(...game.scored);


// team1 < team2 && console.log("Team1 is more likely to win");
// team1 > team2 && console.log("Team2 is more likely to win");


// for (let [i, el] of [...restaurant.starterMenu, ...restaurant.mainMenu].entries()) {
//   console.log(`${i+1}, ${el}`);
// }


// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);




// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrusia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandoski'
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze'
//       ]
//     ],
//     score: '4:0',
//     scored: ['Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 11.33,
//       x: 3.25,
//       team2: 6.5,
//     }
//   }


// for (let [i, playerName] of game.scored.entries()) {
//   console.log(`Goal ${i+1}: ${playerName}`)
// }

// let oddTotal = 0;
// const odds = Object.entries(game.odds);
// console.log(odds);
// for (const [_, odd] of odds) {
//   oddTotal += odd;
// }

// const oddAverage = Math.trunc(oddTotal / odds.length);
// console.log(`The Average of the odds is ${oddAverage}.`)


// for (const [team, odd] of odds) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : scorers[player] = 1;
// }

// console.log(scorers);


// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Risotto'));
// console.log(ordersSet.has('Pasta'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (let order of ordersSet) {
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);


// console.log(new Set("Oluwadamisiayinde").size);

// console.log([..."Oluwadamisiayinde"].length);


// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));


// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// console.log(rest.size);

// rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));


const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try Again!'],
]);
// console.log(question.get('question'));

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3
// console.log(question.get(question.get('correct') === answer));



// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());




// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);


// // #1

// const events = [...new Set(gameEvents.values())];
// console.log(events);


// // #2
// gameEvents.delete(64);
// console.log(gameEvents);

// // #3
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`)


// // #4
// for (const [time, event] of gameEvents) {
//   console.log(`${time <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${time}: ${event}` )
// }



const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log('B23G'[0]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));


// console.log(airline.slice(4));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1))
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));


// const checkMiddleSeat = function (seat) {
//   // B and E are the middle seat
//   seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? console.log(`${seat} is a middle seat`) : console.log(`${seat} is not a middle seat`);
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof airline);

// console.log(new String('Oluwadamisi'));
// console.log(typeof new String('Oluwadamisi'));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());


// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);


// Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);


// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);


// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);


// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));



// console.log(announcement.replace(/door/g, 'gate'));


// const lane = 'Airbus A320neo';
// console.log(lane.includes('A320'));

// console.log(lane.includes('Boeing'));
// console.log(lane.startsWith('Airb'));

// if (lane.startsWith('Airbus') && lane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');


// console.log('a+very+nice+string'.split('+'));
// console.log('Oluwadamisi Ayinde'.split(' '));

// const [firstName, lastName] = 'Oluwadamisi Ayinde'.split(' ');
// console.log(firstName, lastName);


// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const newName = []
//   for (const n of names) {
//     // newName.push(n[0].toUpperCase() + n.slice(1));
//     newName.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   return newName.join(' ');
// }

// console.log(capitalizeName('jessica ann smith davis'));
// console.log(capitalizeName('oluwadamisi ayinde'));


// // Padding
// const message = ('Go to gate 23!');
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log(message.padStart(25, ' '));
// console.log(message.padEnd(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('2344293238423232323'));


// const message2 = 'Bad weather... All departures Delayed...';
// console.log(message2.repeat(5));


// const planesInline = function(n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// }


// planesInline(3);
// planesInline(5);

// planesInline(12);




// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));



// const toCamelCase = function (text) {
//   const res = [];
//   console.log(text.split('\n'));
//   for (const [i, t] of [...text.split('\n')].entries()) {
//     const textArr = t.trim().toLowerCase().split('_');
//     console.log(textArr[0]);
//     const newText = [];
//     for (const [i, n] of textArr.entries()) {
//       i !== 0 ? newText.push(n[0].toUpperCase() + n.slice(1)) : newText.push(n);
//     }
//     console.log(newText);
//     res.push(`${newText.join('').padEnd(20, ' ')}${'✅'.repeat(i+1)}`);
//   }
//   console.log(res.join('\n'));
// };

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   toCamelCase(text);
// })
