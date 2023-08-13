// Ques.4. Write a JS program that takes three numbers from the user and prints the greatest number.

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let greatestNum = num1;

if (num2 > greatestNumber) {
  greatestNum = num2;
}

if (num3 > greatestNumber) {
  greatestNum = num3;
}

console.log("The greatest number is: " + greatestNum);
