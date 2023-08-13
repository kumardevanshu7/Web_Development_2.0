// ------------------------------------------> ARRAYS --------------------------------------->

let arr = [1, 2, 3, 4, 5];

arr.length; // used to find the length of the array
// output : 5

// --------> searching by indexing
arr[3];
// output : 4
arr[4];
// output : 5

// --------> arrays are Hetrogeneous : contains different types of data at once
const randomarr = [
  1,
  2,
  true,
  null,
  undefined,
  ["Apple", "Mango"],
  ["Zanu", "Lovely"],
  -90,
  9.0,
  "Hello",
];

randomarr[5];
// output : ['Apple', 'Mango']

// ------------------------------------------> ARRAYS METHODS --------------------------------------->

// Basic Methods :
// ---> at last positions:
// -----> push() - adding
// -----> pop() - removing

// ---> at first positions:
// -----> shift() - removing
// -----> unshift() - adding

const color = ["pink", "black", "orange"];

color.push("red"); // add multiple arguments
// output : 4
// color = ['pink', 'black', 'orange', 'red']

color.pop();
// output : 'red'
// color = ['pink', 'black', 'orange']

color.shift();
// output : 'pink'
// color = ['black', 'orange']

color.unshift("blue"); // add multiple arguments
// output : 3
// color = ['blue', 'black', 'orange']

// ------------------------------------------> ARRAYS ARE REFERENCE TYPE ----------------------------------->

let colors = ["black", "pink", "green"];

let colorsCopy = colors; // colors array copied in colorsCopy Array
colorsCopy = ["black", "pink", "green"];

colorsCopy.push(1, 2, 3, 4, 5); // pushing numbers in this array

colorsCopy = ["black", "pink", "green", 1, 2, 3, 4, 5]; // colorsCopy array is chnaged now
colors = ["black", "pink", "green", 1, 2, 3, 4, 5]; // also changes reflected in colors

// ------------------------------------------> MORE ARRAYS METHODS ----------------------------------->

// --------------------> slice()
// ----> slice()
// ----> slice(start)
// ----> slice(start, end) "end is not include"

let new_Colors = ["black", "pink", "green", "purple"];

new_Colors.slice();
// output : ['black', 'pink', 'green', 'purple'] --> its a whole new array

// checking if they are same or not
let newArray = new_Colors.slice();
newArray === new_Colors;
false;

// --------------------> splice()
// ----> slice(start, delete three items, insert new values)

new_Colors = ['black', 'pink', 'green', 'purple', 'gold']

new_Colors.splice(1, 3, "zanu")
// output : ['pink', 'green', 'purple']
new_Colors
// output : ['black', 'zanu', 'gold']

// --------------------> split()

// --------------------> join()

// --------------------> concat()

// --------------------> include()

// --------------------> indexof()

// --------------------> reverse()
