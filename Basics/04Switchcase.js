/*The "switch" statement in JavaScript is another control
 structure that allows you to execute a different block of code
  depending on a specific value.It is often used 
  as an alternative to the "if-else ladder" */

/*Break: it should be mentioned in every case because if the condition is satisfied
and the block gets executed then after the execution the control comes out
of the switch block. */

let x="Apple"
switch(x)
{
    case "Apple":
        console.log("This is an Apple")
        break;
    case "Orange":
        console.log("This is an Orange");
        break;
    case "Banana":
        console.log("This is a Banana");
        break;
}