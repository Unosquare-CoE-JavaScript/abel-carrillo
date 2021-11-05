
/** Intersection types *****************/
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
    name: 'Abel',
    privileges: ['create-server'],
    startDate: new Date() 
}

type Combined = string | number;

/**Type guards ************************/

function add(a: number, b: number): number; // function overloads
function add(a: string, b: string): string;
function add(a: Combined, b: Combined) {
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
    job: {title: 'DEV'}
}
console.log(fetchedUserData?.job?.title);

const inputValue = '';
const storedData = inputValue ?? 'DEFAULT'; // ?? validates if its null or undefined

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}

// printEmployeeInfo(e1);

printEmployeeInfo({name: 'Anna', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loasing cargo... ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

/** Discriminated unions *****************/

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'horse', runningSpeed: 70});

/** Type casting *************************/

// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
const userInput = document.getElementById('user-input')! as HTMLInputElement;


userInput.value = 'Hi there';

interface ErrorContainer {
    [prop: string]: string;
}

const error: ErrorContainer = {
    email: 'Not a valid name',
    userName: 'Must start with a capital character'
};










