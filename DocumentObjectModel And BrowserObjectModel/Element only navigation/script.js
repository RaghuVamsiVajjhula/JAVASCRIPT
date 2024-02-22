let a = document.body;
console.log("First Child of a is ", a.firstChild);
console.log("First element child of a is:", a.firstElementChild);

// Here first child is text node because as we already know when the tag is not next to the body tag we have some space in btw and it is considered as the text node.

// But when you use the same thing with element node then we can see that the first element child is nav tag even we have space in between them.

// If you add a comment node after the body tag we can see the firstchild will be the comment node and the firstelementchild will not be the comment node and the nav tag.

