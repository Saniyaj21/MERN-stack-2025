# JavaScript Study Material: Loops and Conditionals

## 1. Loops in JavaScript
Loops are used to execute a block of code repeatedly. JavaScript supports three types of loops:
- **`for` loop**
- **`while` loop**
- **`do...while` loop**

---

### `for` Loop
The `for` loop is used when you know how many times you want to repeat a block of code.

#### Code Example:
```javascript
for (var i = 0; i < 8; i++) {
    console.log(i);
}
```

#### Explanation:
- **Initialization**: `var i = 0` initializes the loop variable `i` to `0`.
- **Condition**: `i < 8` specifies the condition for the loop to continue.
- **Increment**: `i++` increments `i` by `1` after each iteration.
- The loop runs 8 times, printing numbers from `0` to `7`.

---

### `while` Loop
The `while` loop is used when you want to repeat a block of code as long as a condition is true.

#### Code Example:
```javascript
var i = 0;
while (i < 8) {
    console.log(i);
    i++;
}
```

#### Explanation:
- The loop starts with `i = 0`.
- The condition `i < 8` is checked before each iteration.
- If the condition is true, the loop body executes, and `i` is incremented by `1`.
- The loop stops when `i` becomes `8`.

---

### `do...while` Loop
The `do...while` loop is similar to the `while` loop, but it guarantees that the loop body executes at least once.

#### Code Example:
```javascript
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 8);
```

#### Explanation:
- The loop body executes first, printing `i` and incrementing it.
- After the first iteration, the condition `i < 8` is checked.
- The loop continues as long as the condition is true.

---

## 2. `break` and `continue`
- **`break`**: Exits the loop immediately.
- **`continue`**: Skips the current iteration and moves to the next one.

### `break` Example:
```javascript
for (var i = 0; i < 8; i++) {  
    if (i == 5) { 
        break;
    }
    console.log(i);
}
// Output: 0 1 2 3 4
```

#### Explanation:
- The loop stops when `i` equals `5` because of the `break` statement.

### `continue` Example:
```javascript
for (var i = 0; i < 8; i++) {  
    if (i == 5) { 
        continue;
    }
    console.log(i);
}
// Output: 0 1 2 3 4 6 7
```

#### Explanation:
- The loop skips the iteration where `i` equals `5` because of the `continue` statement.

---

## 3. Conditional Statements
Conditional statements allow you to execute different blocks of code based on conditions.

### `if...else` Statement
The `if...else` statement evaluates a condition and executes a block of code if the condition is true. Otherwise, it executes the `else` block.

#### Code Example:
```javascript
let n = 2;
if (n == 2) {
    console.log("Hellow");
} else if (n == 1) {
    console.log("Hi", n);
} else {
    console.log("Not Found");
}
// Output: Hellow
```

#### Explanation:
- The condition `n == 2` is true, so the `if` block executes.
- If `n` were `1`, the `else if` block would execute.
- If neither condition is true, the `else` block executes.

---

### `switch` Statement
The `switch` statement is used to execute one of many code blocks based on the value of an expression.

#### Code Example:
```javascript
switch (n) {
    case 1:
        console.log("Hi from switch", n);
        break;
    case 2:
        console.log("Hellow");
        break;
    default:
        console.log("Not Found from switch", n);
        break;
}
// Output: Hellow
```

#### Explanation:
- The `switch` statement checks the value of `n`.
- If `n` matches a `case` value (e.g., `2`), the corresponding block executes.
- The `break` statement exits the `switch` block after a match is found.
- If no match is found, the `default` block executes.

---

## 4. Ternary Operator
The ternary operator is a shorthand for the `if...else` statement. It takes three operands:
1. A condition.
2. A value to return if the condition is true.
3. A value to return if the condition is false.

#### Code Example:
```javascript
let price = 50;
let result = price > 20 ? "True" : "False";
console.log(result); // Output: True
```

#### Explanation:
- The condition `price > 20` is true, so the ternary operator returns `"True"`.

---

### Ternary Operator for Age Check
```javascript
let age = 19;
let result1 = age >= 18 ? "Eligible for driving" : "Not Eligible for driving";
console.log(result1); // Output: Eligible for driving
```

#### Explanation:
- The condition `age >= 18` is true, so the ternary operator returns `"Eligible for driving"`.

---

## Summary of Key Concepts
1. **Loops**:
   - `for` loop: Use when the number of iterations is known.
   - `while` loop: Use when the number of iterations is unknown.
   - `do...while` loop: Use when the loop body must execute at least once.
2. **`break` and `continue`**:
   - `break`: Exits the loop.
   - `continue`: Skips the current iteration.
3. **Conditional Statements**:
   - `if...else`: Executes a block of code based on a condition.
   - `switch`: Executes one of many blocks based on a value.
4. **Ternary Operator**:
   - A shorthand for `if...else` that returns a value based on a condition.

