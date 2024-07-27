// Day 15: Closures

// Tasks/Activities:

// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer(name) {
  return function() {
    return `${name}`;
  }
}

console.log(outer('Aniket Patidar')()); // Output: Aniket Patidar

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
  let count = 0;
  return {
    increment: function() {
      count++;
    },
    get: function() {
      return count;
    }
  }
}

const count = counter();
count.increment();
count.increment();
console.log(count.get()); // Output: 2

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueID() {
  let id = 0;
  return function() {
    id++;
    return id;
  }
}

const generateID = uniqueID();
console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2
console.log(generateID()); // Output: 3

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(name) {
  return function() {
    return `Hello, ${name}!`;
  }
}

const greet = greetUser('pushpendra');
console.log(greet()); // Output: Hello, pushpendra!

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctions() {
  const functions = [];
  for (let i = 0; i < 5; i++) {
    functions.push(function() {
      console.log(i);
    });
  }
  return functions;
}

const functions = createFunctions();
console.log(functions[1]()); // Output: 1

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function friendsModule() {
  const friends = [];

  return {
    addFriend: function(name) {
      friends.push(name);
    },
    removeFriend: function(name) {
      const index = friends.indexOf(name);
      if (index !== -1) {
        friends.splice(index, 1);
      }
    },
    listFriends: function() {
      return friends;
    }
  };
}

const friends = friendsModule();
friends.addFriend('Pushpendra');
friends.addFriend('Aniket');
friends.addFriend('Piyush');
console.log(friends.listFriends()); // Output: [ 'Pushpendra', 'Aniket', 'Piyush' ]
friends.removeFriend('Aniket');
console.log(friends.listFriends()); // Output: [ 'Pushpendra', 'Piyush' ]

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(6)); // Output: 720

// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
