/* 

The JavaScript switch statement is used in decision making.

The switch statement evaluates an expression and executes the corresponding body that matches the expression's result.

The syntax of the switch statement is:
*/

switch (variable / expression) {
  case value1:
    // body of case 1
    break;

  case value2:
    // body of case 2
    break;

  case valueN:
    // body of case N
    break;

  default:
  // body of default
}

/* 

The switch statement evaluates a variable/expression inside parentheses ().

If the result of the expression is equal to value1, its body is executed.
If the result of the expression is equal to value2, its body is executed.
This process goes on. If there is no matching case, the default body executes.
Notes:

The break statement is optional. If the break statement is encountered, the switch statement ends.
If the break statement is not used, the cases after the matching case are also executed.
The default clause is also optional.

*/

// program using switch statement
let a = 2;

switch (a) {
  case "1":
    a = 1;
    break;
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;

  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);

// program for a simple calculator
let result;

// take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take the operand input
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}

// multiple case switch program
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "mango":
  case "pineapple":
    console.log(`${fruit} is a fruit.`);
    break;
  default:
    console.log(`${fruit} is not a fruit.`);
    break;
}
