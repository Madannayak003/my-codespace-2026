// 1 Check Positive or Negative
let num = 10;

if (num > 0){
    console.log("positive number");
} else {
    console.log("negative number");
}

// 2 Even or Odd

let number = 10;

if (number %  2 === 0){
    console.log("Even number");
} else {
    console.log("odd number")
}

// 3 Voting Eligibility

let age = 22;

if (age >= 18){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligibile to vote")
}

// 4 largest of two number

let a = 5;
let b = 20;

if (a > b){
    console.log("a is greater");
} else {
    console.log("b is greater");    

}

// 5 largest of three number

let x = 10;
let y = 25;
let z = 15;

if (x > y && X > Z) {
    console.log("x is greatest");
} else if (y > x && y > z){
    console.log("y is greatest");
} else {
    console.log("z is greatest");
}

// 6 Check Leap Year

let year = 2026;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// 7 pass or fail

let score = 45;

if (score >= 35){
    console.log("pass");
} else {
    console.log("fail");
}

// 8 Grade Calculation

let marks = 91.5;

if (marks >= 90){
    console.log("Grade A");
} else if (marks >= 80){
    console.log("Grade B");
} else if (marks >= 70){
    console.log("Grade C");
} else if (marks >= 60){
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// 9 check equality

let k = 10;
let l = 10;

if (k === l){
    console.log("Both are Equal");
} else {
    console.log("Not Equal");
}

// Login check

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345"){
    console.log("LOGIN SUCCESSFUL");
} else {
    console.log("LOGIN FAILED");
}