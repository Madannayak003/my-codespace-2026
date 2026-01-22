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
    console.log("Even");
} else {
    console.log("odd")
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



