// task 1

// const input = prompt("Enter a character: ");
// if (!isNaN(input)) {
//   alert("The input is a number.");
// } else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
//   alert("The input is an uppercase letter.");
// } else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
//   alert("The input is a lowercase letter.");
// } else {
//   alert("The input is neither a number nor a letter.");
// }

// task 2

// var integer1 = parseInt(prompt("enter an integer number"))
// var integer2 = parseInt(prompt("enter another integer number"))
// if (integer1 > integer2) {
//     alert(integer1 + " is greater than " + integer2)
// } else if (integer1 < integer2) {
//     alert(integer1 + " is less than " + integer2)
// } else {
//     alert(integer1 + " is equal to " + integer2)
// }

// task 3

// const num = parseFloat(prompt("Enter a number: "));
// if (num > 0) {
//   alert("The number is positive.");
// } else if (num < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }

// task 4

// const char = prompt("Enter a character: ");

// if (char.length !== 1) {
//   alert("Please enter a single character.");
// } else {
//   const vowels = 'aeiouAEIOU';
//   if (vowels.includes(char)) {
//     alert("The character is a vowel.");
//   } else {
//     alert("The character is not a vowel.");
//   }
// }

// task 5

// const correctPassword = "12345678";
// const userInput = +prompt("Enter your password: ");
// if (userInput === "") {
//   alert("Please enter your password");
// } else if (userInput === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

// // task 6  

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   alert(greeting = "Good day";)
// } else {
//   alert(greeting = "Good evening");
// }

// task 7

const timeInput = prompt("Enter time in 24-hour format (HHMM): ");
const hours = parseInt(timeInput.substring(0, 2));
const minutes = parseInt(timeInput.substring(2, 4));

let hour12;
let ampm;

if (hours === 0) {
  hour12 = 12;
  ampm = "AM";
} else if (hours < 12) {
  hour12 = hours;
  ampm = "AM";
} else if (hours === 12) {
  hour12 = hours;
  ampm = "PM";
} else {
  hour12 = hours - 12;
  ampm = "PM";
}

alert(`${hour12}:${minutes.toString().padStart(2, "0")} ${ampm}`);