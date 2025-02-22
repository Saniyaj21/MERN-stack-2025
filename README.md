# JavaScript Study Material: Strings and String Methods

## 1. Strings in JavaScript
Strings are sequences of characters used to represent text. In JavaScript, strings can be created using:
- **String literals**: `let str = "Any String";`
- **String constructor**: `let str2 = new String("Any String");`

### Code Example:
```javascript
let str = "Any String";
let str3 = "Any String";
console.log(str === str3); // Output: true

let str2 = new String("Any String");
console.log(str === str2); // Output: false
```

### Explanation:
- `str` and `str3` are string literals with the same value, so `str === str3` is `true`.
- `str2` is created using the `String` constructor, which creates an object. Even though the value is the same, `str === str2` is `false` because one is a primitive and the other is an object.

---

## 2. Escape Characters
Escape characters are used to include special characters in strings.

### Code Example:
```javascript
console.log('Hello\nWorld'); // Output: Hello
                             //         World

console.log('Hello\tWorld'); // Output: Hello    World
console.log('Hello\\World'); // Output: Hello\World
```

### Explanation:
- `\n`: Inserts a new line.
- `\t`: Inserts a tab space.
- `\\`: Inserts a backslash.

---

## 3. String Template (Template Literals)
Template literals allow you to embed expressions inside strings using backticks (`` ` ``).

### Code Example:
```javascript
let name = 'Sani';
console.log(`Hello, ${name}!`); // Output: Hello, Sani!
```

### Explanation:
- The expression `${name}` is evaluated and inserted into the string.

---

## 4. String Methods
JavaScript provides many built-in methods to manipulate strings.

### `length`
Returns the length of the string.

```javascript
let a = "This is a string";
console.log(a.length); // Output: 16
```

### `charAt()`
Returns the character at a specific index.

```javascript
console.log(a.charAt(3)); // Output: s
```

### `charCodeAt()`
Returns the ASCII value of the character at a specific index.

```javascript
console.log(a.charCodeAt(3)); // Output: 115 (ASCII value of 's')
```

### `at()`
Returns the character at a specific index (similar to `charAt` but supports negative indices).

```javascript
console.log(a.at(2)); // Output: i
```

### `String[]`
Accesses a character at a specific index using array-like notation.

```javascript
console.log(b[6]); // Output: s
```

---

## 5. String Slicing and Splitting

### `slice()`
Extracts a portion of a string and returns it as a new string.

```javascript
let slicePart = b.slice(1, 4); // Output: his
let slicePartNegative = b.slice(-4); // Output: ring (last 4 characters)
```

### `split()`
Splits a string into an array of substrings based on a separator.

```javascript
let splitPart = "my, name, is, sani".split(',', 3); // Output: ["my", " name", " is"]
```

### Explanation:
- The first argument is the separator (`,` in this case).
- The second argument limits the number of splits.

---

## 6. Substring and Substr

### `substring()`
Extracts a portion of a string between two indices.

```javascript
let substringPart = b.substring(-1, 4); // Output: This (negative index is treated as 0)
```

### `substr()`
Extracts a portion of a string starting from an index for a specified length.

```javascript
let substrPart = b.substr(1, 5); // Output: his i
```

---

## 7. Case Conversion

### `toUpperCase()`
Converts a string to uppercase.

```javascript
console.log("small".toUpperCase()); // Output: SMALL
```

### `toLowerCase()`
Converts a string to lowercase.

```javascript
console.log("BIG".toLowerCase()); // Output: big
```

---

## 8. String Concatenation

### Using `+` Operator:
```javascript
let p = "one ";
let q = "two ";
let concat = p + q;
console.log(concat); // Output: one two
```

### Using `concat()` Method:
```javascript
console.log(p.concat(q)); // Output: one two
```

---

## 9. Trimming Whitespace

### `trim()`
Removes whitespace from both ends of a string.

```javascript
let s = "   hello world   ";
console.log(s.trim()); // Output: hello world
```

### `trimStart()`
Removes whitespace from the start of a string.

```javascript
console.log(s.trimStart()); // Output: hello world   
```

### `trimEnd()`
Removes whitespace from the end of a string.

```javascript
console.log(s.trimEnd()); // Output:    hello world
```

---

## 10. Searching in Strings

### `search()`
Returns the index of the first match of a substring.

```javascript
console.log(s.search("hello")); // Output: 3
console.log(s.search("WORLD")); // Output: -1 (not found)
```

---

## 11. Padding Strings

### `padStart()`
Pads the start of a string with a specified character until it reaches a given length.

```javascript
let str4 = "123";
console.log(str4.padStart(5, '@')); // Output: @@123
```

### `padEnd()`
Pads the end of a string with a specified character until it reaches a given length.

```javascript
console.log(str4.padEnd(5, '@')); // Output: 123@@
```

---

## 12. Repeating Strings

### `repeat()`
Repeats a string a specified number of times.

```javascript
console.log("repeat ".repeat(5)); // Output: repeat repeat repeat repeat repeat
```

---

## 13. Replacing Substrings

### `replace()`
Replaces the first occurrence of a substring with another string.

```javascript
let str5 = "Hello, World!";
console.log(str5.replace("World", "Sani")); // Output: Hello, Sani!
```

---

## 14. Matching Substrings

### `match()`
Searches a string for a match against a regular expression and returns the matches.

```javascript
let str6 = "Hello, World! Hello, Sani!";
console.log(str6.match("Sani")); // Output: ["Sani"]
```

---

## 15. Looping Through Strings

### Using a `for` Loop:
```javascript
for (let i = 0; i < str6.length; i++) {
    console.log(str6[i]);
}
```

### Explanation:
- The loop iterates through each character of the string and prints it.

---

## Summary of Key Concepts
1. **Strings**: Created using literals or the `String` constructor.
2. **Escape Characters**: Used to include special characters in strings.
3. **Template Literals**: Allow embedding expressions in strings.
4. **String Methods**:
   - `length`, `charAt`, `charCodeAt`, `at`, `slice`, `split`, `substring`, `substr`, `toUpperCase`, `toLowerCase`, `concat`, `trim`, `search`, `padStart`, `padEnd`, `repeat`, `replace`, `match`.
5. **Looping Through Strings**: Use a `for` loop to iterate through each character.

