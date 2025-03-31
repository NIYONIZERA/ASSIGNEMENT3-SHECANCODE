// a. A function Returns the full name of a person object
function fullName(person) {
    return `My name is ${person.firstName} ${person.lastName}`;
}

// b. A function that checks if a person is 18 or older
function isAdult(person) {
    return person.age >= 18;
}

// c.A function that filters an array of people based on a minimum age
function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

// d. A function that adds a new property to an object
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}

// e. A function that checks if an object has a specific property
function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

// f. A function that returns the number of properties in an object
function countProperties(obj) {
    return Object.keys(obj).length;
}


const person1 = { firstName: "Niyonizera", lastName: "Benigne", age: 25 };
const person2 = { firstName: "Kwizera", lastName: "Boris", age: 17 };
const people = [
    { firstName: "Teta", lastName: "Credot", age: 31 },
    { firstName: "Kamana", lastName: "Willy", age: 22 },
    { firstName: "Higa", lastName: "Owen", age: 15 }
];
const obj = { name: "Laptop", price: 800 };

console.log("Full Name:", fullName(person1));

console.log("Is Adult:", isAdult(person1));

console.log("Is Adult:", isAdult(person2));

console.log("The person who above 18 years old:", filterByAge(people, 18)); 

console.log("Add Property:", addProperty(obj, "category", "Electronics")); 

console.log("Has Property 'price':", hasProperty(obj, "price"));

console.log("Has Property 'brand':", hasProperty(obj, "brand")); 

console.log("The number of Properties:", countProperties(obj)); 
