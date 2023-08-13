// -------------------------------------------- Comparisons Operators ------------------------------------
// > < == === >= <= != !===

// Difference Between == & ===
// 5==5
// true
// 5=='5' // first do Typecasting and then Comparison
// true
// 5==='5' // No Typecasting just check the Data-type first then do Comparison
// false

// -------------------------------------------------------------------------------------------------------

let a = 10;
let b = 20;

// ----------------------------> using only 'if' statement
if (a > b) {
  console.log("a is Greater.");
}
// output: a is Greater.

if (a < b) {
  console.log("b is Greater.");
}
// output: b is Greater.

// ----------------------------> using 'if-else' statement
if (a < b && "6" == 6) {
  console.log("Hello Zanu");
} else {
  console.warn("SORRY");
}
// output: Hello Zanu.

// ----------------------------> using 'else-if' statement, prompt() & alert()

// how to take input from user  -- use 'prompt()'

const age = parseInt(prompt("Enter your age: "));

if (age < 18) {
  // if you want to show this in a browser box -- use 'alert()'
  alert("YOU CANNOT ENTER!");
} else if (age >= 18 && age < 25) {
  alert("YOU CAN ENTER BUT DONOT DRINK!");
} else {
  alert("YOU CAN ENTER AND DRINK!");
}

// -------------------------------------------------------------------------------------------------------