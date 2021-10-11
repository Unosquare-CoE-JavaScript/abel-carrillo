'use strict';

function *counter() {
    let x = 0;
    console.log('start');
    x++;
    yield;
    console.log(x);
    x++;
    console.log(x);
    x++;
    yield;
    console.log('end');
    return x;
}

var gen = counter();

// *************************
const test = function *() {
    yield 10;
    yield 20;
    yield 30;
}

let it = test();
console.log('A comment');

// *************************
// fibonacci with generator

const fibonacci = function *(len, nums = [0,1]) {
    let num1 = nums[0],
        num2 = nums[1],
        next,
        cnt = 2;

    while (cnt < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        nums.push(next);
        cnt++;
        yield nums;
    }
    return nums;
}

var fib = fibonacci(10);

// *************************
/*
Using the random number code below, set up a generator
function that will act as a producer of a random value. 
It should return a random number whenever next is invoked. 
Set the function up so it can be used to create a random 
number between 1 and 100 or 1 and 10 or between 1 and 
any number; basically the end number should be whatever 
is passed into the function. 
*/

const randomNum = function *(end) {
    while (true) {
        let rand = Math.floor(Math.random() * end) + 1;
        yield rand;
    };
};

 let rand100 = randomNum(100);

 let rand10 = randomNum(10);

// *************************
 // "Iterator'

 let arr = ['a', 'b', 'c', 'd'];
 // let it = arr[Symbol.iterator]();

 let arrIt = function *(arr) {
     for (let index = 0; index < arr.length; index++) {
         yield arr[index];
     }
 }

 let it = arrIt(arr);
 console.log('A comment');

 let obj = {
     1: 'one',
     2: 'two',
     3: 'three'
 }
        
 obj[Symbol.iterator] = function *() {
     for (let index = 1; index < 4; index++) {
         yield this[index];
     }
 }

 for (val of obj) {
     console.log(val);
 }

 let it2 = obj[Symbol.iterator]();