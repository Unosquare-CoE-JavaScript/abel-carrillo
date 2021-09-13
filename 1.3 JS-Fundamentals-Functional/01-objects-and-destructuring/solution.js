//1
var game = [];

game['weapons'] = [
    { type: 'Fork', room: 'Kitchen' },
    { type: 'Chain', room: 'Garage' },
    { type: 'Pencil', room: 'Library' }
];

game.characters = [];
game.characters[0] = 'Mrs. White';
game.characters[1] = 'Mr. White';

console.log( game, typeof game );
console.log('\n\n***********************************************');

//2
const { weapon, room } = {
    'name': 'Rusty',
    'room': 'Kitchen',
    'weapon': 'Candlestick'
    
};

console.log(weapon, room);
