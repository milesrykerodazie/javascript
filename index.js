// console.log("ksdjfgfgfölddlkjdölhdör");

// var name = "Miles";

// console.log(name);

// jdfjfdjcjcmvcmcmcmcmcmcmcmvc
// jdfjfdjcjcmvcmcmcmcmcmcmcmvc
// jdfjfdjcjcmvcmcmcmcmcmcmcmvc
// jdfjfdjcjcmvcmcmcmcmcmcmcmvc

// let food;

// console.log("food before assigning a varialbe => ", food);

// food = "yam";

// console.log("show food after giving a variable => ", food);

// const jfjfjf = "hdhdhdh";
// const hfdhfhfhf = 3;

// console.log(jfjfjf + " " + hfdhfhfhf);

// const my_name = "Miles";
// const course = "Javascript";

// const my_sentence = `My name is ${my_name}, and my course is ${course}`;

// console.log();

// let username;

// username = window.prompt("What is your name.");

// console.log("My name is , ", username);

// document.getElementById("myButton").onclick = function () {
//   username = document.getElementById("myText").value;
//   console.log(username);
//   document.getElementById("myH2").textContent = `Hello ${username}`;
// };

// const a = 3;
// const b = 4;
// const c = 5;

// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk
// iewiidkidkidkdkdkdkdkdkdkdkdkdk

// let sum = 0;
// let number = 0;

// do {
//   sum += number;
//   number = parseInt(prompt("Enter a number: "));
// } while (number >= 0);

// console.log(`The sum is ${sum}.`);

// let result;

// const operator = prompt("Enter operator (+, -, * or /): ");
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// switch (operator) {
//   case "+":
//   case "-":
//   case "*":
//   case "/":
//     result = eval(`${number1} ${operator} ${number2}`);
//     console.log(`${number1} ${operator} ${number2} = ${result}`);
//     break;
//   default:
//     console.log("Invalid operator");
//     break;
// }

// Fetch data from JSONPlaceholder API
// async function fetchPosts() {
//   try {
//     // Fetching data from the API
//     // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const response = await fetch("https://fakestoreapi.com/products");

//     // Check if the response is successful (status code 200)
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data. Status: ${response.status}`);
//     }

//     // Parse the response body as JSON
//     const posts = await response.json();

//     // Logging the first few posts for demonstration
//     console.log("Fetched posts:", posts.slice(0, 5));

//     return posts;
//   } catch (error) {
//     console.error("Error fetching posts:", error.message);
//     throw error; // Re-throw the error if needed
//   }
// }

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value.");
//   } else {
//     reject("There is no count value");
//   }
// });

// console.log(countValue);

//operations
// const score = 5;
// console.log("the type of score => ", typeof score);
// const percentage = 10;

// const multiply = score + percentage;

// console.log("the multiply => ", multiply);

//algorithm and data structure

// lets write a program that calculates the percentage of the score
// if the score is greater than 100, the program should print the message
// if the score is less than 100, the program should print the message
// if the score is equal to 100, the program should print the message

const score2 = 50;
const persentage = 10;

const thePERCENT = (10 / 100) * 50;

//Data structure
const dataObj = {
  name: "Miles",
  course: "Javascript",
  score: 50,
  percentage: 10,
  thePERCENT: 50,
};

const nameObj = dataObj;
console.log("the plain object course => ", nameObj);

//the array
const Array1 = [1, 2, 3, 4, 5, 6];

const i1 = Array1[0];

//working with push and pop

console.log("the original array => ", Array1);

const newitem3 = Array1.pop();
console.log("the original array popped => ", Array1);
const newArray = Array1.push(7);
console.log("the new array => ", newArray);
console.log("the original array updated => ", Array1);
const newArray2 = Array1.push(9);
console.log("the new array => ", newArray2);
console.log("the original array updated again => ", Array1);

// console.log("getting the first item in the array => ", Array1[5]);

// console.log("the array1 => ", Array1);
// console.log("the array1 length => ", Array1.length);

//check if emilys course is English Literature

const studentArray = [
  { name: "John", age: 20, gender: "Male", course: "Computer Science" },
  { name: "Alice", age: 22, gender: "Female", course: "Mathematics" },
  { name: "Bob", age: 21, gender: "Male", course: "Physics" },
  { name: "Emma", age: 19, gender: "Female", course: "Chemistry" },
  { name: "David", age: 23, gender: "Male", course: "Biology" },
  { name: "Sophia", age: 20, gender: "Female", course: "Engineering" },
  { name: "James", age: 24, gender: "Male", course: "History" },
  { name: "Emily", age: 21, gender: "Female", course: "English Literature" },
  { name: "Daniel", age: 22, gender: "Male", course: "Psychology" },
  { name: "Grace", age: 20, gender: "Female", course: "Sociology" },
  { name: "Ryan", age: 23, gender: "Male", course: "Political Science" },
  { name: "Ava", age: 22, gender: "Female", course: "Philosophy" },
  {
    name: "William",
    age: 21,
    gender: "Male",
    course: "Business Administration",
  },
  { name: "Ella", age: 20, gender: "Female", course: "Marketing" },
  { name: "Mason", age: 24, gender: "Male", course: "Finance" },
  { name: "Lily", age: 21, gender: "Female", course: "Art History" },
  { name: "Logan", age: 22, gender: "Male", course: "Environmental Science" },
  { name: "Chloe", age: 20, gender: "Female", course: "Nursing" },
  { name: "Ethan", age: 23, gender: "Male", course: "Mechanical Engineering" },
  { name: "Isabella", age: 22, gender: "Female", course: "Physics" },
];

// finding bobs age
const bobsAGE = studentArray;
// console.log("the bos data => ", bobsAGE);
// const studentArraySliced = studentArray.slice(0, 6);
// console.log("student sliced => ", studentArraySliced);

//filter with gender age name
const stage = studentArray.filter((student) => student.age === 50);
// console.log("stdent ages => ", stage);

const stname = studentArray.filter((student) => student.course === "Physics");
//assignment:filter the female students and map the filterd students and show only the name and course
const stgnd = studentArray.filter((student) => student.gender === "Male");

// console.log("student name => ", stname);
// console.log("student gender => ", stgnd);

//map
const mappedStdnts = stgnd.map((student) => {
  return { name: student.name, course: student.course };
});
console.log("mappedStdnts => ", mappedStdnts);

// mapped female students
const mappedFemale = studentArray
  .filter((student) => student.gender === "Female")
  .map((student) => {
    return {
      name: student.name,
      course: student.course,
    };
  });

// console.log("Mapped female students => " + mappedFemale);

// console.log("the mapped student data => ", mappedStdnts);

//conditional statements and flow
if (mappedStdnts[0].course === "Computer Science") {
  // do something
  // console.log("the name is coreect yes");
} else {
  // do anotherthing
  console.log("the name is wrong no");
}

if (mappedStdnts.length > 30) {
  console.log("the mapped student is ok");
} else if (mappedStdnts[3].course === "History") {
  console.log("yes its true");
} else {
  console.log("nothing worked");
}

const johnage = studentArray[0].age;
const aliceage = studentArray[1].age;

const check = johnage + aliceage > 100;
console.log("the check value is " + !check);
if (check) {
  console.log("yes");
} else {
  console.log("no");
}

//get the sum of all the students
//get the sum of all male students
//get the sum of all female students
