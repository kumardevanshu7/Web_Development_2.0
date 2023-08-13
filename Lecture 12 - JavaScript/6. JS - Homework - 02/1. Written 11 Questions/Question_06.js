// Ques.6. You are given a number n . You have to check whether the given number is armstrong number

//     e.g : 371
        
//         27+343+1 =>371 - is a armstrong number


let num = 371;
let temp = num;

// counting
let count = 0;
while (temp !== 0) {
    temp = Math.floor(temp / 10);
    count++;
}

let sum = 0;
temp = num;
while(temp !==0){
    let digit = temp % 10;
    sum = sum + Math.pow(digit, count);
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log("ARMS");
} else {
    console.log("NOT ARMS");
}
