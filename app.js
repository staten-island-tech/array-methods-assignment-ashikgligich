const planes = [
  { name: "fighter", numbers: [4, 15, 16, 18, 22, 35] },
  { name: "bomber", numbers: [1, 2, 18, 24, 25, 26, 29, 52] },
];

console.log(planes[0].numbers);

//const set1 = [planes.forEach((planes) => (planes.numbers))];

planes[0].numbers.forEach((n) => console.log(n));



planes.forEach((plane) => 
  plane.numbers.forEach(
    (n) => console.log(n)  
));
/*



//for (let i = 0; i < planes.length; i++) {
//  console.log(planes.numbers[i].join(' '));
//}


planes.forEach(async (numbers) => {
   console.log(numbers);
  });



//planes.filter((fighter) => fighter.slice(fighter.numbers) => console.log (numbers))

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


*/