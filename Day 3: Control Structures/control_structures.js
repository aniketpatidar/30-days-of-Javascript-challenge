// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 5;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is the largest number`);
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    console.log(`${num2} is the largest number`);
  }
} else {
  console.log(`${num3} is the largest number`);
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85;
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 75:
    console.log("B");
    break;
  case score >= 50:
    console.log("C");
    break;
  case score >= 33:
    console.log("D");
    break;
  default:
    console.log("F");
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 10;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if- else statements and logs the result.
function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
checkNumber(5); // Output: Positive
checkNumber(-5); // Output: Negative
checkNumber(0); // Output: Zero

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}
checkVotingEligibility(20); // Output: Eligible to vote
checkVotingEligibility(15); // Output: Not eligible to vote

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
function getDayOfWeek(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}
getDayOfWeek(3); // Output: Wednesday
getDayOfWeek(8); // Output: Invalid day

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
function assignGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 75:
      return "B";
    case score >= 50:
      return "C";
    case score >= 33:
      return "D";
    default:
      return "F";
  }
}
assignGrade(85); // Output: A
assignGrade(60); // Output: C
assignGrade(25); // Output: F
assignGrade(33); // Output: D

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap year";
  } else {
    return "Not a leap year";
  }
}
checkLeapYear(2020); // Output: Leap year
checkLeapYear(2021); // Output: Not a leap year
checkLeapYear(2000); // Output: Leap year
checkLeapYear(1900); // Output: Not a leap year
