// 1
const _ = {};

_.each = function (list, cb) {
  if (Array.isArray(list)) {
    //true
    for (let i = 0; i < list.length; i++) {
      // call the callback with a list item
      cb(list[i], i, list);
    }
  } else {
    // object
    for (let key in list) {
      cb(list[key], key, list);
    }
  }
};

console.log('1\n');
_.each(['sally', 'georgie', 'porgie'], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, 'is younger than', list[i + 1]);
  } else {
    console.log(name, 'is the oldest');
  }
});
console.log('\n\n***********************************************');

//2
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function (item) {
  return `broken ${item}`;
};
console.log('2\n');
console.log(weapons.map(makeBroken));
console.log('\n\n***********************************************');

//3
_.map = function (list, cb) {
  var storage = [];

  _.each(list, function (v, i, list) {
    storage.push(cb(v, i, list));
  });
  return storage;
};
console.log('3\n');
_.map([1, 2, 3], function (val) {
  console.log(val + 1);
});
console.log('\n\n***********************************************');

//4
const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
];

_.filter = function (list, cb) {
  const storage = [];

  _.each(list, function (item, i, list) {
    if (cb(item, i, list)) storage.push(item);
  });
};

console.log('4\n');
const suspects = _.filter(videoData, function (suspectObj) {
  console.log(suspectObj.present);
});
console.log('\n\n***********************************************');

//5
console.log('5\n');
 _.map(videoData, suspect => {
  console.log(suspect.name);
});
console.log('\n\n***********************************************');

//6
const add = function(a, b) {
 b = b || 2;
 // b = b && 2; // if b exists, then the value is 2
 console.log(arguments); // logs [3]
 return a + b;
};
console.log('6\n');
add(3);

/** Extra notes */
const constructArr = function () {
  // turns arguments object into an array
  const arr = Array.prototype.slice.call(arguments);
  //ES6
  // const arr = Array.from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};

console.log(constructArr('was', 'it', 'in'));
console.log('\n\n***********************************************');

//7
_.from = (arr) => {
  // ES6 uses the ES5 method
  return Array.prototype.slice.call(arr);
};

//8

/* var increment = function(n){ return n + 1; };

var square = function(n){ return n*n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);

const increment = n => { return n + 1; };
const square = n => { return n * n; };
const doMathSoIDontHaveTo = (n, func) => { return func(n); }; */

//9
var reduce = function (list, cb, initial) {
  // loop throug the list
  let memo = initial;

  for (let index = 0; index < list.length; index++) {
    if (index === 0 && memo === undefined) {
      memo = list[0];
    } else {
      memo = cb(list[index], memo);
    }
  }
  return memo;
};

console.log('9\n');
console.log(reduce([2, 3, 5], (v, sum) => v + sum));
console.log('\n\n***********************************************');

//10
const newDevelopment = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { 'dining room': true },
      { 'billiard room': false },
      { library: true },
    ],
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': true },
      { library: false },
    ],
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { 'dining room': false },
      { 'billiard room': true },
      { library: false },
    ],
  },
];

const notInRoom = suspect => {
  const emptyRooms = reduce(suspect.rooms, (room, memo) => {
    if (room === false)memo.push(room);
    return memo;
  });
  return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom);
console.log('10\n');
console.log(notInRooms);

// implement _.intersection to notInRooms


//11
_.curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    }
  }
}

var abc = function(a, b) {
  return [a, b];
}
var curried = _.curry(abc);
// --> [1,2]

_.compose = (fn, fn2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn(result);
  }
} 
