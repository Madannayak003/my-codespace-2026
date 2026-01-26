// 1: create & print object.

let person = {
    name: "Madan.R",
    age: 22,
    city: "Bangalore"
};

console.log(person);

// 2: Access Object Values (Dot notation)

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

// 3: Access Object Values (Bracket notation)

console.log("Name:", person["name"]);
console.log("Age:", person["age"]);
console.log("City:", person["city"]);

// 4: upadate object values

person.age = 23;
person["city"] = "Mysore";

// 5: Add New Property

person.country = "India";
person["profession"] = "Developer";

// 6: Delete Property

delete person.age;
delete person["city"];

// 7: Print Updated Object

console.log("Updated Person Object:", person);

// 8: Loop through Object Properties

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 9: Check if Property Exists

console.log("Has age property:", person.hasOwnProperty("age"));
console.log("Has name property:", person.hasOwnProperty("name"));

// 10: Get Object Keys and Values

let keys = Object.keys(person);
let values = Object.values(person);

console.log("Keys:", keys);
console.log("Values:", values);