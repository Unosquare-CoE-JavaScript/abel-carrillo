'use strict';

const swapi = function (num) {
    let url = 'https://swapi.dev/api/people/';

    fetch(url + num + '/')
        .then(data => data.json())
        .then(obj => {
            console.log(obj);
            return fetch(obj.homeworld);
        })
        .then(hwdata => hwdata.json())
        .then(hwobj => console.log(hwobj));
};

swapi(9);

console.log('Using fetch');


// JSON placeholder

fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(data => data.json())
    .then(obj => console.log(obj));

console.log('Other code');

// fetch with POST

const todo = {
    completed: false,
    userId: 1,
    title: 'Learn Promises'
};

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(todo)
})
    .then(resp => resp.json())
    .then(obj => console.log(obj))
    .catch(reject => console.log(`Unable: ${reject}`));

console.log('fetch with POST');

// ********************************
const moviePlanets = function (movieNum) {
    let url = 'https://swapi.dev/api/films/';

    $.getJSON(url + movieNum + '/')
        .then(function (response) {
            console.log(response.title);

            response.planets.forEach(p => $.getJSON(p)
                .then(pl => console.log(pl.name)));
        })
        .catch(reject => console.log(`Couldn't retrieve films: ${reject}`));
};

moviePlanets(3);