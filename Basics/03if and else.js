x=10;
/*The condition written in the if is satisfied then the control
gets inside the if block and after its execution the control comes
 out of these loops.
*/
if(x==10)
{
    console.log("The value of x is 10");
}


// The control or execution goes to the else block when the condition in if block
//is not satisfied.
y=20
if(y==19)
{
    console.log("The value of y is 19");
}
else{
    console.log("The value of y is 20");
}

/*If there are multiple conditions then we use the below if-else tree
Here the control goes to the block which satisfies the condition and if there
is no satisfied condition it executes the else block.
*/

z=100
if(z>0 && z<9)
{
    console.log("Single digit number");
}
else if(z>=10 && z<=99)
{
    console.log("double digt number");
}
else{
    console.log("More than two digit number!");
}