// Arrow Functions:
// 1.Syntax

function sayHello()
{
    console.log("Hello ");
}
sayHello();

// The above code is the general syntax of a function now on using arrow functions the code looks like:

const sayHello=()=>{      //We can use const,var,let for variables.
    console.log("Arrow func Hello");
};

sayHello();


const add=(a,b)=>{
    return a+b;
};
console.log(add(2,4));

//Okay now in the above code we can see that there is no function body like we can see only the return statement so instead of declaring the paranthesis and all we can simply change the code into the following way:

const add1=(a,b)=>a+b;  //This is called Oneliner Functions.
// Here the a+b is written which by default is returned without giving any return keyword.
console.log(add1(10,20));

// 2.'arguments' keyword
// The arguments keyword is not available in arrow functions it returns an error. so if we want to give many arguments then the only solution in arrow function is to use the spread operator.
const addNumbers=(...nums)=>{
    console.log(nums);
};
addNumbers(1,2,3,4,5,6);

// 3.Hoisting
// This says that we have a function. So you have defined the function.Now you called the function after the function definition like below the func definition.So it works. 

// Now in Hosting, Even you call the function above its definition it works.becasue JS first stores all the func definitions before the execution.

sayHey();

function sayHey(){
    console.log("Hey");
}

// In case of Arrow Function hoisting is not available.


//4. This keyword

// First learn concept of this keyword and learn this later.
