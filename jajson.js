// JSON Data
// JSON data consists of key/value pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon :. For example,

// JSON data
"name": "John"

// JSON Object
// The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,

// JSON object
{ "name": "John", "age": 22 }

// JSON array
[ "apple", "mango", "banana"]

// JSON array containing objects
[
    { "name": "John", "age": 22 },
    { "name": "Peter", "age": 20 }.
    { "name": "Mark", "age": 23 }
]

// Accessing JSON Data
// You can access JSON data using the dot notation. For example,
// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML


/*
JSON	
The key in key/value pair should be in double quotes.
JSON cannot contain functions.
JSON can be created and used by other programming languages.

JavaScript Object
The key in key/value pair can be without double quotes.
JavaScript objects can contain functions.
JavaScript objects can only be used in JavaScript.
*/


// Remember to treat dates