// Day 13: Modules
const addTwoNumbers = require('./module01');
const personModule = require('./module02');
const { multiplyTwoNumbers, divideTwoNumbers } = require('./module03');
const greet = require('./module04');
const objectModule = require('./module05');
const _ = require('lodash');
const axios = require('axios');

// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
console.log(addTwoNumbers(5, 12)); // Output: 17

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
console.log(personModule.name); // Output: Aniket
console.log(personModule.age); // Output: 22
console.log(personModule.greet()); // Output: Hello, my name is Aniket

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
console.log(multiplyTwoNumbers(5, 3)); // Output: 15
console.log(divideTwoNumbers(10, 2)); // Output: 5

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
console.log(greet('Aniket')); // Output: Hello, Aniket

// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
console.log(objectModule.user.name); // Output: Aniket
console.log(objectModule.user.age); // Output: 22
console.log(objectModule.sum(5, 3)); // Output: 8
console.log(objectModule.CONSTANTS.PI); // Output: 3.14159
console.log(objectModule.CONSTANTS.E); // Output: 2.71828

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const friends = ["John Patidar", "Alice Sharma", "Bob Jain"];
const shuffledFriends = _.shuffle(friends);
console.log(shuffledFriends); // Output: Randomly shuffled array of friends

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const fetchRandomQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const quote = response.data.content;
    console.log(quote);
  } catch (error) {
    console.error(error.message);
  }
}

fetchRandomQuote();

// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// To Do

// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.
// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
