// In Js we have an object called as arguments.Here we can take all the parameters passed inside to the function as the arguments.

function add(){
    console.log(arguments);
}

add(10,20,30,40,50,60);

// We can see the output where all the arguments are arranged in an order.

// Also we can see that the length of the arguments is also given out which means the total number of arguments given inside is counted.
// so now to get printed the each number we can use a for loop.

console.log("After modificatio of the above function:");
function addNumber(){
    let ans=0;
    for(let i=0;i<arguments.length;i++){
        // console.log(arguments[i]);
        ans=ans+arguments[i];
    }
    return ans;
}


// We can see that all the elements are printed on the screen individually.
let result=addNumber(10,20,30,40)
console.log(result)


// WE also have another method in which we can do this:
console.log("Another Another representation:")
// Here the method we use is called by using Spread Operator.

function addNumebers2(...numbers)  //here numbers can also be replaced with some other name its just a name.
{
    let ans=0;
    for(let i=0;i<numbers.length;i++){
        ans=ans+numbers[i];
    }
    return ans;
}

let numvalue=addNumebers2(1,2,3,4,5);
console.log(numvalue)




