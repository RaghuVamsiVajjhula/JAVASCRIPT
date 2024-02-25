// High order function is a function which takes a function as an argument is called as an higherorder funtion.


// Here we used this for addition but we only use this method when we have any operation to perofrm which takes more time to execute
function add(a,b,newVar){
    let result=a+b;
    newVar(result);
}

add(2,3,function(val){
    console.log("The sum is :",+val);
})

// We can also use arrow functions here.
// In below code we can see we have passes a callback function.
// The function which we call inside a function is called a callback function.
add(2,3,(val)=> console.log(val));

// A function can also return a function.
// Check that later.
