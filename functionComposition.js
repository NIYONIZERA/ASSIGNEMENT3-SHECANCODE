//a.Compose functions – Use the compose(...fns) function to combine your functions in interesting ways

// Function to compose multiple functions
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

// Function to capitalize the first letter of a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Function to reverse a string
const reverse = (str) => str.split("").reverse().join("");

// Example 1: Compose function to reverse and capitalize a string
const reverseAndCapitalize = compose(capitalize, reverse);

console.log(reverseAndCapitalize("Boris")); 

// Function to double numbers
const double = (num) => num * 2;

// Function to check if a number is even
const isEven = (num) => num % 2 === 0;

//Example2: Function to double only even numbers
const doubleEvenNumbers = (arr) => arr.map(num => (isEven(num) ? double(num) : num));

console.log(doubleEvenNumbers([1, 2, 3, 4, 5, 6]));

//b.Transform an array of objects.

// Function to add "Pass" or "Fail" status based on grades
const addStatus = (students) => students.map(student => ({
    ...student,
    status: student.grade > 50 ? "Pass" : "Fail"
}));

const students = [
    { name: "Muhoza", grade: 75 },
    { name: "Pamella", grade: 40 },
    { name: "Ben", grade: 55 },
];

console.log(addStatus(students));

//c.Sort array of objects

// Function to sort an array of objects by a given key
const sortByKey = (arr, key) => arr.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));

const people = [
    { name: "Keke", age: 25 },
    { name: "Coco", age: 20 },
    { name: "Kaliza", age: 30 }
];

console.log(sortByKey(people, "age"));

//d.Filter by keyword 
// Function to filter products by category
const filterByCategory = (products, category) => products.filter(product => product.category === category);

const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Table", category: "Furniture" },
    { name: "Phone", category: "Electronics" },
    { name: "Sofa", category: "Furniture" }
];

console.log(filterByCategory(products, "Electronics"));

//e. Simple caching function
// Function to create a simple caching mechanism
const cacheFunction = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Fetching from cache:", key);
            return cache.get(key);
        }
        console.log("Computing result for:", key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

// Example function: Compute factorial (expensive computation)
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const cachedFactorial = cacheFunction(factorial);

console.log(cachedFactorial(5)); // Computes result
console.log(cachedFactorial(5)); // Fetches from cache




