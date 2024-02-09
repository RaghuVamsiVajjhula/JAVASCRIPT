// One of the most important aspects of JavaScript is the ability 
// to manipulate strings, which are sequence of characters.

// A string in JS is sequence of characters enclosed in single or double quotes.
// Example:   "Hello World"  'Hello World'

// There are number of built in methods to manipulate strings in JS:
// Some of the most commonly used methods are:

//length
var str="Hello World";
console.log("The length of the string is:",str.length);

//concat
var str1="Hello";
var str2="World";
console.log("After concatenation:",str1.concat(str2));

//indexof
var string="HelloWorld";
console.log("The index of character W is:",string.indexOf('W'));

//slice
var string="Hello World";
console.log("The slicing of string:",string.slice(6));

//replace
var string="Hello World";
console.log("the replacing of some characters:",string.replace('W','Z'));

//to uppercase and to lowercase

var string="Hello World";
console.log("Uppercase:",string.toUpperCase());
console.log("Lowercase:",string.toLowerCase());