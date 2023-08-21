// Challenge 3 - Step 1

// Declare a function named addNumbers that takes in two parameters: num1 and num2.
// This function returns the sum of the two numbers.
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Test the addNumbers function with sample inputs and log the results.
console.log("Addition:");
console.log(addNumbers(5, 7)); // Should output: 12
console.log(addNumbers(10, -3)); // Should output: 7
console.log(addNumbers(0, 0)); // Should output: 0

// Create a function named findMax that takes two numbers as parameters and returns the larger number.
// If they're equal, it returns "Both are equal".
function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both are equal";
    }
}

// Test the findMax function with sample inputs and log the results.
console.log("\nFind Max:");
console.log(findMax(10, 5)); // Should output: 10
console.log(findMax(-3, -3)); // Should output: Both are equal
console.log(findMax(7, 12)); // Should output: 12

// Write a function named compute that takes three parameters: num1, num2, and operation.
// Inside this function, declare another function for each arithmetic operation (add, subtract, multiply, divide).
// The operation parameter will decide which inner function to run.
function compute(num1, num2, operation) {
    function add() {
        return num1 + num2;
    }

    function subtract() {
        return num1 - num2;
    }

    function multiply() {
        return num1 * num2;
    }

    function divide() {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by zero";
        }
    }

    switch (operation) {
        case "add":
            return add();
        case "subtract":
            return subtract();
        case "multiply":
            return multiply();
        case "divide":
            return divide();
        default:
            return "Invalid operation";
    }
}

// Test the compute function with sample inputs and log the results.
console.log("\nCompute:");
console.log(compute(10, 5, "add")); // Should output: 15
console.log(compute(10, 5, "subtract")); // Should output: 5
console.log(compute(10, 5, "multiply")); // Should output: 50
console.log(compute(10, 5, "divide")); // Should output: 2
console.log(compute(10, 0, "divide")); // Should output: Cannot divide by zero
console.log(compute(10, 5, "power")); // Should output: Invalid operation


// Arrow Function: Declare an arrow function named squareNumber that takes in one parameter: number.
// This function returns the square of the input number.
const squareNumber = number => number * number;

// Understanding Scopes

// Global Scope: Declare a variable globalVar outside any function and assign a value to it.
const globalVar = 10;

// Inside the squareNumber function, try to log the value of globalVar to understand global scope.
console.log("Global Scope:");
console.log("globalVar inside squareNumber function:", globalVar);

// Local Scope: Inside the squareNumber function, declare a variable localVar and assign a value.
// Outside the function, try to log localVar to understand the concept of local scope and see the error it produces.
console.log("\nLocal Scope:");
const squareResult = squareNumber(5);
console.log("squareResult:", squareResult);
// The following line will produce an error because localVar is defined only inside the squareNumber function.
// console.log("localVar outside squareNumber function:", localVar);


// Using a for loop, print the numbers from 1 to 10 to the console.
console.log("Using a for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using a while loop, print the numbers from 10 to 1 to the console.
console.log("\nUsing a while loop:");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Using a do-while loop, print the numbers from 1 to 10, but only print the numbers that are even.
console.log("\nUsing a do-while loop with conditionals:");
let k = 1;
do {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
} while (k <= 10);

// Create an array of your favorite fruits.
const favoriteFruits = ["apple", "banana", "strawberry", "pineapple", "kiwi"];

// Using any loop of your choice, iterate over the array and print out each fruit name only if its length is greater than 5 characters.
console.log("\nUsing a loop to print favorite fruits with length greater than 5:");
for (const fruit of favoriteFruits) {
    if (fruit.length > 5) {
        console.log(fruit);
    }
}

// Challenge 3 - Bonus steps completed

// Higher Order Function: processArray takes an array and another function as parameters.
// It applies the passed function to each element in the array.
function processArray(arr, func) {
    const result = [];
    for (const element of arr) {
        result.push(func(element));
    }
    return result;
}

// Closures: multiplier takes one number as a parameter and returns another function.
// The returned function takes a number as a parameter and returns the product of the two numbers.
function multiplier(factor) {
    return function (number) {
        return factor * number;
    };
}

// Example usage of processArray with multiplier function
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = processArray(numbers, multiplier(2));

console.log("Processed array using multiplier:");
console.log(doubledNumbers); // Should output: [2, 4, 6, 8, 10]

