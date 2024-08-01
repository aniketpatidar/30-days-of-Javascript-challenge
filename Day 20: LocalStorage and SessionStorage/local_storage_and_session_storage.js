// Day 20: LocalStorage and SessionStorage

// Tasks/Activities:

// Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem('myString', 'LocalStorage');
const retrievedString = localStorage.getItem('myString');
console.log(retrievedString); // Output: LocalStorage

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = { name: 'Aniket', age: 22 };
localStorage.setItem('myObject', JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject); // Output: { name: 'Aniket', age: 22 }

// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
});
window.addEventListener('load', () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  if (name && email) {
    document.querySelector('#output').textContent = `Name: ${name}, Email: ${email}`;
  }
});

// Task 4: Write a script to remove an item from localStorage. Log the localstorage content before and after removal.
console.log(localStorage.getItem('myString')); // Output: LocalStorage
localStorage.removeItem('myString');
console.log(localStorage.getItem('myString')); // Output: null

// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('myString', 'SessionStorage');
console.log(sessionStorage.getItem('myString')); // Output: SessionStorage

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const person = { name: 'Aniket', age: 22 };
sessionStorage.setItem('person', JSON.stringify(person));
const retrievedPerson = JSON.parse(sessionStorage.getItem('person'));
console.log(retrievedPerson); // Output: { name: 'Aniket', age: 22 }

// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
const anotherForm = document.querySelector('#another-form');
const anotherNameInput = document.querySelector('#another-name');
const anotherEmailInput = document.querySelector('#another-email');
anotherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  sessionStorage.setItem('name', anotherNameInput.value);
  sessionStorage.setItem('email', anotherEmailInput.value);
});

window.addEventListener('load', () => {
  const name = sessionStorage.getItem('name');
  const email = sessionStorage.getItem('email');
  if (name && email) {
    document.querySelector('#another-output').textContent = `Name: ${name}, Email: ${email}`;
  }
});

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage.getItem('myString')); // Output: sessionStorage
sessionStorage.removeItem('myString');
console.log(sessionStorage.getItem('myString')); // Output: null

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}

saveToStorage('name', 'Aniket');
console.log(localStorage.getItem('name')); // Output: Aniket

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}

clearStorage();
console.log(localStorage.getItem('name')); // Output: null
console.log(sessionStorage.getItem('name')); // Output: null

// Feature Request:
// 1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// 2. SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// 3. Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// 4. Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.
