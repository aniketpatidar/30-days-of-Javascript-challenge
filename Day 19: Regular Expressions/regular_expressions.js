// Day 19: Regular Expressions

// Tasks/Activities:

// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const text1 = "JavaScript is a versatile language. Many developers love JavaScript because of its flexibility.";
const pattern1 = /JavaScript/g;
const matches1 = text1.match(pattern1);
console.log(matches1);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
// note: please use the variable name which is not taken. and variable should not be not like text1, text2
const text2 = "The number 12345 is a prime number.";
const pattern2 = /\d/g;
const matches2 = text2.match(pattern2);
console.log(matches2);

// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text3 = "The quick brown fox Jumps over the Lazy Dog.";
const pattern3 = /\b[A-Z]\w*/g;
const matches3 = text3.match(pattern3);
console.log(matches3);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "The number 12345 is a prime number.";
const pattern4 = /\d+/g;
const matches4 = text4.match(pattern4);
console.log(matches4);

// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const text5 = "(123) 456-7890";
const pattern5 = /\((\d{3})\) (\d{3})-(\d{4})/;
const matches5 = text5.match(pattern5);
console.log(matches5);

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const text6 = "aniketpatidar01@gmail.com";
const pattern6 = /(\w+)@(\w+\.\w+)/;
const matches6 = text6.match(pattern6);
console.log(matches6);

// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text7 = "JavaScript is a versatile language. Many developers love JavaScript because of its flexibility.";
const pattern7 = /\bJavaScript/g;
const matches7 = text7.match(pattern7);
console.log(matches7);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text8 = "JavaScript is a versatile language. Many developers love JavaScript because of its flexibility.";
const pattern8 = /JavaScript\b/g;
const matches8 = text8.match(pattern8);
console.log(matches8);

// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "Password123!";
const pattern9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
const isValidPassword = pattern9.test(password);
console.log(isValidPassword);

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const url = "https://www.example.com";
const pattern10 = /^https?:\/\/(www\.)?[\w-]+\.[a-z]+$/;
const isValidURL = pattern10.test(url);
console.log(isValidURL);

// Feature Request:
// 1. Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.
// 2. Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.
// 3. Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.
// 4. Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
// 5. Validation Script: Write a script that uses regular expressions to validate passwords and URLS and log whether they are valid.
