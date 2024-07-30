// Day 18: Algorithms

// Tasks/Activities:

// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(arr));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Selection Sort:", selectionSort(arr1));

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr2 = [64, 34, 25, 12, 22, 11, 90];
let target = 22;
console.log("Linear Search:", linearSearch(arr2, target));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr3 = [11, 12, 22, 25, 34, 64, 90];
let target1 = 22;
console.log("Binary Search:", binarySearch(arr3, target1));

// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharacters(str) {
  let charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}

let str = "hello";
console.log("Character Counts:", countCharacters(str));

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstring(str) {
  let charMap = {};
  let start = 0;
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap[char] >= start) {
      start = charMap[char] + 1;
    }
    charMap[char] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

let str1 = "abcabcbb";
console.log("Longest Substring Length:", longestSubstring(str1));

// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = arr[i];
  }
  return result;
}

let arr4 = [1, 2, 3, 4, 5];
let k = 2;
console.log("Rotated Array:", rotateArray(arr4, k));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result.concat(arr1.slice(i), arr2.slice(j));
}

let arr5 = [1, 3, 5];
let arr6 = [2, 4, 6];
console.log("Merged Array:", mergeArrays(arr5, arr6));

// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// Feature Request:
// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
// 2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
// 5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).
