console.log('hello, world');
console.log('you are big and wide and ready to explore!');
m = 'mica';
h = 'hart';
age = 13
console.log(m,h);


console.log(m,h, 'is', age, 'years old');
console.log(process.argv);

name = process.argv[2];
lastName = process.argv[3];
age = process.argv[4];

console.log(name,lastName, 'is', age);

g = 18;
age = process.argv[4];
yearsLeftOfSchool = g - age;

if (age >= 50) {
  console.log('They are old.');
} else if ( age > 0 && age < 50){
  console.log('They are young.');
} else {
  console.log('They are not born yet.');
};

if (age <= 18 && age > 5) {
  console.log('They are hopfully in gradeschool.');

  if (yearsLeftOfSchool === 1) {
    console.log('They have', yearsLeftOfSchool,'year left of gradeschool.');
  } else {
    console.log('They have', yearsLeftOfSchool,'years left of gradeschool.');
  }
} else {
  console.log('They are probably not in gradeschool.');
}
