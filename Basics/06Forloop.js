// In order to repeat a block for specific number
// of times we use for loops.

// There are 3 types of for loops:

// 1.Standard For loop
for(i=0;i<5;i++)
{
    console.log("Hello World");
}


//  2.For- in loop
let person={
    name:"Ash",
    age: 20,
    job:"Nothing"
};


for(var i in person)
{
    console.log(i+":"+person[i]);
}

//  3.for - of loop:
 let numbers=[1,2,3,4,5];
 console.log("The values in numebers is:")
 for(var num in numbers)
 {
    
    console.log(numbers[num]);
 }