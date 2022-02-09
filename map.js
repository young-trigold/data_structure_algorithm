const map = new Map();

map.set(1, 'apple').set(2, 'orange').set(3, 'pear');

console.log(...map);
// -> [ 1, 'apple' ], [ 2, 'orange' ], [ 3, 'pear' ]

console.log(map.size);
// -> 3

map.set(1, 'watermelon');
console.log(...map);