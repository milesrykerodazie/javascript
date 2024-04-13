/* 

A function is a block of code that performs a specific task.

Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:

a function to draw the circle
a function to color the circle
Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

JavaScript also has a huge number of inbuilt functions. For example, Math.sqrt() is a function to calculate the square root of a number.
*/

function nameOfFunction() {
  // function body
}

/*A function is declared using the function keyword.
The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.
The body of function is written within {}. */

// declaring a function named greet()
function greet() {
  console.log("Hello there");
}

/* Calling a Function
In the above program, we have declared a function named greet(). To use that function, we need to call it.

Here's how you can call the above greet() function. */

// function call
greet();

// program to print a text
// declaring a function
function greet() {
  console.log("Hello there!");
}

// calling the function
greet();

// Example 2: Function with Parameters
// program to print the text
// declaring a function
function greet(name) {
  console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

// program to add two numbers using a function
// declaring a function
function add(a, b) {
  console.log(a + b);
}

// calling functions
add(3, 4);
add(2, 9);

// program to add two numbers
// declaring a function
function add(a, b) {
  return a + b;
}

// using arrow function
const add = (a, b) => {
  return a + b;
};
// or with implicit return for single expressions
// const add = (a, b) => a + b;
console.log(add(3, 4));

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1, number2);

// display the result
console.log("The sum is " + result);

// program to find the square of a number
// function is declared inside the variable
let x = function (num) {
  return num * num;
};
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);

// native function
function greet(name, greeting) {
  greeting = greeting || "Hello";
  console.log(`${greeting}, ${name}!`);
}

//   using es6
const greet = (name, greeting = "Hello") => {
  console.log(`${greeting}, ${name}!`);
};

//   show what object destructuring is
const person = {
  name2: "Miles",
  age: 3,
  height: "2ft 1inch",
  hair: "black",
};

// destructuring
let { age, hair, height, name2 } = person;

/* JavaScript Variable Scope
Scope refers to the availability of variables and functions in certain parts of the code.

In JavaScript, a variable has two types of scope:

Global Scope
Local Scope

*/

// A variable declared at the top of a program or outside of a function is considered a global scope variable.
// program to print a text
let a = "hello";

function greet() {
  console.log(a);
}

greet(); // hello

// program to show the change in global variable
let a = "hello";

function greet() {
  a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3

// In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable.
function greet() {
  a = "hello";
}

greet();

console.log(a); // hello

// Local Scope
// A variable can also have a local scope, i.e it can only be accessed within a function.

// program showing local scope of a variable
let a = "hello";

function greet() {
  let b = "World";
  console.log(a + b);
}

greet();
console.log(a + b); // error

// program showing block-scoped concept
// global variable
let a = "Hello";

function greet() {
  // local variable
  let b = "World";

  console.log(a + " " + b);

  if (b == "World") {
    // block-scoped variable
    let c = "hello";

    console.log(a + " " + b + " " + c);
  }

  // variable c cannot be accessed here
  console.log(a + " " + b + " " + c);
}

greet();

// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example,
// using test before declaring
console.log(test); // undefined
var test;

// using test before declaring
var test;
console.log(test); // undefined

// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// For example,

// program to display value
a = 5;
console.log(a);
var a; // 5

// If a variable is used with the let keyword, that variable is not hoisted. For example,
// program to display value
a = 5;
console.log(a);
let a; // error

//A function can be called before declaring it. For example,

// program to print the text
greet();

function greet() {
  console.log("Hi, there.");
}

// However, when a function is used as a
//an error occurs because only declarations are hoisted. For example;
// program to print the text
greet();

let greet = function () {
  console.log("Hi, there.");
};

////

function sum(x, y = 5) {
  // take sum
  // the value of y is 5 if not passed
  console.log(x + y);
}

sum(5); // 10
sum(5, 15); // 20
// In the above example, if you don't pass the parameter for y, it will take 5 by default.

// class work

// This function

// function expression
let x = function (x, y) {
  return x * y;
};
// can be written as

// using arrow functions
let x = (x, y) => x * y;
// using an arrow function.

// The syntax of the arrow function is:

let myFunction = (arg1, arg2, ...argN) => {
  statement(s);
};

let sum = (a, b) => {
  let result = a + b;
  return result;
};

let result1 = sum(5, 7);
console.log(result1); // 12

// spread operators dont forget

//switch function
// Function to get the day of the week
function getDayOfWeek(dayNumber) {
  let day;

  switch (dayNumber) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
    default:
      day = "Invalid day number";
      break;
  }

  return day;
}

// Example usage
const dayNumber = 3; // Change this value to test different cases
const dayOfWeek = getDayOfWeek(dayNumber);

console.log(`The day corresponding to ${dayNumber} is ${dayOfWeek}`);

// To create a promise object, we use the Promise() constructor.

let promise = new Promise(function (resolve, reject) {
  //do something
});

/*
The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.

*/

const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);

/* The then() method is used with the callback when the promise is successfully fulfilled or resolved.

The syntax of then() method is: */

// Example 2: Chaining the Promise with then()

// returns a promise

let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
  .then((result) => {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });

// JavaScript Promise Methods => catch(), finally(),resolve(), reject(), then()

/*In JavaScript, the try...catch statement is used to handle exceptions (errors) that may occur during the execution of a block of code. The basic syntax is as follows:

javascript
Copy code */

