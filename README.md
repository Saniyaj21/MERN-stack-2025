# Study Material: Using Local Storage in JavaScript

Local Storage is a web storage API that allows you to store data in the browser persistently. Unlike session storage, data stored in local storage does not expire when the browser is closed. This makes it ideal for saving user preferences, caching data, or storing other information that needs to persist across sessions.

In this study material, we will explore how to use Local Storage in JavaScript, including setting, updating, retrieving, and removing data. We will also cover how to store complex data types like arrays and objects.

---

## Table of Contents
1. **Introduction to Local Storage**
2. **Setting Data in Local Storage**
3. **Retrieving Data from Local Storage**
4. **Updating Data in Local Storage**
5. **Removing Data from Local Storage**
6. **Storing Arrays and Objects**
7. **Code Example with Explanations**

---

## 1. Introduction to Local Storage
Local Storage is part of the Web Storage API and provides a way to store key-value pairs in the browser. The data stored in Local Storage:
- Persists even after the browser is closed.
- Is accessible across tabs and windows of the same origin.
- Has a storage limit of about 5-10 MB (depending on the browser).

---

## 2. Setting Data in Local Storage
You can store data in Local Storage using the `setItem()` method. It takes two arguments: a **key** (string) and a **value** (string).

### Example:
```javascript
localStorage.setItem('name', 'saniyaj'); // Key: 'name', Value: 'saniyaj'
localStorage.setItem('age', '21');       // Key: 'age', Value: '21'
```

---

## 3. Retrieving Data from Local Storage
You can retrieve data from Local Storage using the `getItem()` method or by directly accessing the `localStorage` object.

### Example:
```javascript
console.log(localStorage.getItem('name')); // Output: 'saniyaj'
console.log(localStorage.name);            // Output: 'saniyaj'
console.log(localStorage.getItem('age'));  // Output: '21'
```

---

## 4. Updating Data in Local Storage
To update data, simply use the `setItem()` method with the same key. This will overwrite the existing value.

### Example:
```javascript
localStorage.age = 26;                     // Update using direct access
localStorage.setItem('age', 50);           // Update using setItem()
console.log(localStorage.getItem('age'));  // Output: '50'
```

---

## 5. Removing Data from Local Storage
You can remove a specific item from Local Storage using the `removeItem()` method.

### Example:
```javascript
localStorage.removeItem('age');            // Remove the 'age' key
console.log(localStorage.getItem('age'));  // Output: null (since it's removed)
```

---

## 6. Storing Arrays and Objects
Local Storage can only store strings. To store arrays or objects, you need to convert them to strings using `JSON.stringify()` and parse them back using `JSON.parse()`.

### Example:
```javascript
let arr = [{ id: 1, name: 'saniyaj' }, { id: 2, name: 'shubha' }];

// Store the array
localStorage.setItem('arr', JSON.stringify(arr));
console.log(localStorage);

// Retrieve and parse the array
let getArr = localStorage.getItem('arr');
console.log('arr storage:', JSON.parse(getArr));
```

---

## 7. Code Example with Explanations

### JavaScript Code:
```javascript
console.log("Local Storage");

// Set items in Local Storage
localStorage.setItem('name', 'saniyaj'); // Key: 'name', Value: 'saniyaj'
localStorage.setItem('age', '21');       // Key: 'age', Value: '21'

// Log the entire Local Storage object
console.log(localStorage);

// Retrieve data from Local Storage
console.log(localStorage.name);            // Output: 'saniyaj'
console.log(localStorage.getItem('age')); // Output: '21'

// Update data in Local Storage
localStorage.age = 26;                     // Update using direct access
localStorage.setItem('age', 50);           // Update using setItem()
console.log(localStorage.getItem('age'));  // Output: '50'

// Remove data from Local Storage
localStorage.removeItem('age');            // Remove the 'age' key
console.log(localStorage.getItem('age'));  // Output: null (since it's removed)

// Store an array in Local Storage
let arr = [{ id: 1, name: 'saniyaj' }, { id: 2, name: 'shubha' }];
localStorage.setItem('arr', JSON.stringify(arr)); // Convert array to string
console.log(localStorage);

// Retrieve and parse the array from Local Storage
let getArr = localStorage.getItem('arr');
console.log('arr storage:', JSON.parse(getArr)); // Convert string back to array
```

