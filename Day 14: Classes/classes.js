// Day 14: Classes

// Tasks/Activities:

class Person {
  // Activity 1: Class Definition
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Task 2: Add a method to the Person class that updates the age property and logs the updated age.
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to ${this.age}`);
  }

  // Activity 3: Static Methods and Properties

  // Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
  static genericGreeting() {
    return 'Hello, welcome to our community!';
  }

  // Activity 4: Getters and Setters

  // Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
  get username() {
    return `${this.name}${this.age}`;
  }

  // Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
  set username(userName) {
    const [name, age] = userName.split(' ');
    this.name = name;
    this.age = age;
  }
}

let person = new Person("Piyush", 22);
console.log(person.greeting());

person.updateAge(23);

console.log(Person.genericGreeting()); // Output: Hello, welcome to our community!

console.log(person.username);

person.username = "Rahul 45";
console.log(person.username);

class Student extends Person {
  // Activity 2: Class Inheritance

  // Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID. Create an instance of the Student class and log the student ID.
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
  }

  // Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  // Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
  static studentCount = 0;
}

let student = new Student("Pushpa", 20, "12345");
console.log(student.studentId);

console.log(student.greeting());

let student2 = new Student("Ravi", 22, "67890");
console.log(student2.studentId);
console.log(student2.greeting());

console.log(`Total number of students: ${Student.studentCount}`); // Output: Total number of students: 2

// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Invalid withdraw amount.');
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const myAccount = new Account(1000);

myAccount.deposit(500); // Deposited: 500. New balance: 1500
console.log(myAccount.getBalance()); // 1500

myAccount.withdraw(200); // Withdrew: 200. New balance: 1300
console.log(myAccount.getBalance()); // 1300

myAccount.withdraw(1500); // Invalid withdraw amount.
console.log(myAccount.getBalance()); // 1300

// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
