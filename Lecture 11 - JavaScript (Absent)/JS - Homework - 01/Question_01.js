// Ques.1. Write a js program to get a number from the user and print whether it is positive or negative.

let a = prompt("Enter 1st Number: ");

if (a < 0) {
  console.log("This Number is a Negative Number.");
} else if (a > 0) {
  console.log("This Number is a Positive Number.");
} else {
  console.warn("ERROR!");
}
