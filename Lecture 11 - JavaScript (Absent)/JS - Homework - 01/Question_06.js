// Ques.6. Write a JS program to find the number of days in a month.

let month = parseInt(prompt("Enter the month (1-12):"));

if (month < 1 || month > 12) {
  console.log("Invalid month input. Please enter a value between 1 and 12.");
} else {
  let daysInMonth;

  if (month === 2) {
    daysInMonth = 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysInMonth = 30;
  } else {
    daysInMonth = 31;
  }

  console.log(`The number of days in month ${month} is: ${daysInMonth}`);
}
