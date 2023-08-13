// -------------------------------------------------------------------------------------------------------

// ---------------------------------------- IMP MATH PROPERTIES ----------------------------------------

Math.PI // gives the pi value
3.141592653589793

Math.abs(-10) // return the positive value
10

Math.sqrt(81) // returns the square root of 81
9

Math.round(3.456) // round up the integer (if its greater than 0.5 then its round up otherwise not!)
3

// ceiling & floor method
Math.floor(3.5); // gives downer value
3
Math.ceil(3.5); // gives +1 value
4

// Random Number Method : lies between 0 to 1(1 not included) : no arguments needed
Math.random()
0.09545586375930837
Math.random()
0.5869520470907041
Math.random()
0.8877254041945621

// Generating Number Between 1 To 10

// this shows how we get the number
Math.random() * 10
2.6747554861349454
Math.random() * 10
4.728202796023131
Math.random() * 100
93.83548262046855
Math.random() * 100
68.48932683493878

//using floor method to get only integer : gives on 0 to 9
Math.floor(Math.random() * 10)
1
Math.floor(Math.random() * 10)
9
Math.floor(Math.random() * 10)
6
Math.floor(Math.random() * 10)
0


// Exactly between 0 to 10
// then multiply by 11 because you need 11 numbers 0 to 10

Math.floor(Math.random() *11)
8
Math.floor(Math.random() *11)
8
Math.floor(Math.random() *11)
2
Math.floor(Math.random() *11)
10


// random numbers between 22 to 25
// Steps : numbers to find is 4 then multiply with 4 + starting number is 22 then add 22.
Math.floor(Math.random() *4+22)
25
Math.floor(Math.random() *4+22)
24
Math.floor(Math.random() *4+22)
22
Math.floor(Math.random() *4+22)
22

// -------------------------------------------------------------------------------------------------------