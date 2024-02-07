// The functions are block of codes which can be executed whenever 
// it is needed.They can be implemented by calling a function in the 
// code execution.
function add(a,b)
{
    return a+b;
}
console.log("Addition of 2 variables are:" ,add(10,20));
// We can also call a function and store its value or output under a variable.
var value=add(99,1);
console.log("by using the add function we get:"+value);

// JAVA script functions also have the arrow function.Here:

var square=(x) => { return x*x};
// The arrow function is a special type of function which uses shorter syntax.
// We use arrowfunction when you want to create a small, one-line function 
// that doesn't require a separate function keyword.


// A function can also be declared under other functions.it is known as nesting.
// used for creating smaller,reusable blocks of code that can be reused inside a function.

function outerfunction(x)
{
    function innerfunction()
    {
        // Code
    }
    // Remaining codes
}