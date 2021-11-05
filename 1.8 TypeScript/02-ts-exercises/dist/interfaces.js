"use strict";
class Person {
    constructor(n) {
        this.age = 33;
        this.firstName = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.firstName}`);
    }
}
let user1;
/* user1 = {
    firstName: 'Abel',
    greet(phrase: string) {
        console.log(`${phrase} ${this.firstName}`);
        
    }
}; */
user1 = new Person('Abel');
user1.greet('Hi! I am');
/** Interfaces as function types */
/* interface AddFn {
    (a: number, b: number) : number;
}

let add2: AddFn;

add2 = (n1: number, n2: number) => {
    return n1 + n2;
}; */
//# sourceMappingURL=interfaces.js.map