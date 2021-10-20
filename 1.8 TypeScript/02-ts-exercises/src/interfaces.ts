interface Named {
    readonly firstName: string;
    outputName?: string; // optional
}

interface Greeting extends Named {
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


/** Interfaces as function types */

/* interface AddFn {
    (a: number, b: number) : number;
}

let add2: AddFn;

add2 = (n1: number, n2: number) => {
    return n1 + n2;
}; */

