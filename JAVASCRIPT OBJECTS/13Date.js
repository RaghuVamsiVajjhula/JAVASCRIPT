// Java Script date objects allows you to work with date and times in your script.
// Creating a new date object is simple.
// Using Date object to get current Date and time:
var currentDate=new Date();
console.log(currentDate);

// We can also manipulate date and time using various methods available in the Dateobject.
var date=new Date();
date.setDate(10);
date.setFullYear(2099);
console.log(date);
// We can see the ouput with your new values given.

// We can also format the date and time using toLocalString() method which allows
// // you to specify the format and timezone.

 var date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));
