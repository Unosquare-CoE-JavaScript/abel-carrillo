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
//# sourceMappingURL=app.js.map