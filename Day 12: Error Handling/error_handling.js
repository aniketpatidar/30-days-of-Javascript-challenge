// Day 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function threeSum(arr) {
  if (!Array.isArray(arr) || arr.length < 3) {
    throw new Error('Input should be an array with at least 3 elements');
  }
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum;
}

try {
  const result = threeSum([1, 2]);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return numerator / denominator;
}

try {
  const result = divideNumbers(10, 0);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  console.log('Try block: Start');
  throw new Error('Error occurred');
} catch (error) {
  console.error('Catch block:', error.message);
}
finally {
  console.log('Finally block: Executed regardless of errors');
}

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('Custom error occurred');
}
catch (error) {
  if (error instanceof CustomError) {
    console.error('Custom Error:', error.message);
  } else {
    console.error('Error:', error.message);
  }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new CustomError('Invalid input: Please provide a non-empty string');
  }
  return input;
}

try {
  const userInput = '';
  const validatedInput = validateInput(userInput);
  console.log('Validated input:', validatedInput);
} catch (error) {
  console.error('Error:', error.message);
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
  const randomNum = Math.random();
  if (randomNum >= 0.5) {
    resolve('Success: Promise resolved');
  } else {
    reject('Error: Promise rejected');
  }
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handlePromise() {
  try {
    const message = await randomPromise;
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

handlePromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch('https://jsonplaceholder.typicode.com/posts/invalid-url')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error: Failed to fetch data');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/invalid-url')
    if (!response.ok) {
      throw new Error('Error: Failed to fetch data');
    }
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