try {
  // code that might throw an exception
} catch (error) {
  // code to handle the exception
} finally {
  // optional code that will be executed regardless of whether an exception was thrown or not
}
/*Here's a breakdown of each section:

try block: This is where you place the code that might throw an exception. If an exception occurs within this block, the control is transferred to the catch block.

catch block: If an exception occurs in the try block, the control is transferred to the catch block, where you can handle the exception. The error parameter in the catch block is a reference to the exception object, and you can use it to gather information about the error.

finally block (optional): This block contains code that will be executed regardless of whether an exception was thrown or not. It's often used for cleanup operations or actions that must be performed regardless of the outcome.

Here's a simple example:

javascript
Copy code */

try {
  // code that might throw an exception
  let result = someFunction();
  console.log(result);
} catch (error) {
  // code to handle the exception
  console.error("An error occurred:", error.message);
} finally {
  // optional cleanup code
  console.log("This code always runs");
}

/*In this example, if someFunction throws an exception, the control will be transferred to the catch block where the error will be logged. The finally block will execute regardless of whether an exception occurred or not.*/

/////////async await basic set up
// Assume this is a function that makes an API request and returns a promise
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { message: 3 };
      if (typeof data.message === string) resolve(data);
      // In a real scenario, you might handle errors and reject the promise if needed
    }, 9000);
  });
}

// Asynchronous function using async/await
async function fetchData() {
  try {
    console.log("Fetching data...");
    const result = await fetchDataFromAPI();
    console.log("Data received:", result.message);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error if needed
  }
}

// Calling the asynchronous function
fetchData()
  .then((result) => {
    console.log("Async function completed successfully:", result);
  })
  .catch((error) => {
    console.error("Async function encountered an error:", error);
  });

//looking at the reject promise
let simulateError = false;

// Assume this is a function that makes an API request and returns a promise
function fetchDataFromAPI(simulateError) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      if (simulateError) {
        reject(new Error("Failed to fetch data from API"));
      } else {
        const data = { message: "Hello, Async/Await!" };
        resolve(data);
      }
    }, 1000);
  });
}

// Asynchronous function using async/await
async function fetchData() {
  try {
    console.log("Fetching data...");

    // Simulate an error by setting simulateError to true
    const result = await fetchDataFromAPI(/* simulateError = */ true);

    console.log("Data received:", result.message);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw the error if needed
  }
}

// Fetch data from JSONPlaceholder API
async function fetchPosts() {
  try {
    // Fetching data from the API
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await fetch("https://fakestoreapi.com/products");

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const totalPrice = productsArray.reduce(
      (sum, product) => sum + product.price,
      0
    );

    // Parse the response body as JSON
    const posts = await response.json();

    // Logging the first few posts for demonstration
    console.log("Fetched posts:", posts.slice(0, 5));

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error; // Re-throw the error if needed
  }
}

// Calling the asynchronous function
fetchPosts()
  .then((posts) => {
    console.log(
      "Async function completed successfully:",
      posts.length,
      "posts fetched."
    );
  })
  .catch((error) => {
    console.error("Async function encountered an error:", error);
  });

//more examples
const fetch = require("node-fetch"); // You may need to install this using 'npm install node-fetch'

// Example 1: Sequential Requests
async function sequentialRequests() {
  try {
    const response1 = await fetch("https://fakestoreapi.com/products/1");
    const product1 = await response1.json();

    const response2 = await fetch("https://fakestoreapi.com/products/2");
    const product2 = await response2.json();

    console.log(product1, product2);
  } catch (error) {
    console.error("Error in sequentialRequests:", error);
  }
}

// Example 2: Parallel Requests
async function parallelRequests() {
  try {
    const [product1, product2] = await Promise.all([
      fetch("https://fakestoreapi.com/products/1").then((response) =>
        response.json()
      ),
      fetch("https://fakestoreapi.com/products/2").then((response) =>
        response.json()
      ),
    ]);

    console.log(product1, product2);
  } catch (error) {
    console.error("Error in parallelRequests:", error);
  }
}

//objects
const person = {
  name: "Miles",
  age: 2,
  course: "Javascript",
};

//destr
const { name, age, course } = person;

console.log(person.name);

// Example 3: Chaining Async Operations
async function chainAsyncOperations() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    const firstProductId = products[0].id;
    const productDetails = await fetch(
      `https://fakestoreapi.com/products/${firstProductId}`
    );
    const product = await productDetails.json();

    console.log(products, product);
  } catch (error) {
    console.error("Error in chainAsyncOperations:", error);
  }
}

// Example 4: Error Handling with Async/Await
async function errorHandling() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/error"); // Endpoint that simulates an error
    const product = await response.json();

    console.log(product);
  } catch (error) {
    console.error("Error in errorHandling:", error.message);
  }
}

// Example 5: Async Function within an Async Function
async function nestedAsyncFunctions() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    async function getProductDetails(id) {
      const detailsResponse = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      return detailsResponse.json();
    }

    const firstProductDetails = await getProductDetails(products[0].id);
    const secondProductDetails = await getProductDetails(products[1].id);

    console.log(firstProductDetails, secondProductDetails);
  } catch (error) {
    console.error("Error in nestedAsyncFunctions:", error);
  }
}

// Call the examples
sequentialRequests();
parallelRequests();
chainAsyncOperations();
errorHandling();
nestedAsyncFunctions();
