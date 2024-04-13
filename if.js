/* In computer programming, there may arise situations 
where you have to run a block of code among more than
 one alternatives. For example, assigning grades A, B or C 
 based on marks obtained by a student.

In such situations, you can use the 
JavaScript if...else statement to create a 
program that can make decisions. 
*/

/* 
In JavaScript, there are three forms of the if...else statement.

if statement
if...else statement
if...else if...else statement

*/

// check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
  // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");

if (condition) {
  // block of code if condition is true
} else {
  // block of code if condition is false
}

if (condition1) {
  // code block 1
} else if (condition2) {
  // code block 2
} else {
  // code block 3
}

// A ternary operator can be used to replace an if..else statement in certain situations.

condition ? expression1 : expression2;

/* 

The ternary operator evaluates the test condition.

If the condition is true, expression1 is executed.

If the condition is false, expression2 is executed.

The ternary operator takes three operands, hence,
 the name ternary operator. It is also known as a conditional operator.

*/

// program to check pass or fail

let marks = prompt("Enter your marks :");

// check the condition
k;

// check the age to determine the eligibility to vote
let age = 15;
let result;

if (age >= 18) {
  result = "You are eligible to vote.";
} else {
  result = "You are not eligible to vote yet.";
}

console.log(result);

// ternary operator to check the eligibility to vote
let age = 15;
let result =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);

let x = 10;

let result = x > 0 ? "Positive" : x < 0 ? "Negative" : "Zero";

console.log(result); // Output: "Positive"

// program to check if number is positive, negative or zero
let a = 3;
let result = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
