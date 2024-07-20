// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let person = {
  name: 'Aniket',
  age: 22
};
console.log(`Name: ${person.name}, Age: ${person.age}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
let str = `This is a
multi-line
string`;
console.log(str);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
  name: 'JavaScript',
  author: 'Aniket'
}
let { name, author } = book;
console.log(`Book: ${name}, Author: ${author}`);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20));
console.log(sum());

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a, b = 1) {
  return a * b;
}
console.log(product(5, 2));
console.log(product(5));

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let obj = {
  greet() {
    console.log('Hello');
  },
  sum(a, b) {
    return a + b;
  },
};
console.log(obj.greet());
console.log(obj.sum(5, 10));

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let key = 'name';
let value = 'Aniket';
let obj2 = {
  [key]: value
};
console.log(obj2);

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
