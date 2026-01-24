// 1: Simple Function

function greet(){
    console.log("Hello World!");
}
greet(); // Output: Hello World!

// 2: Function with Parameters

function greetuser(name){
    console.log("Hello", name);
}

greetuser("Madan.R!"); // Output: Hello Madan.R!

// 3: add two Numbers

function add(a, b){
    console.log(a + b);
}

add(5, 10); // Output: 15

// 4: Function with Return Value

function square(num){
    return num * num;   
}

let result = square(4);
console.log(result); // Output: 16

// 5: Even or Odd Function

function isEven(num){
    if ( num % 2 === 0 ){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEven(7)); // Output: Odd
console.log(isEven(10)); // Output: Even

// 6: Function With condition

function checkAge(age){
    if(age >= 18){
        return "Eligible to vote";
    } else {
        return "Not Eligible to vote";
    }
}

console.log(checkAge(20)); // Output: Eligible to vote
console.log(checkAge(16)); // Output: Not Eligible to vote

// 7: sum from 1 to N

function sumToN(n){
    let sum = 0;
    for (let i =1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumToN(5)); // Output: 15
console.log(sumToN(10)); // Output: 55

// 8: Default Parameters

function greet2(name = "Guest"){
    console.log("Hello", name);
}

greet2(); // Output: Hello Guest
greet2("Madan"); // Output: Hello Madan

// 9: Arrow Function

const multiply = (a, b) => {
    return a * b;
}

console.log(multiply(3, 4)); // Output: 12

// 10:  Mini project - calculator

function calculator(a , b, operator){
    if ( operator === "+") return a + b;
    if ( operator === "-") return a - b;
    if ( operator === "*") return a * b;
    if ( operator === "/") return a / b;
    return "Invalid operator";
}

console.log(calculator(10, 5, "+")); // Output: 15  
console.log(calculator(10, 5, "-")); // Output: 5 
console.log(calculator(10, 5, "*")); // Output: 50
console.log(calculator(10, 5, "/")); // Output: 2    

console.log(calculator(10, 5, "%")); // Output: Invalid operator
