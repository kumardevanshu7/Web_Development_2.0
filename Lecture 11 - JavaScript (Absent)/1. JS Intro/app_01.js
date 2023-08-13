// try all code in Browser Console - REPL
// R--> Read, E-->Evaluate, P--> Print & L--> Loop

// NUMBER
// Number - includes everything : Float Number, Decimal Number, Minus, Plus, infinity, Etc.

// using 'typeof' - to find the type of a variable
typeof 2;
// 'number'

// infinity & -infinity - its a special value in the number group

// Example : 100/0
typeof infinity;
// 'number'

// Example : -100/0
typeof -infinity;
// 'number'

// NaN - Not A Number : Example : -0/0
typeof NaN;
// 'number'

// when you add NaN in operation then result comes out the NaN
100 / 10 + NaN;
// 'NaN'

// -------------------------------------------------------------------------------------------------------

// there is term called PEMDAS
// P--> parenthesis, E--> Exponents, M--> Multiply, D--> Division, A--> Addition & S--> Substract

// -------------------------------------------------------------------------------------------------------

// STRINGS
// String means text or collection of characters

typeof "Zanu";
// 'string'

// in javascript there is not a Character
typeof "A";
// 'string'

// it is a Empty String
typeof "";
// 'string'

// convert a String into Number
parseInt("12345");
// 12345

typeof parseInt("12345");
// 'number'

// it will extract the number and remove the alphabets : starting has a number
typeof parseInt("12345devanshulovezanu");
// 'number'

// it will not extract the number because : number is in middle
typeof parseInt("devanshulove3000zanu");
// 'NaN'

parseInt("7.17");
// 7

// want to full extract then use parsefloat
parseFloat("7.17");
// 7.17

// -------------------------------------------------------------------------------------------------------

// 2. VARIABLES

// in JS version ES6 - let and const were introduce

// 1st keyword is 'let' : CAN change after initialization
let lovezanu = 99;

// 2nd keyword is 'const' : CANNOT change after initialization
const myzanu = 89;

// 3rd keyword is 'var' : older way to declare a variable & can be change after initializing
const zanuji = 17;

// -------------------------------------------------------------------------------------------------------

// 3. BOOLEAN

// Contains only two values : True or False

let iszanulovesMe = true;

typeof iszanulovesMe;
// boolean

// -------------------------------------------------------------------------------------------------------

// 3. NULL

// when we explicitly defined a variable as a NULL & tell this value should be empty. 

// -------------------------------------------------------------------------------------------------------

// 4. UNDEFINED

let x;
// undefined - a special place holder which js input here

// -------------------------------------------------------------------------------------------------------
