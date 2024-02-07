// While loop are control flow structure that allow
// to repeat a block of code while a certain condition
// is true.

var i=1;

while(i<5)
{
    console.log("This is a While loop");
    i++;
}

// The below code is to take input from the user which cannot work in VS code maybe.
// try it under the console section in any browser.
let input="";
while(input!=="yes" && input!=="no")
{
    input=prompt("Please enter 'yes' or 'no':");

}