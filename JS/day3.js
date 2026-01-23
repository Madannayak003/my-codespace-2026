// 1: Print Numbers 1 to 5 (for loop)

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2: Print 1 to 10

for (let i = 1; i <= 10; i++){
    console.log(i);
}

// 3: Print Even Numbers from 1 to 20

for (let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 4: Print Odd Numbers from 1 to 20

for (let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// 5: Sum of Numbers (1–5)

let sum = 0;

for (let i =1; i <=5; i++){
    sum = sum  + i;
}

console.log("sum:",sum);

// 6: Multiplication Table (5)

let num = 8;

for ( let i = 1; i <= 10; i++) {
    console.log(num + "x" + i + "=" + (num * i));
}

// 7: Countdown (while loop)

let i = 5;

while (i >= 1){
    console.log(i);
    i--;
}

// 8: Print Hello 3 Times

let count = 1;

while (count <= 3){
    console.log("HELLO");
    count++;
}

// 9: Sum Using while Loop

let total = 0;
let n = 1;

while (n <= 5){
    total += n;
    n++;
}

console.log("Total:", total);

// 10: Break Loop

for ( let i = 1; i <= 10; i++){
    if (i === 7){
        break;
    }
    console.log(i);
}

// ------------------------------------------------------------------------------------------------------------------------//

// 11: Continue Loop

for ( let i = 1; i <= 10; i++){
    if (i === 5){
        continue;
    }
    console.log(i);
}

// 12: Nested Loop (Multiplication Table 1 to 3)

for ( let i = 1; i <= 3; i++){
    for ( let j = 1; j <= 10; j++){
        console.log(i + "x" + j + "=" + (i * j));
    }
}

// 13: Factorial of a Number (5!)

let number = 5;
let factorial = 1;

for ( let i = 1; i <= number; i++){
    factorial *= i;
}

console.log("Factorial of", number + "is", factorial);

// 14: Print Array Elements

let arr = [10, 20, 30, 40, 50];

for ( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// 15: Sum of Array Elements            

let array = [1, 2, 3, 4, 5];
let arraySum = 0;

for ( let i = 0; i < array.length; i++){
    arraySum += array[i];
}

console.log("Sum of array elements:", arraySum);

// 16: Find Maximum in Array


let numbers = [3, 7, 2, 9, 4];
let max = numbers[0];

for ( let i = 1; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}

console.log("Maximum number is:", max);     


// 17: Reverse a String

let str = "Hello";
let reversedStr = "";

for ( let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
}

console.log("Reversed String:", reversedStr);       

// 18: Print Multiples of 3 (1 to 30)

for ( let i = 1; i <= 30; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

// 19: Print Fibonacci Series (First 10 Terms)

let a = 0, b = 1;
console.log(a);
console.log(b);

for ( let i = 3; i <= 10; i++){
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// 20: Count Digits in a Number

let numToCount = 12345;
let countDigits = 0;
let tempNum = numToCount;

while (tempNum !== 0){
    tempNum = Math.floor(tempNum / 10);
    countDigits++;
}

console.log("Number of digits in", numToCount + "is", countDigits); 

