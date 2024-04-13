// combining logical and operator

//remember to use it in if statements

const a = true,
  b = false;
const c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b); // false

console.log(c > 2 && c < 2); // false

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

console.log("original array => ", studentArray);
console.log(studentArray.length);

// Copying and Cloning
const shallowCopyArray = [...studentArray];
shallowCopyArray[1].name = "ModifiedJohn";
console.log("Original Array Unchanged after Shallow Copy:", studentArray);

const deepCopyArray = JSON.parse(JSON.stringify(studentArray));
deepCopyArray[0].name = "DeepCopyJohn";
console.log("Original Array Unchanged after Deep Copy:", studentArray);

const femaleStudents = studentArray.filter(
  (student) => student.gender === "Female"
);
console.log("Female Students:", femaleStudents);

const sortedByAge = studentArray.sort((a, b) => a.age - b.age);
console.log("Sorted by Age (Ascending):", sortedByAge);

const firstFiveStudents = sortedByAge.slice(0, 5);
console.log("First Five Students:", firstFiveStudents);

const studentNames = studentArray.map((student) => student.name);
console.log("Student Names:", studentNames);

// const studentArray = [
//     { name: 'John', age: 20, gender: 'Male', course: 'Computer Science' },
//     { name: 'Alice', age: 22, gender: 'Female', course: 'Mathematics' },
//     { name: 'Bob', age: 21, gender: 'Male', course: 'Physics' },
//     { name: 'Emma', age: 19, gender: 'Female', course: 'Chemistry' },
//     // ... (rest of the students)
//   ];

// Accessing Elements
const firstStudent = studentArray[0];
console.log("First Student:", firstStudent);

// Adding Elements
studentArray.push({
  name: "NewStudent",
  age: 25,
  gender: "Male",
  course: "History",
});
console.log("Array after Push:", studentArray);

// Removing Elements
const removedStudent = studentArray.pop();
console.log("Removed Student:", removedStudent);

// Iterating Through Elements
console.log("Iterating through elements with for...of:");
for (const student of studentArray) {
  console.log(student.name);
}

// Functional Programming Methods
const namesArray = studentArray.map((student) => student.name);
console.log("Array of Names:", namesArray);

//   const femaleStudents = studentArray.filter(student => student.gender === 'Female');
//   console.log("Female Students:", femaleStudents);

// Sorting
//   const sortedByAge = [...studentArray].sort((a, b) => a.age - b.age);
//   console.log("Sorted by Age (Original Array Unchanged):", sortedByAge);

// Searching
const indexOfBob = studentArray.findIndex((student) => student.name === "Bob");
console.log("Index of Bob:", indexOfBob);

// Converting to String
const arrayString = studentArray.map((student) => student.name).join(", ");
console.log("Array as String:", arrayString);
