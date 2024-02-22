// Classes are used to define blueprint for objects and allows developers to create objects
// that share the same properties

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
// The constructor method is a special method that is called when a new object is created from the class. It is used to initialize the properties of the object. In this example, the constructor takes in two parameters name and age and assigns them to the object's properties.

// You can create a new object using the new keyword and passing in any required arguments to the constructor
// Example: below are the objects created.
let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

// You can also add methods to a class by defining them within the class body

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// JavaScript classes also support inheritance and polymorphism which are fundamental concepts of OOP.
// Inheritance means one class inherits properties/methods from another class.
// Polymorphism  means you can use a variable of a base class to refer to an instance of a derived class.
