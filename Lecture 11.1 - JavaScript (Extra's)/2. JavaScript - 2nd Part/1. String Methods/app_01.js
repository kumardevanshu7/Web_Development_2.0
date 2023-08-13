// --------------------------------------------- STRING METHODS ----------------------------------------

// -------------------------------------------------------------------------------------------------------

// ----> LENGTH METHOD

let name = "My Love Is Zanu";
// name.length
// 15

// -------------------------------------------------------------------------------------------------------

// ----> CONCATENATION

"my love" + " zanu"
'my love zanu'

// -------------------------------------------------------------------------------------------------------

// ----> SUBSTR (this is now debaricated, not use now - ALternative is SUBSTRING)
// SUBSTRING( )

let str = "Zainab Ji Is Lovely"

// giving only starting value
str.substring(3)
'nab Ji Is Lovely'

// giving starting + ending index and last index were not included
str.substring(4, 13)
'ab Ji Is '


// -------------------------------------------------------------------------------------------------------

// INDEXOF( )
// INDEXOF( , )
// to searching in the string

let my = "my name is khan";

my.indexOf('is')
8

// Senario of the Searching the Same Letter
let hoi = 'hello world'

// searching for 1st l
hoi.indexOf('l')
2

// these examples will clear you doubt

hoi.indexOf('l')
2
hoi.indexOf('l', 3) // just type the previous 'l' letter index, then it will give you 2nd 'l'
3
hoi.indexOf('l', 4) // just type the previous 'l' letter index, then it will give you 3rd 'l'
9

// -------------------------------------------------------------------------------------------------------
// REPLACE( , )
// REPLACEALL( , )

hoi.replace('l', 'x') // replace first 'l'
'hexlo world'

hoi.replaceAll('l', 'x') // replace all 'l'
'hexxo worxd'

// -------------------------------------------------------------------------------------------------------

// REPEAT()

hoi.repeat(2) // repeat 2 times
'hello worldhello world'

hoi.repeat(3) // repeat 3 times
'hello worldhello worldhello world'


// -------------------------------------------------------------------------------------------------------

// after this all codes are written in HTML - Index File - Script Tag

// -------------------------------------------------------------------------------------------------------