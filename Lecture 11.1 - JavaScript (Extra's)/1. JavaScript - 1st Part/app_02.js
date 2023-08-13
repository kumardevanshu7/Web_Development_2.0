// STRING METHODS

// String Methods : 1--> Destructive & 2--> Non-Destructive

let msg = "Don't Try To Talk To Me, I Hate You Please";

// various methods use by 'string.method()'

// -----> Non-Destructive Methods

msg.toUpperCase();
// "DON'T TRY TO TALK TO ME, I HATE YOU PLEASE"

msg.toLowerCase();
// "don't try to talk to me, i hate you please"

let str = "              ZANU JI LOVE YOU             ";

// Removes First and Last Spaces Only
str.trim();
// 'ZANU JI LOVE YOU'

// -----> Destructive Methods

// see this later!

// -------------------------------------------------------------------------------------------------------

// --------------------- FUNCTION CHAINING
// use multiple methods at once
str.trim().toLowerCase();
// 'zanu ji love you'

let wife = "ILOVEYOUZANUJI";

// Give Only Starting Number
// wife.substr(8);
// 'ZANUJI'

// Give Starting Number & The Length
// wife.substr(5,5);
// 'YOUZA'

// -------------------------------------------------------------------------------------------------------
