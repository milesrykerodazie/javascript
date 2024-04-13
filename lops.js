/* 
JavaScript for loop
In programming, loops are used to repeat a block of code.

For example, if you want to show a message 100 times, 
then you can use a loop. It's just a simple example;
 you can achieve much more with loops.

This tutorial focuses on JavaScript for loop. 
You will learn about the other type of 
loops in the upcoming tutorials.

*/

//he syntax of the for loop is:

for (initialExpression; condition; updateExpression) {
  // for loop body
}

/* 

The initialExpression initializes and/or declares variables and executes only once.
The condition is evaluated.
If the condition is false, the for loop is terminated.
If the condition is true, the block of code inside of the for loop is executed.
The updateExpression updates the value of initialExpression when the condition is true.
The condition is evaluated again. This process continues until the condition is false.

*/

// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
  console.log(`I love JavaScript.`);
}


//Let's break down the code step by step:

//Constant Declaration:


const n = 5;


//It declares a constant variable n and initializes it with the value 5. This variable will be used to determine the number of times a specific text will be displayed.

//For Loop:


for (let i = 1; i <= n; i++) {
//This is a for loop that initializes a variable i to 1, checks whether i is less than or equal to n (which is 5 in this case), and increments i by 1 after each iteration.

//Console Output:

console.log(`I love JavaScript.`);
//Inside the loop, it prints the text "I love JavaScript." to the console.

//Loop Execution:
//The loop runs for n times (in this case, 5 times) because the loop condition is met (i starts at 1, and it will run until i is no longer less than or equal to n).

//It will be displayed 5 times, as specified by the value of n.


// program to display numbers from 1 to 5
const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}


// program to display the sum of natural numbers
let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);


/* JavaScript Infinite for loop
If the test condition in a for loop is always true,
it runs forever (until memory is full). For example, */


// infinite for loop
for(let i = 1; i > 0; i++) {
    // block of code
}


// white loops

while (condition) {
    // code to be executed while the condition is true
}


// A simple while loop to print numbers from 1 to 5
let counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}

// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}



// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);


// do while loop
do {
    // code to be executed
} while (condition);

/* 

The body of the loop is executed at first. 
Then the condition is evaluated.
If the condition evaluates to true, 
the body of the loop inside the do statement is executed again.
The condition is evaluated once again.
If the condition evaluates to true, 
the body of the loop inside the do statement is executed again.
This process continues until the condition evaluates to false. Then the loop stops.
Note: do...while loop is similar to the while loop. 
The only difference is that in do…while loop, the body of loop is executed at least once.

*/


// program to display numbers
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);


// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);


//A for loop is usually used when the number of iterations is known. For example,

// this loop is iterated 5 times
for (let i = 1; i <=5; ++i) {
   // body of loop
}
//And while and do...while loops are usually used when the number of iterations are unknown. For example,

while (condition) {
    // body of loop
}


// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

while(true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if(number < 0) {
        break;
    }

    // add all positive numbers
    sum += number;

}

// display the sum
console.log(`The sum is ${sum}.`);

// Working of JavaScript continue Statement

// In a for loop, continue skips the current iteration and control flow jumps to the updateExpression.

// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}

// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

let sum = 0;
let number = 0;

while (number >= 0) {

    // add all positive numbers
    sum += number;

    // take input from the user
    number = parseInt(prompt('Enter a number: '));

    // continue condition
    if (isNaN(number)) {
        console.log('You entered a string.');
        number = 0; // the value of number is made 0 again
        continue;
    }

}

// display the sum
console.log(`The sum is ${sum}.`);