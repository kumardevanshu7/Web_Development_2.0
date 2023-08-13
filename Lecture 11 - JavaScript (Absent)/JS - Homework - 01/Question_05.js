// Ques.5. Write a JS program that reads two floating-point numbers and tests whether they are the same up
//         to three decimal places.
//     Test Data
//     Input floating-point number: 25.586
//     Input floating-point another number: 25.589
//     Expected Output :
//     They are different

let num1 = 25.586;
let num2 = 25.589;

// removing decimals
let newNum1 = num1 * 1000;
let newNum2 = num2 * 1000;

// converting into strings
let str01 = newNum1.toString();
let str02 = newNum2.toString();

// now checking
isEqual = true;
for (let i = 0; i < str01.length; i++) {
  if (str01[i] !== str02[i]) {
    isEqual = false;
  }
}

if (isEqual) {
  console.log("They are Same");
} else {
  console.log("They are Different");
}
