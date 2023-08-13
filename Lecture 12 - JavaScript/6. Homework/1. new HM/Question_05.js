// Ques.5. You are given a number n. You have to check whether the number is palindrome

// using two pointer approach

let boy = "arra";
let i = 0;
let j = boy.length - 1;
let isPalindrome = true;

while (i < j) {
  if (boy[i] != boy[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

if (isPalindrome) {
  console.log(`${boy} is a palindrome.`);
} else {
  console.log(`${boy} is not a palindrome.`);
}
