var names = ['mica','ella','luke',];
names.push('saybug');
var last = names.pop();
console.log(names);
console.log(last);
names.unshift('Sophie');
names.unshift('Sophie 2');
console.log(names);
names.shift();
console.log(names);

function hi(name){
  console.log('hi ' + name);
};

hi('bob');
names.forEach(hi);

var numbers = [40,61,22,83,94,25,16,57,98,93];
console.log(numbers);

var sum = 0;

function add(number){
  sum = sum + number;
};

numbers.forEach(add);

console.log('sum is '+sum);


var product = 1;

function times(number){
  product = product * number;
};

numbers.forEach(times);

console.log('product is ' + product);

var ticTacToe = [
  ['X','O','X'],
  ['O','X','O'],
  ['X','O','X']
];

/*
var row = ticTacToe[1];
row[1] = 'A';
*/

ticTacToe[1][1] = 'B';

console.log(ticTacToe[0]);
console.log(ticTacToe[1]);
console.log(ticTacToe[2]);
