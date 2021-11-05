

/** Arrow functions ex */

const add2 = (n1: number, n2: number) => n1 + n2;
const printOutput : (val: number | string) => void = output => console.log(output);
const btn2 = document.querySelector('button');

if (btn2) {
    btn2.addEventListener('click', event => console.log(event));   
}

printOutput(add2(2,3));


/** Spread operator  */

const cars = [
    'Dodge',
    'Ford',
    'Chevrolet'
];
const cars2 = ['Honda'];
cars.push(...cars2);
console.log(...cars);

const person2 = {
    firstName: 'Abel',
    age: 55
};
const copiedPerson = {...person2};
console.log(copiedPerson);


/**Rest parameters */

function add3(...numbers: number[]) {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0); // 0 = starting value/position
}
const added = add3(1,2,3,4,5);
console.log(added);

/** Destructuring (arrays & objects) */

const [car1, car2, ...remainingCars] = cars;
console.log(car1, car2, remainingCars);

// rename the firstName to fName
const {firstName: fName, age} = person2;
console.log(fName, age);












