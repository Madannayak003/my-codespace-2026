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