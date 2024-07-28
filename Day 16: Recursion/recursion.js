// Day 16: Recursion

// Tasks/Activities:

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(7)); // Output: 5040

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n === 0 || n ===1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3])); // Output: 6
console.log(sumArray([4, 5, 6])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let max = maxArray(arr.slice(1));
  return arr[0] > max ? arr[0] : max;
}

console.log(maxArray([2, 3, 5, 6, 1, 0])); // Output: 6

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // Output: olleh

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.substr(1, str.length - 2));
}

console.log(isPalindrome("racecar")); // Output: true

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  }
  const first = arr[0] === target ? 1 : 0;
  return first + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 4, 3, 5, 3], 3)); // Output: 3

// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).
