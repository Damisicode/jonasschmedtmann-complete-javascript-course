let markMass1 = document.querySelector('#mark-mass-1');
let markHeight1 = document.querySelector('#mark-height-1');
let johnMass1 = document.querySelector('#john-mass-1');
let johnHeight1 = document.querySelector('#john-height-1');
let markBmi1 = document.querySelector('#mark-bmi-1');
let johnBmi1 = document.querySelector('#john-bmi-1');
let markMass2 = document.querySelector('#mark-mass-2');
let markHeight2 = document.querySelector('#mark-height-2');
let johnMass2 = document.querySelector('#john-mass-2');
let johnHeight2 = document.querySelector('#john-height-2');
let markBmi2 = document.querySelector('#mark-bmi-2');
let johnBmi2 = document.querySelector('#john-bmi-2');
let averageMass1 = document.querySelector('#average-mass-1');
let averageHeight1 = document.querySelector('#average-height-1');
let averageBmi1 = document.querySelector('#average-bmi-1');
let averageMass2 = document.querySelector('#average-mass-2');
let averageHeight2 = document.querySelector('#average-height-2');
let averageBmi2 = document.querySelector('#average-bmi-2');
let note1 = document.querySelector('#note-1');
let note2 = document.querySelector('#note-2');


const sum = (...numbers) => {
    let total = 0;
    for (cnt=0; cnt < numbers.length; cnt++) {
        total += numbers[cnt];
    }
    return total;
}

// console.log(sum(1,2,3,4))

const average = (totalNum, ...numbers) => {
    return (totalNum(...numbers) / numbers.length);
}

// console.log(average(sum,1,2,3,5,4,6));

const bmi = (mass, height) => mass / height ** 2;

markBmi1Value = bmi(parseInt(markMass1.innerText), (parseInt(markHeight1.innerText)/100));
markBmi1.innerText = Math.floor(markBmi1Value);
markBmi2Value = bmi(parseInt(markMass2.innerText), (parseInt(markHeight2.innerText)/100));
markBmi2.innerText = Math.floor(markBmi2Value);

johnBmi1Value = bmi(parseInt(johnMass1.innerText), (parseInt(johnHeight1.innerText)/100));
johnBmi1.innerText = Math.floor(johnBmi1Value);
johnBmi2Value = bmi(parseInt(johnMass2.innerText), (parseInt(johnHeight2.innerText)/100));
johnBmi2.innerText = Math.floor(johnBmi2Value);

averageBmi1Value = average(sum, markBmi1Value, johnBmi1Value);
averageBmi1.innerText = Math.floor(averageBmi1Value);
averageBmi2Value = average(sum, markBmi2Value, johnBmi2Value);
averageBmi2.innerText = Math.floor(averageBmi2Value);

averageMass1Value = average(sum, parseInt(johnMass1.innerText), parseInt(markMass1.innerText));
averageMass1.innerText = Math.floor(averageMass1Value);
averageMass2Value = average(sum, parseInt(johnMass2.innerText), parseInt(markMass2.innerText));
averageMass2.innerText = Math.floor(averageMass2Value);

averageHeight1Value = average(sum, parseInt(johnHeight1.innerText), parseInt(markHeight1.innerText));
averageHeight1.innerText = Math.floor(averageHeight1Value);
averageHeight2Value = average(sum, parseInt(johnHeight2.innerText), parseInt(markHeight2.innerText));
averageHeight2.innerText = Math.floor(averageHeight2Value);

if (johnBmi1Value > markBmi1Value) {
    note1.innerText = `John's BMI (${johnBmi1Value.toFixed(1)}) is higher than Mark's (${markBmi1Value.toFixed(1)})`;
} else {
    note1.innerText = `Mark's BMI (${markBmi1Value.toFixed(1)}) is higher than John's (${johnBmi1Value.toFixed(1)})`;
}

if (johnBmi2Value > markBmi2Value) {
    note2.innerText = `John's BMI (${johnBmi1Value.toFixed(1)}) is higher than Mark's (${markBmi1Value.toFixed(1)})`;
} else {
    note2.innerText = `Mark's BMI (${markBmi1Value.toFixed(1)}) is higher than John's (${johnBmi1Value.toFixed(1)})`;
}

// averageHeight1 = average(sum, johnHeight1, markHeight1);
// averageHeight2 = average(sum, johnHeight2, markHeight2);