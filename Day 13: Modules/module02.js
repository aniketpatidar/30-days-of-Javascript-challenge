// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
  name: 'Aniket',
  age: 22,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

module.exports = person;
