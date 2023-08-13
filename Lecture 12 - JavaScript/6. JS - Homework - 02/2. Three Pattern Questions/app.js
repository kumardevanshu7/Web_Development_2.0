// 1st Pattern : Like
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

let row = 5;
for (let i = row; i >= 1; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += " *";
  }
  console.log(stars);
}

// Showing Errors after this

// 2nd Pattern : Like
//          *
//        * * *
//      * * * * *
//    * * * * * * *
//  * * * * * * * * *

let newrow = 10;
for (let i = 1; i <= newrow; i += 2) {
  let spaces = " ".repeat(row - i + 1);
  let stars = "* ".repeat(i);
  console.log(spaces + stars);
}

// 3rd - Number Pattern
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5

let newRow = 5;
for (let i = 1; i <= newRow; i++) {
  let numbers = "";
  for (let j = 1; j <= i; j++) {
    numbers += j;
  }

  console.log(numbers);
}
