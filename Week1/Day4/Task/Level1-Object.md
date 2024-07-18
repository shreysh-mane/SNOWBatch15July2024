Sure, here are the questions separated with their respective code snippets:

### Q1
Create an object named 'student' with properties 'name' (string), 'age' (number), and 'course' (string). Print the 'name' and 'course' properties.
```javascript
function createStudentObject() {
    var student = {
        name: "Alice",
        age: 22,
        // Add Course property
        
    };
    // Add your code here to print the 'name' property
    console.log(student.name); 
    // Add your code here to print the 'course' property
   
}
createStudentObject();
```

### Q2
Modify the value of the 'city' property to "Karad" and print the updated object.
```javascript
function modifyCityProperty() {
    var person = {
        name: "Shreysh",
        city: "Pune"
    };
    // Add your code here to change the 'city' property to "Karad"
    
    console.log(person);
}
modifyCityProperty();
```

### Q3
Add a new property 'company' with the value "ABC" to the object 'employee' and print the updated object.
```javascript
function addCompanyProperty() {
    var employee = {
        name: "John",
        position: "Developer"
    };
    // Add your code here to add the 'company' property [Hint:  employee.company = "ABC";]
   
    console.log(employee);
}
addCompanyProperty();
```

### Q4
Delete the 'author' property from the object 'book' and print the updated object.
```javascript
function deleteAuthorProperty() {
    var book = {
        title: "1984",
        author: "George Orwell"
    };
    // Add your code here to delete the 'author' property
   
    console.log(book);
}
deleteAuthorProperty();
```

### Q5
Create an object 'calculator' with properties 'a' and 'b' (both numbers) and a method 'sum' that returns the sum of 'a' and 'b'. Call the 'sum' method and print the result.
Complete answer is given as I want you to understand the code.
```javascript
function createCalculatorObject() {
    var calculator = {
        a: 5,
        b: 10,
        sum: function() {
            return this.a + this.b;
        }
    };
    // Add your code here to call the 'sum' method and print the result
    console.log(calculator.sum());
}
createCalculatorObject();
```