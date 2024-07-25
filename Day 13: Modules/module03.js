// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const multiplyTwoNumbers = (a, b) => a * b;
const divideTwoNumbers = (a, b) => a / b;

module.exports = { multiplyTwoNumbers, divideTwoNumbers };
