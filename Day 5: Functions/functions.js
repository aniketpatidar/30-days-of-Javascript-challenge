// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('The number is even');
  } else {
    console.log('The number is odd');
  }
}
isEvenOrOdd(5); // Output: The number is odd

// Task 2: Write a function to calculate the square of a number and return the result.
function squareOfNumber(number) {
  return number * number;
}
squareOfNumber(5); // Output: 25

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function findMaxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(findMaxOfTwoNumbers(5, 10)); // Output: 10

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
  return str1 + str2;
}
concatenateStrings('Hello', 'World'); // Output: HelloWorld

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumOfTwoNumbers = (num1, num2) => num1 + num2;
sumOfTwoNumbers(5, 10); // Output: 15

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
containsCharacter('Hello', 'e'); // Output: true

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function productOfTwoNumbers(num1, num2 = 1) {
  return num1 * num2;
}
productOfTwoNumbers(5); // Output: 5

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetPerson(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}
greetPerson('Aniket'); // Output: Hello, Alice! You are 18 years old.

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function callFunctionNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}
callFunctionNTimes(() => console.log('Hello'), 3); // Output: Hello Hello Hello

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(value, func1, func2) {
  return func2(func1(value));
}
const double = (num) => num * 2;
const square = (num) => num * num;
applyFunctions(5, double, square); // Output: 100

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
