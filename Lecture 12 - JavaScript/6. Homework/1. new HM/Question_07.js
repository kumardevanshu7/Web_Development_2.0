// Ques.7. Print all the factors of a given number.

let num = 20;
for(let i = 1; i <= num; i++){
    if(num % i === 0){
        console.log(i);
    }
}