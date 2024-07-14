// Day 2: Operators

// Activity 1: Arithmetic Operations

// Task 1 - Write a program to add two numbers and log the result to the console.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Task 2 - Write a program to subtract two numbers and log the result to the console.
let num3 = 30;
let num4 = 10;
let difference = num3 - num4;
console.log(`The difference between ${num3} and ${num4} is ${difference}`);

// Task 3 - Write a program to multiply two numbers and log the result to the console.
let num5 = 5;
let num6 = 10;
let product = num5 * num6;
console.log(`The product of ${num5} and ${num6} is ${product}`);

// Task 4 - Write a program to divide two numbers and log the result to the console.
let num7 = 20;
let num8 = 5;
let quotient = num7 / num8;
console.log(`The quotient of ${num7} and ${num8} is ${quotient}`);

// Task 5 - Write a program to find the remainder when one number is divided by another and log the result to the console.
let num9 = 10;
let num10 = 3;
let remainder = num9 % num10;
console.log(`The remainder of ${num9} divided by ${num10} is ${remainder}`);

// Activity 2: Comparison Operators

// Task 6 - Use the += operator to add a number to a variable and log the result to the console.
let num11 = 10;
num11 += 5;
console.log(`The value of num11 is ${num11}`);

// Task 7 - Use the -= operator to subtract a number from a variable and log the result to the console.
let num12 = 20;
num12 -= 5;
console.log(`The value of num12 is ${num12}`);

// Activity 3: Comparison Operators

// Task 8 - Write a program to compare two numbers using > and < and log the result to the console.
let num13 = 10;
let num14 = 20;
console.log(`${num13} > ${num14} is ${num13 > num14}`);
console.log(`${num13} < ${num14} is ${num13 < num14}`);

// Task 9 - Write a program to compare two numbers using >= and <= and log the result to the console.
let num15 = 10;
let num16 = 15;
let num17 = 10;
console.log(`${num15} >= ${num16} is ${num15 >= num16}`);
console.log(`${num15} <= ${num16} is ${num15 <= num16}`);
console.log(`${num15} <= ${num17} is ${num15 <= num17}`);

// Task 10 - Write a program to compare two numbers using == and === and log the result to the console.
let num18 = 10;
let num19 = '10';
console.log(`${num18} == ${num19} is ${num18 == num19}`);
console.log(`${num18} === ${num19} is ${num18 === num19}`);

// Activity 4: Logical Operators

// Task 11 - Write a program that uses the && operator to combine two conditions and log the result to the console.
let num20 = 10;
let num21 = 20;
console.log(`(num20 > 5) && (num21 > 10) is ${(num20 > 5) && (num21 > 10)}`);

// Task 12 - Write a program that uses the || operator to combine two conditions and log the result to the console.
let num22 = 10;
let num23 = 20;
console.log(`(num22 > 5) || (num23 > 10) is ${(num22 > 5) || (num23 > 10)}`);

// Task 13 - Write a program that uses the ! operator to negate a condition and log the result to the console.
let num24 = 10;
let num25 = 20;
console.log(`!(num24 > num25) is ${!(num24 > num25)}`);

// Activity 5: Ternary Operator

// Task 14 - Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num26 = 10;
let result = num26 > 0 ? 'Positive' : 'Negative';
console.log(`The number ${num26} is ${result}`);

// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
const number1 = 10;
const number2 = 5;
const operations = ['addition', 'subtraction', 'multiplication', 'division', 'remainder'];
operations.forEach(operation => {
  let result;
  switch (operation) {
      case 'addition':
          result = number1 + number2;
          break;
      case 'subtraction':
          result = number1 - number2;
          break;
      case 'multiplication':
          result = number1 * number2;
          break;
      case 'division':
          result = number1 / number2;
          break;
      case 'remainder':
          result = number1 % number2;
          break;
  }
  console.log(`The ${operation} of ${number1} and ${number2} is ${result}`);
});

// 2.Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
const number3 = 10;
const number4 = 5;
const comparisons = ['>', '<', '>=', '<=', '==', '!='];
comparisons.forEach(comparison => {
  let result;
  switch (comparison) {
      case '>':
          result = number3 > number4;
          break;
      case '<':
          result = number3 < number4;
          break;
      case '>=':
          result = number3 >= number4;
          break;
      case '<=':
          result = number3 <= number4;
          break;
      case '==':
          result = number3 == number4;
          break;
      case '!=':
          result = number3 != number4;
          break;
  }
  console.log(`${number3} ${comparison} ${number4} is ${result}`);
});

// 3 Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let number = -10;
let ternaryResult = number > 0 ? 'Positive' : 'Negative';
console.log(`The number ${number} is ${ternaryResult}`);
