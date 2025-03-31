//a.Write a function that capitalizes the first letter of a string.

function capitalise(str){
    if(!str) return"";
    return str.charAt(0).toUpperCase()+ str.slice(1);
}
console.log(capitalise("benigne"));

//b.Write a function that reverses a given string.

function reverse(str){
    if(!str) return "";
    return str.split("").reverse().join("");
}
console.log(reverse("Iam Benigne"));

//c.Write a function that checks if a string is a palindrome (reads the same backward as forward).

function isPalindrome(str){
    if(!str) return false;
    return str === reverse(str);
}
console.log(isPalindrome("Iam Benigne"));

//d.Write a function that counts the number of words in a given string

function wordCount(str){
    if(!str) return 0;
    return str.trim().split(" ").length;
}
console.log(wordCount("   Iam Benigne"));

//e.Write a function that converts a string to snake_case.
// In snake_case, all words are lowercase and separated by underscores (_).

function toSnakeCase(str){
    if(!str) return "";
    return str.toLowerCase().replace(/ /g, "_");
}
console.log(toSnakeCase("Benigne how are you"));

//f.Write a function that converts a string to camelCase.
//In camelCase, the first word starts with a lowercase letter, and each subsequent word starts with an uppercase letter, with no spaces or special characters.

function toCamelCase(str){
    if(!str) return "";
    return str.toLowerCase().replace(/ /g, "").split("").map((char, index) =>
        index === 0 ? char : char.toUpperCase()).join("");

}
console.log(toCamelCase("Benigne how are you"))

//g.Write a function that finds the longest word in a given string.

function longestWord(str) {
    let words = str.trim().split(/\s+/);
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(longestWord("Benigne i love you and i miss you so much"));

//h. Write a function that counts the number of times a specific letter appears in a string.

function countLetter(str, letter) {
    if (!str || !letter || letter.length !== 1) {
        throw new Error("Invalid input: Ensure both string and a single letter are provided.");
    }
    
    return str.split("").filter(char => char.toLowerCase() === letter.toLowerCase()).length;
    
}
try {
    console.log(countLetter("Benigne how are you", "e")); // Should return 2
} catch (error) {
    console.error(error.message);
}







