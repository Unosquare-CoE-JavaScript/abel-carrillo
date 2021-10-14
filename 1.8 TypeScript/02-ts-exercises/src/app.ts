interface Greeting {
    firstName: string;
    greet(phrase: string): void;
}

class Person implements Greeting {
    firstName: string;
    age = 33;
    constructor(n: string) {
        this.firstName = n;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.firstName}`);
        
    }
}

let user1: Greeting;
/* user1 = {
    firstName: 'Abel',
    greet(phrase: string) {
        console.log(`${phrase} ${this.firstName}`);
        
    }
}; */

user1 = new Person('Abel')

user1.greet('Hi! I am');