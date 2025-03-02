# Study Material: Arrays in JavaScript

Arrays are one of the most fundamental data structures in JavaScript. They allow you to store and manipulate collections of data efficiently. This study material will cover the basics of arrays, common methods, and practical examples.

---

## **1. What is an Array?**
An array is a special type of object used to store multiple values in a single variable. Each value in an array is called an **element**, and each element has a numeric **index** (starting from 0).

### Example:
```javascript
let fruits = ["Apple", "Banana", "Mango"];
```
- `fruits` is an array with 3 elements.
- `fruits[0]` is `"Apple"`, `fruits[1]` is `"Banana"`, and `fruits[2]` is `"Mango"`.

---

## **2. Creating Arrays**
There are two common ways to create arrays in JavaScript:

### a. Using Array Literals:
```javascript
let numbers = [1, 2, 3, 4, 5];
```

### b. Using the `Array` Constructor:
```javascript
let colors = new Array("Red", "Green", "Blue");
```

---

## **3. Accessing Array Elements**
You can access array elements using their index:
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[2]); // Output: "Mango"
```

---

## **4. Array Properties and Methods**

### a. **Length Property**
The `length` property returns the number of elements in an array:
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // Output: 3
```

### b. **Common Array Methods**

#### i. **Adding Elements**
- `push()`: Adds one or more elements to the **end** of an array.
  ```javascript
  fruits.push("Orange");
  console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]
  ```
- `unshift()`: Adds one or more elements to the **beginning** of an array.
  ```javascript
  fruits.unshift("Pineapple");
  console.log(fruits); // Output: ["Pineapple", "Apple", "Banana", "Mango"]
  ```

#### ii. **Removing Elements**
- `pop()`: Removes the **last** element from an array.
  ```javascript
  fruits.pop();
  console.log(fruits); // Output: ["Apple", "Banana"]
  ```
- `shift()`: Removes the **first** element from an array.
  ```javascript
  fruits.shift();
  console.log(fruits); // Output: ["Banana", "Mango"]
  ```

#### iii. **Finding Elements**
- `indexOf()`: Returns the index of the first occurrence of an element.
  ```javascript
  let index = fruits.indexOf("Banana");
  console.log(index); // Output: 1
  ```
- `includes()`: Checks if an array contains a specific element.
  ```javascript
  let hasMango = fruits.includes("Mango");
  console.log(hasMango); // Output: true
  ```

#### iv. **Slicing and Splicing**
- `slice()`: Returns a shallow copy of a portion of an array.
  ```javascript
  let slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to 2
  console.log(slicedFruits); // Output: ["Banana", "Mango"]
  ```
- `splice()`: Adds or removes elements from an array at a specific index.
  ```javascript
  fruits.splice(1, 1, "Kiwi"); // Replaces 1 element at index 1 with "Kiwi"
  console.log(fruits); // Output: ["Apple", "Kiwi", "Mango"]
  ```

#### v. **Iterating Over Arrays**
- `forEach()`: Executes a function for each element in the array.
  ```javascript
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  ```
- `map()`: Creates a new array by applying a function to each element.
  ```javascript
  let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
  console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "MANGO"]
  ```

#### vi. **Filtering Arrays**
- `filter()`: Creates a new array with elements that pass a test.
  ```javascript
  let longFruits = fruits.filter(fruit => fruit.length > 5);
  console.log(longFruits); // Output: ["Banana", "Mango"]
  ```

#### vii. **Reducing Arrays**
- `reduce()`: Reduces the array to a single value by applying a function.
  ```javascript
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // Output: 10
  ```

---

## **5. Multidimensional Arrays**
Arrays can contain other arrays, creating multidimensional arrays:
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6
```

---

## **6. Common Array Operations**

### a. **Concatenating Arrays**
Use `concat()` to combine two or more arrays:
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4]
```

### b. **Sorting Arrays**
Use `sort()` to sort elements in an array:
```javascript
let numbers = [3, 1, 4, 2];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4]
```

### c. **Reversing Arrays**
Use `reverse()` to reverse the order of elements:
```javascript
let numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // Output: [3, 2, 1]
```

---

## **7. Practice Problems**
1. Create an array of numbers and find the sum of all elements.
2. Write a function to remove duplicates from an array.
3. Reverse an array without using the `reverse()` method.
4. Find the largest number in an array.
5. Merge two arrays and sort the result.
