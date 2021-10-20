"use strict";
var _a;
const e1 = {
    name: 'Abel',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // type guard using typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
/** Optional chaining */
const result = add('a', 'b');
const fetchedUserData = {
    id: 'd1',
    name: 'Abel',
    job: { title: 'DEV' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const inputValue = '';
const storedData = inputValue !== null && inputValue !== void 0 ? inputValue : 'DEFAULT'; // ?? validates if its null or undefined
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
// printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Anna', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loasing cargo... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    /*   if('flyingSpeed' in animal) {
          console.log('Moving at speed: ' + animal.flyingSpeed);
      } */
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
        default:
            break;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'horse', runningSpeed: 70 });
/** Type casting *************************/
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
const userInput = document.getElementById('user-input');
userInput.value = 'Hi there';
const error = {
    email: 'Not a valid name',
    userName: 'Must start with a capital character'
};
//# sourceMappingURL=advanced-types.js.map