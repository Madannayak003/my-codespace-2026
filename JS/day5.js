// 1: create and print an Array.
 
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

// 2: Accessing elements by index.

console.log(fruits[0]); // First element
console.log(fruits[1]); // Second element
console.log(fruits[2]); // Third element    

// 3: Array Length.

console.log(fruits.length); // Output: 3

// 4: change Array Value.

fruits[1] = "orange"; // Change "Banana" to "orange"

console.log(fruits); // Output: ["Apple", "orange", "Mango"]

// 5: Loop Through Array (for loop).

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 6: Add Elements to an Array (push method).

fruits.push("Pineapple"); // Add "Pineapple" to the end of the array

console.log(fruits); // Output: ["Apple", "orange", "Mango", "Pineapple"]

// 7: Remove Elements from an Array (pop method).

fruits.pop(); // Remove the last element ("Pineapple")

console.log(fruits); // Output: ["Apple", "orange", "Mango"]

// 8: Add at Start (unshift).

fruits.unshift("Grapes"); // Add "Grapes" at the start of the array

console.log(fruits); // Output: ["Grapes", "Apple", "orange", "Mango"]