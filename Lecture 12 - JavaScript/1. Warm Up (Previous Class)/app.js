const num1 = 25.893;
const num2 = 25.896;

// 25.874, 26.874
// 25.986, 25.987

const firstNum = num1 * 1000;
const secondNum = num2 * 1000;
// string method

// const integerPart1 = parseInt(num1.toString());
// const integerPart2 = parseInt(num2.toString());

// check if integer is equal

if (parseInt(firstNum) - parseInt(secondNum) === 0) {
  console.log("Numbers are equal");
} else {
  console.log("Not Equal");
}
