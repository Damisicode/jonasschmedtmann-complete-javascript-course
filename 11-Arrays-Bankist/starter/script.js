'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`

  const expenses = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(expenses)}€`

  const interests = acc.movements.filter(mov => mov > 0).map(deposit => deposit * (acc.interestRate / 100)).filter(int => int >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interests}€`
}

const createUsernames = function (accts) {
  accts.forEach(function(acct) {
    acct.username = acct.owner.toLowerCase().split(' ').map(user => user[0]).join('');
  })
}
createUsernames(accounts);

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
}

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  console.log(amount, recieverAcc);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && amount <= currentAccount.balance && recieverAcc?.username !== currentAccount) {

    // Doing the transfer
    recieverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);

    // update UI
    updateUI(currentAccount);
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && currentAccount?.pin === Number(inputClosePin.value)) {
    console.log("User is valid");

    const index = accounts.findIndex(acc => acc.username = currentAccount.username);
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault()
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// console.log(arr.splice(-2));
// console.log('Here is the new arr' + arr);



// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log(letters.join(' - '));


// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log('Oluwadamisi'.at(-2));


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// }


// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// });



// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })


// Challenge

// function checkDogs (dogsJulia, dogsKate) {
//   console.log('Printing julia dogs with incorrect data: ' + dogsJulia);
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);


//   console.log('Printing julia dogs with correct data: ' + dogsJuliaCorrected);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     const str = dog < 3 ? 'still a puppy 🐶' : `an adult, and is ${dog} years old`;

//     console.log(`Dog number ${i+1} is an ${str}`);
//   });
// };


// const julia = [3, 5, 2, 12, 7];


// console.log('--------- TEST DATA 1 --------')
// checkDogs(julia, [4, 1, 15, 8, 3]);


// console.log('--------- TEST DATA 2 --------');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

// console.log(julia);



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(mov => mov * eurToUsd);
// // console.log(movements);
// // console.log(movementsUSD);

// const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsDescriptions);


// const deposits = movements.filter(function(mov) {
//   return mov > 0;
// })

// console.log(movements);
// console.log(deposits);

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur;
// }, 0);

// console.log(balance);

// const totalDeposit = movements.reduce((acc, cur) => {
//   let res = acc;
//   if (cur > 0) {
//     res = acc + cur;
//   }
//   return res;
// }, 0);

// console.log(totalDeposit);

// const totalWithdrawals = movements.reduce((acc, cur) => {
//   let res = acc;
//   if (cur < 0) {
//     res = acc + Math.abs(cur);
//   }
//   return res;
// }, 0);

// console.log(totalWithdrawals);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);


// Maximum value
const max = movements.reduce((acc, cur) => {
  return acc > cur ? acc : cur;
}, movements[0]);

console.log(max);




///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


// const calcAverageHumanAge = function (ages) {
//   console.log(ages);

//   // const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(dogAge => dogAge >= 18);
//   // console.log(humanAges);

//   // return humanAges.reduce((acc, cur) => acc + cur, 0) / humanAges.length;

//   return ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(dogAge => dogAge >= 18).reduce((acc, cur, i, arr) => acc + cur/arr.length, 0);
// }

// const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(dogAge => dogAge >= 18).reduce((acc, cur, i, arr) => acc + cur/arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));



// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0)
// const totalWithdrawalsUSD = movements.filter(mov => mov < 0).map(mov => Math.abs(mov) * eurToUsd).reduce((acc, mov) => acc + mov, 0)

// console.log(totalDepositsUSD);
// console.log(totalWithdrawalsUSD);



// const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acnt of accounts) {
//   // console.log(acnt);
//   if (acnt.owner === 'Jessica Davis') {
//     console.log(acnt);
//     console.log("Match Found");
//   }
// }

// console.log(movements);

// const anyDeposits = movements.some(mov => mov < 0);
// console.log(anyDeposits);


// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));


// const deposit = mov => mov > 0;
// console.log(movements.every(deposit));
// console.log(movements.some(deposit));
// console.log(movements.filter(deposit));

// const arr = [1, 2, [3, [4], 5], 6, [7, 8, 9]]
// console.log(arr.flat());

// // arr.flatMap(arr => arr >)

// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements);

// const allMovements = accountMovements.flat()
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance2 = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov);

// console.log(overallBalance2);

// const overallDeposits = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => mov > 0 ? acc + mov : acc);
// console.log(overallDeposits)

// const overallWithdrawals = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => mov < 0 ? acc + mov : acc);
// console.log(overallWithdrawals)

// const overallWithdrawals2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => mov < 0 ? acc + mov : acc);
// console.log(overallWithdrawals)



// movements.sort((a, b) => a - b);
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // })

// console.log(movements);

// movements.sort((a, b) => 
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // })
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // })

// console.log(movements);


// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);

// x.fill(1, 2, );
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i+1);
// console.log(z);

// const rolls = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 7));
// console.log(rolls);


// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', ''))
//   )

//   console.log(movementsUI);

//   const movementUI2 = [...document.querySelectorAll('.movements__value')];

//   console.log(movementUI2.map(el => el.textContent));
// })


const movementsArr = accounts.map(acc => acc.movements);
console.log(movementsArr);

const flattedMovements = movementsArr.flat();

const totalDeposit = flattedMovements.reduce((acc, mov) => mov > 0 ? acc + mov : acc, 0);

const totalWithdrawal = flattedMovements.reduce((acc, mov) => mov < 0 ? acc + mov : acc, 0);


console.log(totalDeposit, totalWithdrawal);

const totalDeposit2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => mov > 0 ? acc + mov : acc, 0)

const totalWithdrawal2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => mov > 0 ? acc + mov : acc, 0)

const num1000Deposits = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;

const num1000Deposits2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => mov >= 1000 ? ++acc : acc, 0);

console.log(num1000Deposits);
console.log(num1000Deposits2);


const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  return sums;
}, {
  deposits: 0, withdrawals: 0
});

console.log(sums);



const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  return capitalize(title.toLowerCase().split(' ').map(word => expections.includes(word) ? word : capitalize(word)).join(' '));
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);

// 2.

// console.log(dogs.some(dog => dog.owners.includes('Sarah')));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(dogSarah);

console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}!`)

// 3.

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood * 1.1).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooMuch2 = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);


const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood * 0.9).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

const ownersEatTooLittle2 = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);


// 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);


// 5.

console.log(dogs.some(dog => Math.trunc(dog.recFood) === dog.curFood));

// 6.

console.log(dogs.some(dog => dog.recFood * 0.9 < dog.curFood && dog.curFood < dog.recFood * 1.1));


// 7.

const checkEating = dog => dog.recFood * 0.9 < dog.curFood && dog.curFood < dog.recFood * 1.1;

console.log(dogs.filter(dog => dog.recFood * 0.9 < dog.curFood && dog.curFood < dog.recFood * 1.1).flatMap(dog => dog.owners));


// 8.

const dogsSorted = dogs.slice().sort((a, b) => a.recFood = b.recFood);
console.log(dogsSorted);