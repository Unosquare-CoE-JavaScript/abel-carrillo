/* const person: {
    name: string
} = { */

/* const person: {
    name: string;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Abel',
    hobbies: ['Drive', 'tvSeries', 'Sports'],
    // Tuple
    role: [3, 'dev']
}; */

enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = 22,
    AUTHOR = "AUTHOR",
}

const person = {
    name: "Abel",
    hobbies: ["Drive", "tvSeries", "Sports"],
    // Tuple
    // role: [3, 'dev']
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = '4';
console.log(person.name);

let arrayOfStrings: string[];

for (const hobbie of person.hobbies) {
    console.log(hobbie);
}

/** Nested objects **********************/

/* const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
} */

/** Union types */

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === "number" && input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(20,30);
const combinedNames = combine('Max ', 'Anna');

console.log(`Ages: ${combinedAges}\nNames: ${combinedNames}`);

/** Custom types  */

type Combinable = number | string;

// function combine2(input1: Combinable, input2:Combinable) {}

/** Functions and callbacks */

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

addAndHandle(3, 4, (result) => {
console.log(result);

});

/** "never" type */

function generateError(msg: string, code: number): never {
    throw {message: msg, errorCode: code};
}

generateError('Error!', 123);