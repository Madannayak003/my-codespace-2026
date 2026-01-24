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