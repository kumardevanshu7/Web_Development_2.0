// 2. Write a JS program to solve quadratic equations (use if, else if and else). (ax^2 + bx + c)

let a = prompt("Enter Your 1st Number: ");
let b = prompt("Enter Your 2nd Number: ");
let c = prompt("Enter Your 3rd Number: ");

// calculating discriminant
let dis = b * b - 4 * a * c;

let root1, root2;

if (dis > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  console.log(`Roots are ${root1} and ${root2}`);
} else if (dis == 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`Roots are ${root1} and ${root2}`);
} else {
  let realPart = -b / (2 * a);
  let imaginaryPart = Math.sqrt(-dis) / (2 * a);

  console.log(
    `The roots of quadratic equation are ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`
  );
}
