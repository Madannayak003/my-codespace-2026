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