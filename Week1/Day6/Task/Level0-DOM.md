### DOM Practice Questions

### Task 1
Create a function that changes the background color of a webpage when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Change Background Color</title>
</head>
<body>
    <button id="colorButton">Change Background Color</button>

    <script>
        var colorBtnElement = document.getElementById('colorButton');
        function changeBackgroundColor() {
            // Add your code here to change the background color of the body
            // Use getElementsByName
            
        }

        colorBtnElement.addEventListener('click', changeBackgroundColor);
    </script>
</body>
</html>
```

### Task 2
Create a function that adds a new item to a list when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Add Item to List</title>
</head>
<body>
    <ul id="itemList">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <button id="addItemButton">Add Item</button>

    <script>
        var addItemBtnElement = document.getElementById('addItemButton');
        function addItem() {
            // Add your code here to add a new item to the list
            
        }

        addItemBtnElement.addEventListener('click', addItem);
    </script>
</body>
</html>
```

### Task 3
Create a function that removes the last item from a list when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Remove Item from List</title>
</head>
<body>
    <ul id="itemList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button id="removeItemButton">Remove Last Item</button>

    <script>
        var removeItemBtnElement = document.getElementById('removeItemButton');
        function removeItem() {
            // Add your code here to remove the last item from the list
            
        }

        removeItemBtnElement.addEventListener('click', removeItem);
    </script>
</body>
</html>
```

### Task 4
Create a function that toggles the visibility of a paragraph when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Toggle Paragraph Visibility</title>
</head>
<body>
    <p id="myParagraph">This is a paragraph that will be toggled.</p>
    <button id="toggleButton">Toggle Paragraph</button>

    <script>
        var toggleBtnElement = document.getElementById('toggleButton');
        function toggleParagraph() {
            // Add your code here to toggle the visibility of the paragraph
            // You have to modify the css property. 
            
            
        }

        toggleBtnElement.addEventListener('click', toggleParagraph);
    </script>
</body>
</html>
```
### Task 5
Create a function that adds a new paragraph to a div when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Add Paragraph to Div</title>
</head>
<body>
    <div id="contentDiv">
        <p>Existing paragraph.</p>
    </div>
    <button id="addParagraphButton">Add Paragraph</button>

    <script>
        var addParagraphBtnElement = document.getElementById('addParagraphButton');
        function addParagraph() {
            // Add your code here to add a new paragraph to the div
            
        }

        addParagraphBtnElement.addEventListener('click', addParagraph);
    </script>
</body>
</html>
```