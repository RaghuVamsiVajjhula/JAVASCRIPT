// We know that arrays are imp data structures used and inorder to manipulate them
// some of the important built in methods like map,reduce and filter are used.

// map
// Used to create a  new array with result of a call back function called on
// each element of the original array.

var FirstArray=[1,2,3,4,5];
var SecondArray=FirstArray.map(function(element)
{
    return element*2;
})
console.log(SecondArray);

//Filter
// Used to filter an array based on some certain condition.
// In the below code it returns the element which gets true in its condition.

var MyArray=[1,2,3,4,5];
var EvenNumbers=MyArray.filter(function(element){
    return element %2==0;
});
console.log(EvenNumbers);

//Reduce
// Used to reduce the array into a single value.

var MyArray=[1,2,3,4,5];
var sum=MyArray.reduce(function(acc,cur){
    return acc+cur;
});
console.log(sum);