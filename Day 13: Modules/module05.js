// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const user = {
  name: 'Aniket',
  age: 22,
};

const sum = (a, b) => a + b;

const CONSTANTS = {
  PI: 3.14159,
  E: 2.71828,
};

module.exports = { user, sum, CONSTANTS };
