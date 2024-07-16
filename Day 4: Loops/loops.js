// Day 4: Loops

// Tasks/Activities:

// Activity 1: For Loop

// Task 1: Write a program to print the multiplication table of 5 using a for loop.
let number = 5;
for (i = 1; i >= 10; i++) {
  console.log(`${number} * ${i} = ${number*i}`)
}

// Task 2: Write a program to print numbers from 1 to 10 using a for loop.
for (i = 1; i <= 10; i++) {
  console.log(i)
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let j = 1;
while (j <= 10) {
  sum += j;
  j++;
}

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let l = 1;
do {
  console.log(l);
  l++;
} while (l <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let num = 5;
let factorial = 1;
let m = 1;
do {
  factorial *= m;
  m++;
} while (m <= num);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:
for (let i = 1; i <= 5; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

// Feature Request:

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
function printNumbersFor() {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumbersFor();

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
function multiplicationTable(number) {
  for (i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number*i}`);
  }
}
multiplicationTable(5);

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}
printPattern(5);

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
function calculateSum() {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log(sum);
}

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
function calculateFactorial(number) {
  let factorial = 1;
  let i = 1;
  do {
    factorial *= i;
    i++;
  } while (i <= number);
  console.log(factorial);
}
