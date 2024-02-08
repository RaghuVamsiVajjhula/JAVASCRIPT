// An array is collection of elements and it is important to interate through
// all the elements present inside an array.

console.log("Standard for")
// for loop in arrays
var MyArray=[1,2,3,4,5];
var i=0;
for(i=0;i<MyArray.length;i++){
    console.log(MyArray[i]);
}

console.log("for each:")
// for-each method in arrays
MyArray.forEach(
    function(element)
{
    console.log(element);

}
)

console.log("for-of method:")
// for-of method
var element;
for(element of MyArray){
    console.log(element);
}