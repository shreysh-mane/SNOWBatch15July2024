// Objects

// Creation using object literal
var obj1 = {
    name: "Shreysh",
    city: "Pune",

    // Method to get information about the object
    getInfo: function() {
        console.log("The name is " + this.name + " and the city is " + this.city);
    }
};

// Accessing properties of the object
console.log(obj1.city); // Output: Pune

// Calling a method of the object
obj1.getInfo(); // Output: The name is Shreysh and the city is Pune

// Modify the value of properties in the object
obj1.city = "Karad";
console.log(obj1.city); // Output: Karad

// Add an additional property to the object
obj1.company = "ABC";
console.log(obj1.company); // Output: ABC

// Delete a property from the object
console.log(obj1); // Output: {name: "Shreysh", city: "Karad", getInfo: ƒ, company: "ABC"}
delete obj1.company;
console.log(obj1); // Output: {name: "Shreysh", city: "Karad", getInfo: ƒ}

// Using class to create objects
class Person {

    // Constructor to initialize properties
    constructor(personName, personCity) {
        this.name = personName;
        this.city = personCity;
    }
}

// Creating a new instance of the Person class
var obj2 = new Person("Yash", "Mumbai");

// Accessing properties of the class instance
console.log(obj2.name); // Output: Yash
