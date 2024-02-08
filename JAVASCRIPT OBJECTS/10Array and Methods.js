// An important data struncture in javascript is an array, which is collection of elements.
// An array is collection of elements enclosed in square brackets.
// Elements of any data types can be stored into an array.

var MyArray=[1,"Hello",[2,3]];
console.log("Array with different data type elements are: ",MyArray);

//There are many methods used to manipulate arrays some mostly used among them are:

//lenght
var MyArray=[1,"Hi",[10,20]];
console.log("The length of an array is:",MyArray.length);

//push
MyArray.push("Ash");
console.log("The array after pushing:",MyArray);

//pop
MyArray.pop();//Here element which entered last will be removed.
console.log("The array after poping:",MyArray);

//shift
// This method is used to remove the first element of an array. 
MyArray.shift();
console.log("After shift:",MyArray);

//unshift
//This method is used to add an element in the beginning of an array.
MyArray.unshift(99);
console.log("After unshift:",MyArray);

//slice
// This method is used to extract a portion of an array.
console.log("One of the portion of the array:",MyArray.slice(1,2));

//spice
// This is used to add or remove elements from an array.
var MyArray=[1,"Hi",[10,20]];
MyArray.splice(1,1,"Hey",[99,88]);
console.log("After splicing:",MyArray)