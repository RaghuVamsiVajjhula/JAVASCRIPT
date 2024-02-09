// The number object is a built-in objects that provide a number of
// properties and methods for working with numeric values.

// Number()
console.log(Number("3.14"));
console.log(Number(true));

// parseInt() and parseFloat()
// methods to convert strings to integers and floating-point numbers.

console.log(parseInt("3"));
console.log(parseFloat("3.14"));

//used to access the maximum and minimum values that can be represented by a number
// Max_Value and Min_Value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// number have positive and negative infinity in them
console.log(1/0);
console.log(-1/0);

// tofixed() 
// Here we have fixed number 2 which prints only the 2 positions inside the decimal.

console.log((3.14159265).toFixed(2));