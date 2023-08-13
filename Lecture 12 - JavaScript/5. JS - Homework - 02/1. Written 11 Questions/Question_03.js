// Ques.3. You are given a number n. Reverse all the digit in a number.
//     e.g.1->  = 54123
//     anss = 32145

//     e.g.2-> 67491
//         ans = 19476

let n = 67491;
let numStr = n.toString();

let strReverse = numStr.split("").reverse().join("");

let reverseStr = parseInt(strReverse);

console.log(reverseStr); // print the reverse order
