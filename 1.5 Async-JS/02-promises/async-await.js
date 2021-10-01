'use strict';

async function plainFunction() {
    console.log('start');
    return 'done';
}

/*
plainFunction()
.then(val => console.log(val));
*/

async function myFunction() {
    let p1 = await plainFunction();
    console.log(p1);
    console.log(`${p1}-more info`);
}

myFunction();

// **************************
async function swapiFilms() {
    const url = 'https://swapi.dev/api/films/';
    let filmsData = {},
        films = [];

    filmsData = await fetch(url, { headers })
        .then(data => data.json());

    // processing data
    films = filmsData.results
        .map(obj => obj.title);
    console.log(films)
}

swapiFilms();

console.log('A comment');


// **************************
/*Create a function that will retrieve the posts from 
the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts).
Set up the function so you can pass in the userID and the 
function will assign only the posts for that user to a variable. 
The data should be stored in an array.
*/
var user3Posts;
async function retrievePosts(userID) {
    let url = 'https://jsonplaceholder.typicode.com/posts',
        posts = [];

    posts = await fetch(url).then(resp => resp.json());

    return posts.filter(obj => obj.userId === userID);
};

retrievePosts(3).then(val => user3Posts = val);

console.log('Remaining Code.');


// ********************************
// Refactoring

/* const moviePlanets = function (movieNum) {
    const url = 'https://swapi.dev/api/films/';

    $.getJSON(url + movieNum + '/')
        .then(function (response) {
            console.log(response.title);

            response.planets.forEach(p => $.getJSON(p)
                .then(pl => console.log(pl.name)));
        })
        .catch(reject => console.log(`Couldn't retrieve films: ${reject}`));
}; */

async function moviePlanets(movieNum) {
    const url = 'https://swapi.dev/api/films/';
    try {
        if (isNaN(movieNum)) {
            throw 'You must pass a number';
        }
        let movieObj = await $.getJSON(url + movieNum + '/');
        console.log(movieObj.title);

        let promises = movieObj.planets.map(url => $.getJSON(url));

        for await (let pl of promises) {
            console.log(pl.name);
        }
    } catch (e) {
        console.log(e);
    }
};

moviePlanets(3);

// ********************************
// Refactoring with an IIFE

(async function () {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');

    let obj = await data.json();
    console.log(obj);
})();

console.log('A comment');

// ********************************

/* Refactor the promise code to create an async function
that will take a todo object as a parameter and 
add the todo to the jsonplaceholder site. 
Make sure you account for possible errors.

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`));*/

let addTodo = async function (todo) {
    try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        let results = await resp.json();

        console.log(results);
    } catch (e) {
        console.error(`Unable to create todo ${e}`);
    }
};

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

addTodo(todo);

console.log('Other code');

// ***************************************
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

(async function() {
    let names = await Promise.all([
        firstName(),
        lastName(),
        middleName()
    ]);
    console.log(`${names[0]} ${names[1]} ${names[2]}`);

})();

// **********************************
var MAINAPP = (function(nsp) {

    const url = 'https://jsonplaceholder.typicode.com/';

    (async function() {
        try {
            let p1 = fetch(url + 'posts/'),
                p2 = fetch(url + 'comments/'),
                p3 = fetch(url + 'todos/');

            let results = await Promise.all([
                p1, p2, p3
            ]);

            nsp.posts = await results[0].json();
            nsp.comments = await results[1].json();
            nsp.todos = await results[2].json();
            console.log('data received');
        } catch(e) { console.log(`Problem retrieving data: ${e}`); }
    })();
     

    return nsp;
})(MAINAPP || {});