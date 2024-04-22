// Primitive Data Types

// Numbers: Integers and Floats (decimals) - JS has only one number type |Positive, negative, whole (integers), and decimal numbers
1;
-99;
0.345345;

// Math Operations - PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction)
// Addition
1 + 1; // 2

// Subtraction
2 - 1; // 1

// Multiplication
2 * 2; // 4

// Division
6 / 3; // 2

// Exponents
2 ** 4; // 16

// Modulo - Remainder operator
8 % 5; // 3

// Strings - Characters surrounded by quotes
("Hello, World!");
("Goodbye, World!");

// Concatenation - Combining strings
"Hello" + "World"; // "HelloWorld"

// Escape Characters - Backslash to escape characters
("Singin' in the rain");

// String Methods
// Length - Property that returns the number of characters in a string
"Hello".length; // 5

// Index - Access individual characters using bracket notation
"Hello"[0]; // "H"

// Upper and Lower Case
"Hello".toUpperCase(); // "HELLO"
"Hello".toLowerCase(); // "hello"

// Trim - Removes white space from beginning and end of string
"   Hello   ".trim(); // "Hello"

// Template Literals - Strings with embedded expressions
`Hello, ${name}`; // "Hello, Colt"

// Null and Undefined - Values that represent the absence of a value
null;
undefined;

// Variables - Named containers for storing data
// Declaring variables with var:
var numberOfFriends = 1;

//Incrementing:
numberOfFriends += 3; //numberOfFriends is now 4

//Making variables with let:
let numberOfFriends = 1;

//Incrementing:
numberOfFriends += 3; //numberOfFriends is now 4

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN!

//Booleans - true or false values
true;
false;
let isHappy = true;

//Naming Conventions
// Use upper camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;
