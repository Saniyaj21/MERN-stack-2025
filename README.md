# JavaScript Study Material: Asynchronous Programming 

This study material covers key concepts in JavaScript, including asynchronous programming (callbacks, promises, async/await) and array methods (map, filter, reduce). Each concept is explained with suitable examples.

---

## 1. **Asynchronous Programming**

JavaScript is single-threaded, but it can handle asynchronous operations using callbacks, promises, and async/await.

---

### **1.1 Callbacks**
A callback is a function passed as an argument to another function and is executed after some operation is completed.

#### Example 1: Simple Callback
```javascript
function printResult(result) {
    console.log("The result is:", result);
}

const sum = (a, b, printResult) => {
    let result = a + b;
    printResult(result); // Callback function is called here
}

sum(9, 1, printResult); // Output: The result is: 10
```

#### Example 2: Callback with Anonymous Function
```javascript
const dif = (a, b, callback) => {
    callback(a, b); // Callback function is called here
}

dif(8, 3, (a, b) => {
    console.log(a - b); // Output: 5
});
```

---

### **1.2 Promises**
Promises are used to handle asynchronous operations. A promise has three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled (Resolved)**: The operation completed successfully.
- **Rejected**: The operation failed.

#### Example: Creating and Using a Promise
```javascript
const promise = new Promise((resolve, reject) => {
    console.log("Checking my balance");
    resolve(100); // Resolve the promise with a value
    // reject("I don't have 100 rs"); // Uncomment to reject the promise
});

promise
    .then((result) => {
        console.log(result); // Output: 100 (if resolved)
    })
    .catch((error) => {
        console.log("Error happened:", error); // Output: Error happened: I don't have 100 rs (if rejected)
    });
```

---

### **1.3 Async/Await**
`async` and `await` are syntactic sugar for working with promises. They make asynchronous code look more like synchronous code.

#### Example: Using Async/Await
```javascript
const matchPassword = (password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password == 111) {
                resolve(true); // Resolve if password matches
            } else {
                reject("Incorrect password"); // Reject if password doesn't match
            }
        }, 2000); // Simulate a 2-second delay
    });
};

async function login(password) {
    console.log("Getting user...");
    try {
        let isMatched = await matchPassword(password); // Wait for the promise to resolve
        console.log("Login successful:", isMatched); // Output: Login successful: true (if password is 111)
    } catch (error) {
        console.log(error); // Output: Incorrect password (if password is incorrect)
    }
}

login(111); // Try with 111 (success) or 9988 (error)
```
