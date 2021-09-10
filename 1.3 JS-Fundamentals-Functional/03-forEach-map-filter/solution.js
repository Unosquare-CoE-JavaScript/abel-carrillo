// 1
const _ = {};

_.each = function (list, cb) {
  if (Array.isArray(list)) { //true
    for (let i = 0; i < list.length; i++) {
      // call the callback with a list item
      cb(list[i], i, list);
    }
  } else { // object
    for (let key in list) {
      cb(list[key], key, list);
    }
  }
};

_.each(["sally", "georgie", "porgie"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});
console.log('\n\n***********************************************');

//2
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function(item) {
  return `broken ${item}`;
};
console.log('\n\n***********************************************');

//3
_.map = function(list, cb) {
  var storage = [];

  _.each(list, function(v, i, list) {
    storage.push(cb(v, i, list));
  })
  return storage;
}

_.map([1,2,3], function(val) {
  console.log(val + 1);
});
console.log('\n\n***********************************************');

//4

const videoData = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Mrs. White',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Rusty',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  }
];

_.filter = function(list, cb) {
  const storage = [];

  _.each(list, function(item, i, list) {
    if (cb(item, i, list)) storage.push(item);
  });
};

_.filter(videoData, function(suspectObj) {
   console.log(suspectObj.present);
});

