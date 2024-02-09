// Boolean allows JavaScript to work with true/false values in your script.
// It can also perform logical operations like and,or and not.

var isTrue=Boolean(1);
console.log(isTrue);
// Returns true as it is 1
var isFalse=Boolean(0);
console.log(isFalse);
// Returns false as it is 0

var x=true;
var y=false;

console.log("Checking logical AND and OR:");
console.log(x&&y); //returns false
console.log(x||y); //returns true

// ! operator
console.log("using the not operator:");
console.log(!x);
console.log(!y);

// valueof() function:
// It returns primitive value of a boolean fucntion.
console.log("using the valueof function:");
var b=new Boolean(true);
console.log(b.valueOf());

console.log("Another example for valueof function:");
var n=new Number(10);
console.log(n.valueOf());