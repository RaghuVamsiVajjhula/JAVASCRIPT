// in the above 01, 02 use console.error to tell him he cannot drive.

// In the 01 question use confirm to ask if he needs the prompt to run again.
function ask(){
    var age=prompt("Enter your age:");
if(age>=18)
{
    alert("You can drive");
}
else if(age<0)
{
    console.error("Negative age cannot be accepted.");
    ask();
}
else
{
    alert("You cannot drive");
}
}



ask();
var value=confirm("You want to see the prompt again?");
if(true){
    ask();    
}