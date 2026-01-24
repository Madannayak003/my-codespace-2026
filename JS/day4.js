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