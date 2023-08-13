// Ques.3. Given P,R and T calculate Simple Interest.

const principal = parseInt(prompt("Enter the principal:"));
const rate = parseInt(prompt("Enter the rate of interest:"));
const time = parseInt(prompt("Enter the time: "));

const simpleInterest = (principal * rate * time) / 100;

console.log("Simple Interest:", simpleInterest);
