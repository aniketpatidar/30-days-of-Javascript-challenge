// Activity 1: Variable Declaration

// Task 1:
var num = 7;
console.log('num:', num);

// Task 2:
let name = "Thala";
console.log('name:', name);

// Activity 2: Constant Declaration

// Task 3:
const isPlayingCricket = true;
console.log('isPlayingCricket:', isPlayingCricket);

console.log("**********");

// Activity 3: Data Types

// Task 4:
let num2 = 45;
console.log(`Key: num2, Value: ${num2}, Type: ${typeof num2}`);

let name2 = "Rohit";
console.log(`Key: name2, Value: ${name2}, Type: ${typeof name2}`);

let isPlayingFootball = false;
console.log(`Key: isPlayingFootball, Value: ${isPlayingFootball}, Type: ${typeof isPlayingFootball}`);

let arr = [1, 2, 3, 4, 5];
console.log(`Key: arr, Value: ${arr}, Type: ${typeof arr}`);

let obj = { name: "Virat", age: 18 };
console.log(`Key: obj, Value: ${obj}, Type: ${typeof obj}`);

console.log("**********");

// Activity 4: Reassigning Variables

// Task 5:
let num3 = 10;
console.log('initial value of num3:', num3);
num3 = 20;
console.log('value of num3 after reassigning:', num3);
console.log("**********");

// Activity 5: Understanding const

// Task 6:
const num4 = 10;
console.log('initial value of num4:', num4);
console.log("TypeError: Assignment to constant variable.");
// num4 = 20; // this will throw an error 'TypeError: Assignment to constant variable.
console.log("**********");

// Feature Request:

// Variable Types Console Log:
const dataTypes = {
  myNumber: 42,
  myString: "Hello, world!",
  myBoolean: true,
  myNull: null,
  myUndefined: undefined,
  myArray: [1, 2, 3],
  myFunction: function() { console.log("This is a function"); }
};

for (const key in dataTypes) {
  const value = dataTypes[key];
  console.log(`Key: ${key}, Value: ${value}, Type: ${typeof value}`);
}
console.log("**********");

// Reassignment Demo:
console.log("Demonstration of 'let'");
let userStatus = "active";
console.log("Before reassignment:", userStatus); // Output: active

userStatus = "inactive";
console.log("After reassignment:", userStatus); // Output: inactive

console.log("**********");

console.log("Demonstration of 'const'");
// 'const' - does not allow reassignment
const initialConfiguration = "default settings";
console.log("Initial value:", initialConfiguration); // Output: default settings

try {
  initialConfiguration = "custom settings"; // This line will throw an error
} catch (error) {
  console.log("Error on reassignment:", error.message); // Output: TypeError: Assignment to constant variable.
}

console.log("**********");
