# Study Material: DOM Manipulation and Event Handling in JavaScript

This study material will guide you through the concepts of **DOM Manipulation** and **Event Handling** in JavaScript using the provided HTML and JavaScript code. We will break down the code, explain each part, and provide examples to help you understand how to interact with the DOM and handle events.

---

## Table of Contents
1. **Introduction to the DOM**
2. **DOM Selectors**
3. **Modifying Elements**
4. **Attributes**
5. **Class Manipulation**
6. **Parent-Child Relationships**
7. **Event Handling**
8. **Form Events**
9. **Mouse Events**
10. **Code Example with Explanations**

---

## 1. Introduction to the DOM
The **Document Object Model (DOM)** is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (e.g., elements, attributes, text). JavaScript can interact with the DOM to dynamically change the content, structure, and style of a webpage.

---

## 2. DOM Selectors
DOM selectors are methods used to select HTML elements in JavaScript. Common selectors include:
- `document.querySelector()`: Selects the first matching element.
- `document.querySelectorAll()`: Selects all matching elements.
- `document.getElementById()`: Selects an element by its ID.
- `document.getElementsByClassName()`: Selects elements by their class name.

### Example:
```javascript
let h1Elements = document.querySelectorAll('h1'); // Selects all <h1> elements
console.log(h1Elements);
```

---

## 3. Modifying Elements
Once you select an element, you can modify its properties, such as `innerText`, `innerHTML`, or `style`.

### Example:
```javascript
let firstH1 = document.querySelector('.head');
firstH1.innerText = "SANIYAJ"; // Change the text
firstH1.style.backgroundColor = "green"; // Change the background color
```

---

## 4. Attributes
You can get or set attributes of an element using `getAttribute()` and `setAttribute()`.

### Example:
```javascript
let link = document.querySelector('a');
console.log(link.getAttribute('href')); // Get the href attribute
link.setAttribute('href', 'https://saniyajmallik.vercel.app'); // Set a new href
link.innerText += " Saniyaj"; // Append text
link.style.color = "red"; // Change the text color
```

---

## 5. Class Manipulation
You can add, remove, or replace classes using the `classList` property.

### Example:
```javascript
let paragraph = document.querySelector('p');
paragraph.classList.add('active'); // Add a class
paragraph.classList.remove('active'); // Remove a class
paragraph.classList.replace('previousClass', 'newClass'); // Replace a class
```

---

## 6. Parent-Child Relationships
You can navigate between parent and child elements using properties like `parentElement`, `children`, and `nextSibling`.

### Example:
```javascript
let parentDiv = document.querySelector('.box');
console.log(parentDiv.children); // Log all children
console.log(parentDiv.children[0]); // Log the first child

let childP = document.querySelector('.child');
console.log(childP.parentElement); // Log the parent element
console.log(childP.nextSibling); // Log the next sibling
```

---

## 7. Event Handling
Events are actions that occur on a webpage, such as clicks, mouse movements, or key presses. You can use `addEventListener()` to handle these events.

### Example:
```javascript
let listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.style.textDecoration = "line-through"; // Cross out the clicked item
    });
});
```

---

## 8. Form Events
You can handle form events like `submit` or `keydown` to prevent default behavior or validate input.

### Example:
```javascript
let input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log(e.target.value); // Log the input value
});
```

---

## 9. Mouse Events
Mouse events like `mousemove` can be used to track cursor position or perform actions when the mouse moves over an element.

### Example:
```javascript
let hoverBox = document.querySelector('.hover-box');
let score = document.querySelector('.score');
hoverBox.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY); // Log the mouse position
    score.innerText = `X: ${e.offsetX}, Y: ${e.offsetY}`; // Display the position
});
```

---

## 10. Code Example with Explanations

### HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        p, ul {
            font-size: 40px;
        }
        .hover-box {
            height: 200px;
            width: 200px;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <h1>
        <p class="previousClass head22">This is a para</p>
    </h1>
    <h1 class="head">h1</h1>
    <h1 class="head">h2</h1>
    <h1 class="head">h3</h1>

    <a href="google.com">Click me</a>

    <p class="head">This is a p tag</p>

    <div class="parent box">
        <p class="child">
            <p>sib</p>
        </p>
        <p>2</p>
    </div>

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <button>add item</button>

    <div class="hover-box"></div>
    <p class="score"></p>

    <form action="">
        <input type="text" name="username">
        <button type="submit">Submit</button>
    </form>

    <script src="./index.js"></script>
</body>
</html>
```

### JavaScript Code:
```javascript
// Log all <h1> elements
console.log(document.querySelectorAll('h1'));

// Modify the first <h1> element
let h = document.querySelectorAll('.head');
h[0].innerText = "SANIYAJ";
h[0].style.backgroundColor = "green";

// Modify link attributes
let link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://saniyajmallik.vercel.app');
link.innerText += " Saniyaj";
link.style.color = "red";

// Class manipulation
let head = document.querySelector('p');
head.classList.add('active');
head.classList.remove('active');
head.classList.replace('previousClass', 'newClass');

// Parent-child relationships
let parentDiv = document.querySelector('.box');
console.log(parentDiv.children);
console.log(parentDiv.children[0]);

let childP = document.querySelector('.child');
console.log(childP.parentElement);
console.log(childP.nextSibling);

// Event handling for list items
const elements = document.querySelectorAll('li');
elements.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.target.style.textDecoration = "line-through";
    });
});

// Add new items to the list
const ul = document.querySelector('ul');
const addItem = document.querySelector('button');
addItem.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = 'Something new added';
    ul.append(li);
});

// Mouse events
let hoverBox = document.querySelector('.hover-box');
let score = document.querySelector('.score');
hoverBox.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY);
    score.innerText = `X: ${e.offsetX}, Y: ${e.offsetY}`;
});

// Form events
let input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log(e.target.value);
});
```
