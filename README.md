# JavaScript Study Material: Objects and Methods

## 1. Functions with Rest Parameters
The `...others` syntax is called the **rest parameter**. It allows a function to accept an indefinite number of arguments as an array.

### Code Example:
```javascript
function print(a, b, ...others) {
    console.log(a, b, others);
}

print(10, 30, 60, 40, 80, 888, 99);
// Output: 10 30 [60, 40, 80, 888, 99]
```

### Explanation:
- The function `print` takes two fixed parameters (`a` and `b`) and uses `...others` to collect all remaining arguments into an array.
- When calling `print(10, 30, 60, 40, 80, 888, 99)`:
  - `a` is assigned `10`.
  - `b` is assigned `30`.
  - `...others` collects the rest of the arguments (`60, 40, 80, 888, 99`) into an array.

---

## 2. Objects in JavaScript
Objects are collections of **key-value pairs**. Keys are strings, and values can be any data type, including functions.

### Creating an Object:
```javascript
let person = {
    name: "Sani",
    age: 20,
    city: "Dhaka"
};
```

### Explanation:
- The `person` object has three properties:
  - `name`: A string with the value `"Sani"`.
  - `age`: A number with the value `20`.
  - `city`: A string with the value `"Dhaka"`.

### Accessing Object Properties:
```javascript
console.log(person.name); // Output: Sani
console.log(person['age']); // Output: 20
```

### Explanation:
- You can access object properties using **dot notation** (`person.name`) or **bracket notation** (`person['age']`).
- Bracket notation is useful when the property name is dynamic or contains special characters.

### Updating Object Properties:
```javascript
person.name = "Saniyaj";
console.log(person.name); // Output: Saniyaj
```

### Explanation:
- You can update the value of an object property by assigning a new value to it.

### Deleting a Key-Value Pair:
```javascript
delete person.city;
console.log(person); // Output: { name: "Saniyaj", age: 20 }
```

### Explanation:
- The `delete` operator removes a property from an object.

---

## 3. Methods in Objects
Methods are functions stored as object properties. They can perform actions or calculations using the object's data.

### Adding a Method:
```javascript
let person = {
    name: "Sani",
    age: 20,
    city: "Dhaka",
    getAge: function (yob) {
        return 2024 - yob;
    }
};

let age = person.getAge(2001);
console.log(age); // Output: 23
```

### Explanation:
- The `getAge` method calculates the age based on the year of birth (`yob`).
- When `person.getAge(2001)` is called, it subtracts `2001` from `2024` and returns `23`.

---

## 4. The `this` Keyword
The `this` keyword refers to the **current object**. It is used to access properties and methods within the object.

### Code Example:
```javascript
let ex2 = {
    name: "Sani",
    born: 2001,
    city: "Dhaka",
    getAge: function () {
        return 2024 - this.born;
    }
};

let age = ex2.getAge();
console.log(age); // Output: 23
```

### Explanation:
- Inside the `getAge` method, `this.born` refers to the `born` property of the `ex2` object.
- `this` ensures that the method uses the correct object's data.

---

## 5. Nested Objects
Objects can contain other objects as properties. This is useful for representing hierarchical or complex data.

### Code Example:
```javascript
let car = {
    name: "BMW",
    model: "X5",
    year: 2020,
    owner: {
        name: "Sani",
        age: 20,
        city: "Dhaka"
    }
};

console.log(car.owner.name); // Output: Sani
```

### Explanation:
- The `car` object has a nested `owner` object.
- To access the `name` property of the `owner` object, use `car.owner.name`.

---

## 6. Sharing Methods Between Objects
You can use `call`, `apply`, and `bind` to share methods between objects.

### Using `call`:
```javascript
let mainPlain = {
    bookings: [],
    book: function (name, airLine, sit) {
        this.bookings.push({ name, sit, airLine });
    }
};

let childPlain = {
    bookings: []
};

mainPlain.book.call(childPlain, "sani", "airIndia", 1);
console.log(childPlain.bookings); // Output: [{ name: "sani", sit: 1, airLine: "airIndia" }]
```

### Explanation:
- `call` allows you to invoke a method from one object (`mainPlain.book`) in the context of another object (`childPlain`).
- The `this` keyword inside the `book` method now refers to `childPlain`.

### Using `apply`:
```javascript
mainPlain.book.apply(childPlain, ["sani", "airIndia", 1]);
console.log(childPlain.bookings); // Output: [{ name: "sani", sit: 1, airLine: "airIndia" }]
```

### Explanation:
- `apply` works like `call`, but it accepts arguments as an array.

### Using `bind`:
```javascript
function greeting() {
    console.log(this.user);
}

let obj2 = {
    user: "Shubha"
};

let greet = greeting.bind(obj2);
greet(); // Output: Shubha
```

### Explanation:
- `bind` creates a new function with `this` permanently set to the provided object (`obj2`).

---

## 7. Looping Through Objects
Use the `for...in` loop to iterate over object properties.

### Code Example:
```javascript
let person = {
    name: "Sani",
    age: 20,
    city: "Dhaka"
};

for (let key in person) {
    console.log(key, person[key]);
}
// Output:
// name Sani
// age 20
// city Dhaka
```

### Explanation:
- The `for...in` loop iterates over each key in the `person` object.
- `person[key]` accesses the value associated with the current key.

---

## 8. Object Methods
JavaScript provides built-in methods to work with objects.

### `Object.keys()`:
Returns an array of an object's keys.
```javascript
console.log(Object.keys(person)); // Output: ["name", "age", "city"]
```

### `Object.values()`:
Returns an array of an object's values.
```javascript
console.log(Object.values(person)); // Output: ["Sani", 20, "Dhaka"]
```

### `Object.entries()`:
Returns an array of key-value pairs.
```javascript
console.log(Object.entries(person));
// Output: [["name", "Sani"], ["age", 20], ["city", "Dhaka"]]
```

---

## 9. Object Immutability
### `Object.freeze()`:
Prevents modifications to an object.
```javascript
let obj3 = { id: 1 };
Object.freeze(obj3);
obj3.id = 2; // No effect
console.log(obj3.id); // Output: 1
```

### Explanation:
- Once an object is frozen, you cannot add, modify, or delete its properties.

### `Object.seal()`:
Prevents adding or deleting properties but allows modifying existing ones.
```javascript
let obj3 = { id: 1 };
Object.seal(obj3);
obj3.id = 2; // Allowed
delete obj3.id; // No effect
console.log(obj3.id); // Output: 2
```

### Explanation:
- `Object.seal()` allows you to modify existing properties but prevents structural changes (adding or deleting properties).

