// Tasks/Activities:

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

let promise2 = new Promise((reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});

promise2.catch((error) => {
  console.log(error.message);
});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function asyncFunction() {
  let result = await promise;
  console.log(result);
}
// asyncFunction();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function asyncFunction2() {
  try {
    let result = await promise2;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
// asyncFunction2();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3 resolved after 3 seconds");
  }, 3000);
});

let promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 4 resolved after 4 seconds");
  }, 4000);
});

let promise5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 5 resolved after 5 seconds");
  }, 5000);
});

Promise.all([promise3, promise4, promise5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise3, promise4, promise5])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.
