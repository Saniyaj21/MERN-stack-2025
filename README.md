# JavaScript Operators Study Material

JavaScript operators are symbols that are used to perform operations on operands. Operands can be values or variables. JavaScript supports various types of operators, including arithmetic, assignment, comparison, string, logical, bitwise, and type operators. Below, we will explore each type of operator with examples.

---

## 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations like addition, subtraction, multiplication, division, etc.

### Examples:

```javascript
// Addition
let a = 8;
let b = 2;
console.log(a + b); // Output: 10

// Subtraction
console.log(a - b); // Output: 6

// Multiplication
console.log(a * b); // Output: 16

// Division
console.log(a / b); // Output: 4

// Exponentiation (Power of)
console.log(a ** b); // Output: 64

// Modulus (Remainder)
let c = 9;
console.log(c % b); // Output: 1

// Increment
let d = 9;
d++;
console.log(d); // Output: 10

// Decrement
let e = 9;
e--;
console.log(e); // Output: 8
```

---

## 2. Assignment Operators

Assignment operators are used to assign values to variables. They can also perform operations before assigning the value.

### Examples:

```javascript
// Assignment
let a = 10;
console.log(a); // Output: 10

// Addition Assignment
a += 3; // Equivalent to a = a + 3
console.log(a); // Output: 13

// Subtraction Assignment
a -= 3; // Equivalent to a = a - 3
console.log(a); // Output: 10

// Multiplication Assignment
a *= 3; // Equivalent to a = a * 3
console.log(a); // Output: 30

// Division Assignment
a /= 3; // Equivalent to a = a / 3
console.log(a); // Output: 10

// Modulus Assignment
a %= 3; // Equivalent to a = a % 3
console.log(a); // Output: 1

// Exponentiation Assignment
a **= 3; // Equivalent to a = a ** 3
console.log(a); // Output: 1
```

---

## 3. Comparison Operators

Comparison operators are used to compare two values and return a boolean result (`true` or `false`).

### Examples:

```javascript
// Equal to (value)
let a = "8";
let b = 8;
console.log(a == b); // Output: true

// Equal to (value and type)
console.log(a === b); // Output: false

// Not equal to (value)
console.log(a != b); // Output: false

// Not equal to (value and type)
console.log(a !== b); // Output: true

// Greater than
console.log(7 > 9); // Output: false

// Less than
console.log(87 < 9); // Output: false

// Greater than or equal to
console.log(8 >= 9); // Output: false

// Less than or equal to
console.log(8 <= 9); // Output: true
```

---

## 4. String Operators

String operators are used to manipulate and compare strings.

### Examples:

```javascript
// String Comparison
console.log('a' < 'b'); // Output: true (based on ASCII values)

// String Concatenation
let first = "Saniyaj";
let last = "Mallik";
let name = first + " " + last;
console.log(name); // Output: "Saniyaj Mallik"

// Concatenation Assignment
let str1 = "Welcome to";
str1 += " Lords JS";
console.log(str1); // Output: "Welcome to Lords JS"
```

---

## 5. Logical Operators

Logical operators are used to combine multiple conditions and return a boolean result.

### Examples:

```javascript
// Logical AND (&&)
console.log(true && true); // Output: true
console.log(true && false); // Output: false

if (2 < 3 && 3 > 4) {
    console.log('first case'); // This won't execute
}

// Logical OR (||)
console.log(true || false); // Output: true

if (true || false) {
    console.log('first case'); // This will execute
}

// Logical NOT (!)
console.log(!true); // Output: false
console.log(!false); // Output: true

if (!false) {
    console.log('first case'); // This will execute
}
```

---

## 6. Bitwise Operators

Bitwise operators perform operations on binary representations of numbers.

### Examples:

```javascript
// Bitwise AND
console.log(5 & 1); // Output: 1

// Bitwise OR
console.log(5 | 1); // Output: 5

// Bitwise NOT
console.log(~5); // Output: -6

// Bitwise XOR
console.log(5 ^ 1); // Output: 4

// Right Shift
console.log(5 >> 1); // Output: 2

// Left Shift
console.log(5 << 1); // Output: 10
```

---

## 7. Type Operators

Type operators are used to check the type of a variable or object.

### Examples:

```javascript
// typeof
console.log(typeof 5); // Output: "number"
console.log(typeof "5"); // Output: "string"
console.log(typeof true); // Output: "boolean"

// instanceof
class myCar {}
let car = new myCar();
console.log(car instanceof myCar); // Output: true
console.log(car instanceof Object); // Output: true
```

---

## Summary

- **Arithmetic Operators**: Perform mathematical operations.
- **Assignment Operators**: Assign values to variables.
- **Comparison Operators**: Compare values and return a boolean.
- **String Operators**: Manipulate and compare strings.
- **Logical Operators**: Combine conditions and return a boolean.
- **Bitwise Operators**: Perform operations on binary numbers.
- **Type Operators**: Check the type of a variable or object.

By understanding these operators, you can effectively manipulate data and control the flow of your JavaScript programs.