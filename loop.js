/*
flip = 1;
heads = 0
tails = 0
numberOfFlips = process.argv[2]
while (flip <= numberOfFlips){
  r = Math.floor(Math.random() * 2);

  if (r === 0){
    console.log('heads');
    heads = heads + 1;
  } else {
    console.log('tails');
    tails = tails + 1;
  }
flip = flip + 1;
}
*/

//console.log('heads = '+heads);
//console.log('tails = '+tails);
counts = ['', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
rolls = 1;
while (rolls <= 120000){
  d1 = Math.floor(Math.random() * 6) + 1;
  d2 = Math.floor(Math.random() * 6) + 1;

  console.log('You rolled a '+d1+' and a '+d2);

  sum = d1 + d2;

  counts[sum] = counts[sum]+1;

  rolls = rolls + 1;
}

counts = counts.slice(2);

console.log('counts is now', counts);
