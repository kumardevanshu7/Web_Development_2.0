// --------------------------------------------- LOOPS INTRO ------------------------------------------

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// ---------------------------------- For Loop
// for (initilisation; condition; updation){

//     ...your work...
// }

// you can initial here also
// let i;

// ---------------------------------- While Loop
let num = 100;

while (num >= 0) {
  console.log(num);
  num = num - 10;
}

// ---------------------------------- break keyword - it will just come out the loop
for (i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// ---------------------------------- Infinite Loop
for (let num = 100; num < 200; num = num - 10) {
  console.log(num);
}

for (let i = 1; i <= 10; i++) {
  // it will just ignore the 5, rest will be print
  if (i === 5) continue;
  console.log(i);
}

// ---------------------------------- In the Array

const colors = ["blue", "orange", "green", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ---------------------------------- for of - loop
for (let color of colors) {
  console.log(color);
}

// ---------------------------------- for in - loop

for (let prop in car) {
  console.log(`${prop}---> ${car[prop]}`);
}
