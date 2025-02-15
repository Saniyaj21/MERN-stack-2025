# JavaScript Study Material

## 1. Console Output
```javascript
console.log("Hey programmers");
```
- The `console.log()` function is used to print messages to the console.
- Helps in debugging and testing outputs.

---

## 2. Variable Declarations

### Using `var`
```javascript
var myName;
myName = "Saniyaj";
```
- `var` is function-scoped.
- It can be redeclared and reassigned.
- Variables declared with `var` are hoisted, meaning they are moved to the top of their scope but remain `undefined` until assigned.

### Using `let`
```javascript
let num;
num = 90;
```
- `let` is block-scoped.
- It can be reassigned but not redeclared within the same scope.
- Unlike `var`, `let` is not hoisted in the same way and does not get initialized as `undefined`.

### Using `const`
```javascript
const pi = 3.14;
```
- `const` is block-scoped like `let`.
- It cannot be reassigned or redeclared.
- Must be initialized at the time of declaration.

---

## 3. Scope in JavaScript

### Global Scope
```javascript
let global = 50;
```
- Variables declared outside functions are globally scoped.
- Accessible anywhere in the script.

### Local Scope (Function Scope)
```javascript
function local() {
    let localvar = 100;
    console.log(localvar); // Accessible inside function
    console.log(global); // Can access global variable
}
local();
```
- `localvar` is defined inside the function and is accessible only within that function.
- Global variables can be accessed inside functions.

---

## 4. Hoisting in JavaScript
```javascript
const hoist = 10;
console.log(hoist);
```
- Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before execution.
- `var` is hoisted with an `undefined` value, while `let` and `const` are hoisted but not initialized.
- Example of `var` hoisting:
  ```javascript
  console.log(a); // undefined
  var a = 5;
  ```
- Example of `let` hoisting:
  ```javascript
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  ```

---

## 5. Code Execution in JavaScript

### Synchronous Execution
- Code runs line by line, in order.
- Each line waits for the previous one to complete before execution.

### Asynchronous Execution
- JavaScript can execute non-blocking code using callbacks, promises, and async/await.
- Example:
  ```javascript
  console.log("Start");
  setTimeout(() => {
      console.log("Async execution");
  }, 2000);
  console.log("End");
  ```
  **Output:**
  ```
  Start
  End
  Async execution (after 2 seconds)
  ```
  - `setTimeout` executes after the specified delay while the rest of the code continues execution.

---

### Summary
| Concept        | `var` | `let` | `const` |
|---------------|-------|-------|--------|
| Scope        | Function-scoped | Block-scoped | Block-scoped |
| Hoisting     | Hoisted with `undefined` | Hoisted but not initialized | Hoisted but not initialized |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |

This study guide covers fundamental JavaScript concepts with examples. Understanding these will help in writing efficient and bug-free code.

