// a.Write a function that doubles every number in an array.

function double(arr) {
    return arr.map(num => num * 2);
}

// b.Write a function that Filters out even numbers from an array
function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// c. Write a function that Calculates the sum of all numbers
function sumNumbers(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// d. Write a function that Calculate the average of all numbers
function average(arr) {
    return arr.length === 0 ? 0 : sumNumbers(arr) / arr.length;
}

// e. A function that find the largest number in the array
function findMax(arr) {
    return Math.max(...arr);
}

// f. A function that find the smallest number in the array
function findMin(arr) {
    return Math.min(...arr);
}

// g. A function that removes duplicate values from the array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// h.A function that  Find the index of a given value  in an array(or -1 if not found).
function findIndex(arr, value) {
    return arr.indexOf(value);
}


const arr = [2, 4, 6, 8, 10, 2, 6, 15, 21,];

console.log("Doubled Array:", double(arr));
console.log("Filtered Odd Numbers:", filterEven(arr)); 
console.log("Sum of Numbers:", sumNumbers(arr)); 
console.log("Average of Numbers:", average(arr)); 
console.log("Maximum Number:", findMax(arr)); 
console.log("Minimum Number:", findMin(arr)); 
console.log("Array without Duplicates:", removeDuplicates(arr)); 
console.log("Index of 15:", findIndex(arr, 15)); 
console.log("Index of 50:", findIndex(arr, 50)); 
