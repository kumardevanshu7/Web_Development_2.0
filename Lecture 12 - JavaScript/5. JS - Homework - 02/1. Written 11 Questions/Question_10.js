// Ques.10. You are given a String = "This fox jumps over a white lazy dog"
//                                   "dog lazy white a over jumps fox This"

let string = "This fox jumps over a white lazy dog";

let newStr = string.split(" ");
//output : ['This', 'fox', 'jumps', 'over', 'a', 'white', 'lazy', 'dog']

let newStr_01 = newStr.reverse();
//output : ['dog', 'lazy', 'white', 'a', 'over', 'jumps', 'fox', 'This']

let finalSentence = newStr_01.join(" ");
// output : 'dog lazy white a over jumps fox This'

console.log(finalSentence); // final output
