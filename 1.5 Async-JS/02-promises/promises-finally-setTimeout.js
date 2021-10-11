'use strict';

function asyncFunction() {
    return new Promise(function print(resolve, reject) {
        setTimeout(() => {
            resolve('asyncFunction has resolved.')
        }, 4000);
    });
}

function asyncFunction2() {
    return new Promise(function print(resolve, reject) {
        setTimeout(() => {
            resolve('asyncFunction2 has resolved.')
        }, 3000);
    });
}

// ***********************
asyncFunction()
    .then(function firstPrint(val) {
        console.log('First print ' + val);
        return asyncFunction2();
    })
    .then(function secondPrint(val) {
        console.log("Second print " + val);
    });

console.log('The code is Async.');

// ***********************
let a = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Done");
    }, 2000)
});

a.then(function (val) {
    console.log(val);
}, function (val) {
    console.log("rejected: " + val);
});


console.log("see this is asynch code");

// ***********************
let setTimeoutP = function (time) {
    return new Promise(function (res, rej) {
        if (isNaN(time)) {
            rej("A number is required.");
        }
        setTimeout(res, time);
    });
};

setTimeoutP("word")
    .then(function () {
        console.log("Done");
    })
    .catch(function (err) {
        console.log(err);
    });

// ***********************
//Modify the code by creating a promise so that the code can run asynchronously.

function massiveProcess(num) {
    return new Promise(function (resolve, reject) {
        if (isNaN(num)) {
            reject("Please enter a number!");
        } else {
            let result = 0;
            setTimeout(function () {
                for (let i = num ** 7; i >= 0; i--) {
                    result += Math.atan(i) * Math.tan(i);
                };
                resolve(result);
            }, 0);
        }
    });
};

massiveProcess(10)
    .then(function (amt) {
        console.log("The number is: " + amt);
    })
    .catch(function (msg) {
        console.error(msg);
    }).finally(() => console.log('cleaning up tasks'));

console.log(5 * 5 + 100);
