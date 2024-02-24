function sayHello()
{
    console.log("Hello world");
}
sayHello();

// The above code is just to declare and call a function.

function add(num1,num2) //we call it as Arguments
{
    console.log(num1+num2);
}

add(10,5)      //We call it as parameters.
add(10,1)

// so now on using the above code instead of returning th value of num1+num2 we can face a problem that the sum of 2 numbers value is printed inside the function.. okay.. but if we want to use the value outside the fucntion we cannot use it.So it is a good practice to return the value for a fucntion so that it can be used even outside the function.

function multiply(num1,num2)
{
    return num1*num2;
}
let place=multiply(2,3);
console.log("Multiplication of 2 numbers is :",place);

// Now we want to create a function which will take many number of arguments like the number of arguments it takes is not known before.

// Refer arguments.js for that solution.
