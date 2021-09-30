'use strict';
// Blocking code *****************************
function test() {
    console.log('First print');

    alert('Alert!');

    console.log('Second print');
}

function test2() {
    console.log('Third print');
}

test();
test2();


// Callbacks, asynchronous with setTimeout

var btn = document.querySelector('#button1');

btn.addEventListener('click', function clickEvent(event) {
    console.log('Button was clicked');
});


var students = [
    {name: 'Mary', score: 90, school: 'East'},
    {name: 'James', score: 100, school: 'East'},
    {name: 'Steve', score: 40, school: 'East'},
    {name: 'Gabe', score: 90, school: 'West'},
];

function processStudents(data, callback) {
    for (let i=0; i < data.length; i++) {
        if (data[i].school.toLowerCase() == 'east') {
            if (typeof callback == 'function') {
                callback(data[i]);
            }
        }
    }
}

/* processStudents(students, function passed(obj) {
    if (obj.score < 60) {
        console.log(`${obj.name} passed.`);
    }
}); */

console.log('Before determineTotal');

function determineTotal() {
    let total = 0;
        count = 0;

    processStudents(students, function counter(obj) {
        total += obj.score;
        count++;
    });

    console.log(`Total score: ${total} - Total count: ${count}`);
}

setTimeout(determineTotal, 0);

console.log('end');