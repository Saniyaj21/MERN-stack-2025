# Javascript Functions

### **1. Basic Function Definition and Invocation**
A function in JavaScript is a block of code designed to perform a specific task. It is executed when it is invoked (called).

```javascript
function sendMessage() {
    console.log("welcome " + "Saniyaj");
}

sendMessage();
```
- **Explanation**: The function `sendMessage` is defined and then invoked. It logs "welcome Saniyaj" to the console.

---

### **2. Function Parameters**
Parameters are variables listed inside the parentheses in the function definition. They act as placeholders for values that are passed to the function when it is invoked.

```javascript
function sendMessage(user) {
    console.log("welcome " + user);
}

sendMessage("Shubha");
sendMessage("Rohit");
```
- **Explanation**: The function `sendMessage` takes a parameter `user` and logs "welcome" followed by the value of `user`.

---

### **3. Default Parameters**
Default parameters allow you to initialize a parameter with a default value if no argument is passed or if `undefined` is passed.

```javascript
function sendMessage(user = "Saniyaj") {
    console.log("welcome " + user);
}

sendMessage(); // Logs "welcome Saniyaj"
sendMessage("Shubha"); // Logs "welcome Shubha"
```
- **Explanation**: If no argument is passed to `sendMessage`, it uses the default value "Saniyaj".

---

### **4. Return Statement**
The `return` statement stops the execution of a function and returns a value to the caller.

```javascript
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // Logs 5
```
- **Explanation**: The function `sum` returns the sum of `a` and `b`. The returned value is then logged to the console.

---

### **5. Function Overloading (Not Supported in JavaScript)**
JavaScript does not support function overloading. If you define multiple functions with the same name, the last one defined will override the previous ones.

```javascript
function mul(a, b) {
    return a * b;
}

function mul(a, b, c) {
    return a * b * c;
}

console.log(mul(2, 3)); // Logs NaN
console.log(mul(2, 3, 2)); // Logs 12
```
- **Explanation**: The second `mul` function overrides the first one. When called with two arguments, it returns `NaN` because `c` is `undefined`.

---

### **6. Anonymous Functions**
An anonymous function is a function without a name. It is often used as an argument to other functions or assigned to a variable.

```javascript
let sum2 = function(a, b) {
    console.log(a + b);
}

sum2(2, 3); // Logs 5
```
- **Explanation**: The anonymous function is assigned to the variable `sum2` and then invoked.

---

### **7. Arrow Functions**
Arrow functions provide a concise syntax for writing functions. They are anonymous and change the way `this` binds in functions.

```javascript
const printname = (name) => console.log(name);
printname("Sani"); // Logs "Sani"
```
- **Explanation**: The arrow function `printname` takes a parameter `name` and logs it to the console.

---

### **8. Higher-Order Functions**
A higher-order function is a function that takes another function as an argument or returns a function.

```javascript
const transform = function (str, func) {
    return func(str);
}

const upper = (str) => {
    return str.toUpperCase();
}
const lower = (str) => {
    return str.toLowerCase()
}

console.log(transform("java", upper)); // Logs "JAVA"
console.log(transform("PYTHON", lower)); // Logs "python"
```
- **Explanation**: The `transform` function takes a string and a function as arguments and applies the function to the string.

---

### **9. Immediately Invoked Function Expressions (IIFE)**
An IIFE is a function that is executed immediately after it is defined.

```javascript
(function (name) {
    console.log("Immediate execution " + name);
})('Saniyaj'); // Logs "Immediate execution Saniyaj"
```
- **Explanation**: The function is defined and invoked immediately with the argument `'Saniyaj'`.

---

### **10. setTimeout and setInterval**
- **`setTimeout`**: Executes a function once after a specified delay.
- **`setInterval`**: Executes a function repeatedly, with a fixed time delay between each call.

```javascript
setTimeout(() => {
    console.log("Demo");
}, 3000); // Logs "Demo" after 3 seconds

setInterval(() => {
    console.log("Demo");
}, 2000); // Logs "Demo" every 2 seconds
```
- **Explanation**: `setTimeout` logs "Demo" after 3 seconds, while `setInterval` logs "Demo" every 2 seconds.

---

### **11. Function Hoisting**
Function declarations are hoisted, meaning they can be called before they are defined. However, function expressions (including arrow functions) are not hoisted.

```javascript
hoist1(89); // Logs 89

function hoist1(a) {
    console.log(a);
}

// hoist2(78); // Error: hoist2 is not defined

let hoist2 = (a) => console.log(a);
```
- **Explanation**: `hoist1` is hoisted, so it can be called before its definition. `hoist2` is not hoisted, so calling it before its definition results in an error.


Your study material is comprehensive and covers most of the fundamental concepts related to JavaScript functions. However, there are a few additional topics and nuances that could be included to make it even more complete. Here are some suggestions:

---

### **12. Rest Parameters**
Rest parameters allow you to represent an indefinite number of arguments as an array. This is useful when you don't know how many arguments will be passed to the function.

```javascript
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3)); // Logs 6
console.log(sumAll(1, 2, 3, 4, 5)); // Logs 15
```
- **Explanation**: The `sumAll` function uses the rest parameter `...numbers` to accept any number of arguments and sums them up.

---

### **13. Callback Functions**
A callback function is a function passed into another function as an argument and is executed after some operation is completed.

```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Saniyaj", sayGoodbye);
// Logs:
// Hello, Saniyaj
// Goodbye!
```
- **Explanation**: The `greet` function takes a callback function `callback` and executes it after logging the greeting.

---



### **14. Recursion**
A recursive function is a function that calls itself until a base condition is met.

```javascript
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Logs 120
```
- **Explanation**: The `factorial` function calls itself to calculate the factorial of a number.

---







