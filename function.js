/*
console.log('goodbye mica');
console.log('aloha ella');
console.log('au revoir luke');
nameOne = process.argv[2];
nameTwo = process.argv[3];
nameThree = process.argv[4];*/
//name = process.argv[2];

function greet(name){
  console.log('goodbye' + ' ' + name);
}

/*greet('mica');
greet('ella');
greet('luke');
greet('cam');
greet('hayden');*/


/*function randomWord(words) {
  console.log('we have '+words.length+ ' words');
  var index = Math.floor(Math.random() * words.length);
  console.log('random index is '+index);
  var word = words[index];
  console.log('random word is '+word);

}

randomWord(['dog','cat','bird']);*/

function crazy(a,b){
  return a+b;
}

console.log(crazy(1,3));

greet(crazy(6,7));















function randomPet(pets){
  var index = Math.floor(Math.random() * pets.length);
  var pet = pets[index];
  return pet;
}

pet1 = randomPet(['lizard', 'frog', 'pig']);
pet2 = randomPet(['lizard', 'frog', 'pig']);

console.log('I have two pets '+pet1+' and '+pet2);
