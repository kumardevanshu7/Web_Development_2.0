// Ques.11. You are given a String = "This fox jumps over a white lazy dog"
//                                   "sihT xof spmuj revo a etihw yzal god"

const sentance = "This fox jumps over a white lazy dog";

const words = sentance.split(" ");
//output :  ['This', 'fox', 'jumps', 'over', 'a', 'white', 'lazy', 'dog']

const res = [];

// this will traverse every word and split it, reverse it, and join it
for (let word of words) {
  const reversedWord = word.split("").reverse().join("");
  res.push(reversedWord); // pushing every word
}

// final output
console.log(res.join(" ")); // join the the all words into sentence
