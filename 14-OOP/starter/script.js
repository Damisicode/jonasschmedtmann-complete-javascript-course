'use strict';

// const Person = function (firstName, birthYear) {
//     // Instance Properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // }
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda, jack);

// // console.log(jonas instanceof Person);

// // // Prototypes
// // console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// Person.greet = function () {
//     console.log(`Hey there from constructor function ${this.firstName}`)
// }

// jonas.calcAge();
// Person.greet();
// // jonas.greet();

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype)


// // console.log(Person.prototype.isPrototypeOf(Person))
// // console.log(Person.prototype.isPrototypeOf(jonas))
// // console.log(Person.prototype.isPrototypeOf(matilda))



// // // .prototypeOfLinkedObjects

// // Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species, matilda.species);

// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'))


// // console.log(jonas.__proto__);

// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);

// // console.dir(Person.prototype.constructor);

// // const arr = [3, 6, 6, 5, 6, 9, 9];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);

// // console.log(arr.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //     return [...new Set(this)];
// // }

// // console.log(arr.unique());
// // const h1 = document.querySelector('h1');



// // const Car = function (make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// // }

// // const car1 = new Car('BMW', '120km/h');
// // const car2 = new Car('Mercedes', '95km/h');

// // Car.prototype.accelerate = function () {
// //     this.speed = `${Number.parseInt(this.speed) + 10}km/h`;
// //     console.log(this.speed);
// // }

// // Car.prototype.brake = function () {
// //     this.speed = `${Number.parseInt(this.speed) - 5}km/h`
// //     console.log(this.speed);
// // }

// // console.log(car1);
// // console.log(car2);

// // car1.accelerate();
// // car2.accelerate();

// // car1.brake();
// // car2.brake();



// // class Expression
// // const PersonCl = class {}

// // class declaration
// class PersonCl {
//     constructor (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     get Age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//     }

//     get fullName () {
//         return this._fullName;
//     }

//     static greet() {
//         console.log(`Hey there 👋`);
//     }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.Age);
// // jessica.greet;
// PersonCl.greet();
// jessica.fullName('Jessica Davis');

// console.log(jessica.__proto__ === PersonCl.prototype);


// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }

// jessica.greet()

// console.log(jessica.__proto__)



// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest (mov) {
//         this.movements.push(mov)
//     }
// }

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);


// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const peter = Object.create(PersonProto);
// console.log(peter);
// peter.firstName = 'Peter';
// peter.birthYear = 2002;
// console.log(peter);
// peter.calcAge();

// console.log(peter.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();



// console.log('///////////////////////////');
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/


// class Car {
//     constructor (make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate () {
//         this.speed = `${Number.parseInt(this.speed) + 10}km/h`;
//         console.log(this.speed);
//     }

//     brake () {
//         this.speed = `${Number.parseInt(this.speed) - 10}km/h`
//         console.log(this.speed);
//     }

//     get speedUS () {
//         return `${Number.parseInt(this.speed) / 1.6}mi/h`;
//     }

//     set speedUS (speed) {
//         this.speed = `${Number.parseInt(speed) * 1.6}mi/h`;
//     }
// }

// const fordCar = new Car('Ford', '120km/h');
// console.log(fordCar);
// fordCar.accelerate();
// fordCar.brake();
// console.log(fordCar.speedUS);



// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);

//     this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science')
// mike.introduce();

// // mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);


// Student.prototype.constructor = Student;

// console.log(mike)



// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// const car1 = new Car('BMW', '120km/h');
// const car2 = new Car('Mercedes', '95km/h');

// Car.prototype.accelerate = function () {
//     this.speed = `${Number.parseInt(this.speed) + 10}km/h`;
//     console.log(this.speed);
// }

// Car.prototype.brake = function () {
//     this.speed = `${Number.parseInt(this.speed) - 5}km/h`
//     console.log(this.speed);
// }

// console.log(car1);
// console.log(car2);

// car1.accelerate();
// car2.accelerate();

// car1.brake();
// car2.brake();


// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = `${Number.parseInt(chargeTo)}%`;
// }

// EV.prototype.accelerate = function () {
//     this.speed = `${Number.parseInt(this.speed) + 20}km/h`;
//     this.charge = `${Number.parseInt(this.charge) - 1}%`;
//     console.log(`${this.make} going at ${Number.parseInt(this.speed)} km/h, with a charge of ${this.charge}`);
// }

// const tesla = new EV('Tesla', '120km/h', '23%');

// console.log(tesla);

// console.log(tesla instanceof EV);
// console.log(tesla instanceof Car);
// console.log(tesla instanceof Object);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery('90%');
// console.log(tesla);


// class PersonCl {
//     constructor (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     get Age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//     }

//     get fullName () {
//         return this._fullName;
//     }

//     static greet() {
//         console.log(`Hey there 👋`);
//     }
// }


// class StudentCl extends PersonCl {
//     constructor (fullName, birthYear, course) {
//         // Always need to happen first
//         super(fullName, birthYear);
//         this.course = course;
//     }

//     introduce () {
//         console.log(`My name is ${this.firstName} and i study ${this.course}`);
//     }

//     calcAge () {
//         console.log(`I'm ${2037 - this.birthYear} years old, but as a student i feel more like a ${2037 - this.birthYear + 10} years old`)
//     }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// console.log(martha);
// martha.introduce();
// martha.calcAge();



// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }


// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and i study ${this.course}`);
// }

// const jay = Object.create(StudentProto);

// jay.init('Jay', 2010, 'Computer Science');
// console.log(jay);
// jay.introduce();
// jay.calcAge();



// class Account {
//     // Public field
//     locale = navigator.language;

//     // Private field
//     #movements = [];
//     #pin;

//     constructor (owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this._movements = [];
//         // this.locale = navigator.language;


//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     getMovements () {
//         return this.#movements;
//     }

//     deposit (val) {
//         this.#movements.push(val);
//         return this;
//     }

//     withdraw (val) {
//         this.deposit(-val);
//         return this;
//     }

//     requestLoan (val) {
//         if (this.#approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan approved`);
//             return this;
//         }
//     }

//     // Private methods

//     #approveLoan (val) {
//         return true;
//     }

//     static helper() {
//         console.log('Helper');
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111)

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);

// Account.helper();

// acc1.deposit(100).deposit(500).withdraw(200).requestLoan(10000);




class Car {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate () {
        this.speed = `${Number.parseInt(this.speed) + 10}km/h`;
        console.log(this.speed);
    }

    brake () {
        this.speed = `${Number.parseInt(this.speed) - 10}km/h`
        console.log(this.speed);
        return this;
    }

    get speedUS () {
        return `${Number.parseInt(this.speed) / 1.6}mi/h`;
    }

    set speedUS (speed) {
        this.speed = `${Number.parseInt(speed) * 1.6}mi/h`;
    }
}



// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


class EVCl extends Car {
    #charge

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery (chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate () {
        this.speed = `${Number.parseInt(this.speed) + 20}km/h`;
        this.#charge = `${Number.parseInt(this.#charge) - 1}%`;
        console.log(`${this.make} going at ${Number.parseInt(this.speed)} km/h, with a charge of ${this.#charge}`);
        return this;
    }
}

const rivian = new EVCl('Rivian', '120km/h', '23%');

console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake().chargeBattery('80%').accelerate();

console.log(rivian);