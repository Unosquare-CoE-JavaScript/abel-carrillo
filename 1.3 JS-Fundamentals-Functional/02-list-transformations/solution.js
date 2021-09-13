// 1
const game = {
  weapons: [
    { type: 'Fork', room: 'Kitchen' },
    { type: 'Chain', room: 'Garage' },
    { type: 'Pencil', room: 'Library' },
  ],
};

game.weapons.map((obj, i) => {
  console.log(obj, i);
});
console.log('\n\n***********************************************');

//2
const gameTwo = {
  suspects: [
    { name: 'Rusty', color: 'Orange' },
    { name: 'Miss Scarlett', color: 'Red' },
  ],
};

const guiltyLoop = (gameObj) => {
  gameObj.suspects.map(obj => {
    obj.name === 'Rusty'
      ? console.log('found guilty!', obj)
      : console.log('try again!');
  });
};

guiltyLoop(gameTwo);
console.log('\n\n***********************************************');

//3
const suspects = [
  { name: 'Rusty', color: 'Orange' },
  { name: 'Miss Scarlett', color: 'Red' },
];

const [firstColor, secondColor] = [suspects[0].color, suspects[1].color];
// const [{color: firstColor}, {color: secondColor}] = suspects;

console.log(firstColor, secondColor);
