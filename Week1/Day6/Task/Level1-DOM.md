### DOM Practice Questions

### Task 1
Create a div with `id: mainDiv` and two paragraphs with `class: para`. Select them using an ID selector and a class selector and change their text color to red.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Change Text Color</title>
</head>
<body>
    <div id="mainDiv">
        <p class="para">Paragraph 1</p>
        <p class="para">Paragraph 2</p>
    </div>

    <script>
        var mainDivElement = document.getElementById('mainDiv');
        // Write code to select paragraphs by their class name
        var paraElements = 

        function changeTextColor() {
            // Change text color of mainDiv to red
            // Add your code here
        }

        function changeParaTextColor() {
            // Change text color of each paragraph to red
            for (var i = 0; i < paraElements.length; i++) {
                // Add your code here
            }
        }

        changeTextColor();
        changeParaTextColor();
    </script>
</body>
</html>
```

### Task 2
Create four divs with size 100x100px and background color red. Implement the following interactions:
1. When the first div is clicked, change its background color.
2. When the mouse enters the second div area, change its background color.
3. When the third div is clicked, add an image to its background.
4. When the fourth div is clicked, change its size.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Div Interactions</title>
    <style>
        .interactive-div {
            width: 100px;
            height: 100px;
            background-color: red;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="interactive-div" id="div1"></div>
    <div class="interactive-div" id="div2"></div>
    <div class="interactive-div" id="div3"></div>
    <div class="interactive-div" id="div4"></div>

    <script>
        var div1 = document.getElementById('div1');
        // Write code to select div2, div3, and div4 by using their ids
        var div2 = 
        var div3 = 
        var div4 = 

        function changeDiv1Color() {
            // Change background color of div1
            // Add your code here
        }

        function changeDiv2Color() {
            // Change background color of div2
            // Add your code here
        }

        function addBackgroundImageToDiv3() {
            // Add image to background of div3
            // Add your code here
        }

        function changeDiv4Size() {
            // Change width and height of div4
            // Add your code here
        }

        div1.addEventListener('click', changeDiv1Color);
        div2.addEventListener('mouseover', changeDiv2Color);
        // Add an event listener to div3 which will call addBackgroundImageToDiv3 function on click
        // Add an event listener to div4 which will call changeDiv4Size function on click
    </script>
</body>
</html>
```

### Task 3
Create a div with "demo text" inside it. When the div is clicked, change the text to "I got clicked" and change the background color to pink.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Change Text and Background</title>
</head>
<body>
    <div id="demoDiv">demo text</div>

    <script>
        var demoDivElement = document.getElementById('demoDiv');
        
        function changeTextAndBackground() {
            // Change text content
            // Add your code here

            // Change background color
            // Add your code here
        }

        demoDivElement.addEventListener('click', changeTextAndBackground);
    </script>
</body>
</html>
```

### Task 4
Create a p tag that initially shows 0. Then create two buttons to increment or decrement the value by 1.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Increment and Decrement</title>
</head>
<body>
    <p id="counter">0</p>
    <button id="incrementBtn">Increment</button>
    <button id="decrementBtn">Decrement</button>

    <script>
        // Add code to select counterElement and increment, decrement buttons
        var counterElement = 
        var incrementBtn = 
        var decrementBtn = 

        function incrementCounter() {
            // Increment counter
            // Add your code here
        }

        function decrementCounter() {
            // Decrement counter
            // Add your code here
        }

        incrementBtn.addEventListener('click', incrementCounter);
        decrementBtn.addEventListener('click', decrementCounter);
    </script>
</body>
</html>
```

### Task 5
Create an array with 3 user objects containing name, city, and age. Create an empty div tag and a button. When the button is clicked, print the names from the objects as h1 elements inside the div.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Print User Names</title>
</head>
<body>
    <div id="nameContainer"></div>
    <button id="printNamesBtn">Print Names</button>

    <script>
        // Add 2 more objects to the users array
        var users = [
            {name: 'Alice', city: 'New York', age: 25},
            // Add code here
        ];

        var nameContainer = document.getElementById('nameContainer');
        var printNamesBtn = document.getElementById('printNamesBtn');

        function printNames() {
            nameContainer.innerHTML = ''; // Clear previous names
            
            users.forEach(function(user) {
                var h1Element = document.createElement('h1');
                // Print user name
                // Add your code here
                nameContainer.appendChild(h1Element);
            });
        }

        printNamesBtn.addEventListener('click', printNames);
    </script>
</body>
</html>
```

### Task 6
Create a form to take user data like name and email. Once the user has filled in the data and clicked the submit button, store the data in a global `userArray`. Below the form, create a div that displays all the usernames stored in `userArray`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>User Data Form</title>
</head>
<body>
    <form id="userForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <button type="submit">Submit</button>
    </form>
    <div id="userList"></div>

    <script>
        var userArray = [];
    
        var userForm = document.getElementById('userForm');
        var userList = document.getElementById('userList');

        function handleSubmit(event) {
            // Add code to prevent form reloading (Hint: method starts with prev..)
            
            // Add code to get reference of name input box and fetch its value
            
            // Add code to get reference of email input box and fetch its value
            
            // Assign the fetched values to name and email properties
            var userData = {
                name: 
                email: 
            };
            
            // Store user data in userArray
            // Add your code here
            
            var userNamesHTML = '';
            userArray.forEach(function(user) {
                // Display user names
                // Add your code here
            });
            
            userList.innerHTML = userNamesHTML; // Update user list
        }

        userForm.addEventListener('submit', handleSubmit);
    </script>
</body>
</html>
```