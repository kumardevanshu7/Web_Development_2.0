// 9.You are given two numbers n and m. find the sum of all numbers in this range(n and m including).

let n = 7;
let m = 3;
// 3+4+5+6+7 = 25

// n will be smallest every time
if (n > m) {
  let temp = n;
  n = m;
  m = temp;
}

let sum = 0;
for (let i = n; i <= m; i++) {
  sum = sum + i;
}
console.log(sum);
