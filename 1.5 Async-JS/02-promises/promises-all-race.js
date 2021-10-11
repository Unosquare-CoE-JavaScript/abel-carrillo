'use strict';
// ***********************
// Promise with all and race methods

let firstName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Steven');
        }, 4000);
    });
};

let lastName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Hancock');
        }, 3000);
    });
};

let middleName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('W.');
        }, 7000);
    });
};

Promise.all([
    firstName(),
    lastName(),
    middleName()
])
    .then(function (msg) {
        console.log(`${msg[0]} ${msg[1]} ${msg[2]}`);
    })
    .catch(console.error());

Promise.race([ // we should get whatever value return first, in this case 'Hancock'
    firstName(),
    lastName(),
    middleName()
])
    .then(function (msg) {
        console.log(msg);
    })
    .catch(console.error());


// *********************

let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Done');
    }, 2000)
});



p1.then(function (val) {
    console.log(val);
}, function (val) {
    console.log('rejected: ' + val);
});


console.log('see this is asynch code');

// *********************
var MAINAPP = (function (nsp) {
    'use strict';

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code so that it uses Promise.all to respond
    once all of the promises have returned. 
    Provide a notification to the console when the promises 
    have completed.
    */
    let p1 = fetch(url + 'posts/')
        .then(response1 => response1.json()),
        p2 = fetch(url + 'comments/')
            .then(response2 => response2.json()),
        p3 = fetch(url + 'todos/')
            .then(response3 => response3.json());

    Promise.all([p1, p2, p3])
        .then(msg => {
            nsp.posts = msg[0];
            nsp.comments = msg[1];
            nsp.todos = msg[2];
            console.log('Received data');
        })
        .catch(err => console.log(`Problem retrieving data: ${err}`));

    //public
    return nsp;
})(MAINAPP || {});