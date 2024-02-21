// Window represents for an open window in a browser.
// Window is an object of a browser not an object of javascript.
// Window is a globalobject.

// We get the same output for both the below lines of code.
console.log(window);
window.console.log(window);
// Everything that happens in java script comes under window object.

// DOM: document object model

// The entire html page gets an object created by javascript and named as some document.

console.log(document);
// refer to document.png for output
// The representation of the html elements in javascript is seen in the output.
// for example document.body gives out the body of the html page.

document.body.style.background="red"
// The background color of webpage changed to red as seen in document backgroundccolor.jpg

// Almost all the  CSS properties can be changed from javascript.
// But why should we use js to style as we already have CSS?
// So..

// Assume user gave his input as he wants to change his background color
// yellow instead of red.We cannot change the CSS code written so 
// dynamically, like after his input the color changes when we use js

// BOM:BrowserObjectModel
// The additional objects provided by the browser(host environment)
// for working with everything except the document.

// The functions alert/prompt and some other are parts of BOM.

location.href = "https://codewithharry.com"
// the above code will redirect you to codewithharry.com and we can see that this 
// is also a work done in css and now it can be manipulated with the help of js

