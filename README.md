
# **HTML Notes with Code Examples**

## **Introduction to HTML**
### **What is HTML?**
- HTML (HyperText Markup Language) is the standard language for creating web pages.
- It structures the content on the web.

### **Why do we need HTML?**
- It defines the structure of web pages.
- It allows embedding of text, images, videos, and links.
- It enables communication between web pages and users.

### **Setting up the Environment**
To start writing HTML, you need:
1. **A Text Editor** – Use VS Code, Sublime Text, or Notepad++.
2. **A Web Browser** – Chrome, Firefox, or Edge.
3. **VS Code Extensions (Recommended)**:
   - Live Server (for real-time preview)
   - HTML Snippets (for faster coding)

---

## **Basic Structure of an HTML Document**
Every HTML document follows a standard structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
    <link rel="stylesheet" href="style.css"> <!-- Adding CSS -->
    <script src="script.js"></script> <!-- Adding JavaScript -->
</head>
<body>
    <h1>Welcome to HTML</h1>
</body>
</html>
```

### **HTML Structure Components**
1. `<!DOCTYPE html>` → Declares the document type.
2. `<html>` → The root element of an HTML page.
3. `<head>` → Contains metadata, title, CSS, and scripts.
4. `<title>` → Sets the title of the web page.
5. `<body>` → Contains the visible content of the page.

---

## **HTML Heading Tags**
Headings define the importance of content.  
There are **six levels** of headings in HTML.

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```
- `<h1>` is the most important (largest text).
- `<h6>` is the least important (smallest text).

---

## **HTML Paragraphs**
Paragraphs are defined using `<p>`.

```html
<p>This is a simple paragraph.</p>
```

### **Attributes of `<p>`**
- **`align`** → Aligns text (deprecated, use CSS instead).
- **`style`** → Adds inline styles.

```html
<p style="color:blue; text-align:center;">This is a blue, centered paragraph.</p>
```

---

## **HTML Images**
Images are added using the `<img>` tag.

```html
<img src="image.jpg" alt="Description of Image" width="300" height="200">
```

### **Attributes of `<img>`**
- **`src`** → Image path or URL.
- **`alt`** → Alternate text for accessibility.
- **`width` & `height`** → Define image dimensions.

---

## **HTML Lists**
Lists are used to group related items.

### **Ordered List (`<ol>`)**
An ordered list displays items in a **numbered format**.

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

### **Unordered List (`<ul>`)**
An unordered list displays items in a **bulleted format**.

```html
<ul>
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ul>
```

### **Nested Lists**
Lists can be nested inside each other.

```html
<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrot</li>
            <li>Spinach</li>
        </ul>
    </li>
</ul>
```

### **List Attributes**
- **`type`** → Defines list style (For `<ol>`: 1, A, a, I, i).
- **`start`** → Specifies the start number in an ordered list.

```html
<ol type="A" start="3">
    <li>Third Item</li>
    <li>Fourth Item</li>
</ol>
```

---

This guide provides a strong foundation for HTML basics. Let me know if you need additional explanations or examples! 🚀

## 🔹 **Table**
An HTML table is created using the `<table>` element. It consists of rows (`<tr>`), headers (`<th>`), and data cells (`<td>`). Here's a simple example:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Table Example</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

    <h2>Sample Table</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Saniyaj</td>
                <td>23</td>
                <td>Kolkata</td>
            </tr>
            <tr>
                <td>John</td>
                <td>25</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>Ayesha</td>
                <td>22</td>
                <td>Mumbai</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
```

### Explanation:
- `<table>`: Defines the table.
- `<thead>`: Contains the header row (`<tr>`) with column headers (`<th>`).
- `<tbody>`: Contains the table data rows (`<tr>`) with data cells (`<td>`).
- `border-collapse: collapse;` ensures the borders are merged for a cleaner look.
- `th { background-color: #f2f2f2; }` adds a light background to headers.



## 🔹 **Meta Tags for SEO**  
Meta tags are HTML elements that provide metadata (information about a webpage) to search engines and browsers. They help improve SEO and user experience.

---

## 📌 **Essential Meta Tags for SEO**
### **1️⃣ Title Tag (`<title>`)**  
Defines the page title, displayed in search results and browser tabs.  
**✅ Best Practice:** Keep it under **60 characters** and include primary keywords.  

```html
<title>Best SEO Practices for Websites | Your Brand</title>
```

---

### **2️⃣ Meta Description (`<meta name="description">`)**  
Summarizes the webpage content, appearing in search engine results.  
**✅ Best Practice:** Keep it under **160 characters**, include keywords naturally, and make it engaging.

```html
<meta name="description" content="Learn the best SEO practices, including meta tags, keyword optimization, and technical SEO tips to rank higher on search engines.">
```

---

### **3️⃣ Meta Keywords (`<meta name="keywords">`)** *(Optional – Not used by Google)*  
Used in the past for listing relevant keywords, but now ignored by Google due to spam abuse.  

```html
<meta name="keywords" content="SEO, meta tags, search engine optimization, digital marketing">
```

---

### **4️⃣ Viewport Meta Tag (For Mobile Responsiveness)**  
Ensures proper scaling on mobile devices, improving mobile SEO.  

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---




### 🔹 **HTML Form Attributes & Properties**  
HTML forms use attributes and properties to define behavior, validation, and interactions with users and servers.

---

## 📌 **1️⃣ `<form>` Element Attributes**
These attributes control the form’s behavior.

| Attribute | Description | Example |
|-----------|------------|---------|
| `action` | Specifies the URL where form data will be sent. | `<form action="/submit">` |
| `method` | Defines the HTTP method (`GET` or `POST`). | `<form method="POST">` |
| `target` | Specifies where to open the response (`_self`, `_blank`, `_parent`, `_top`). | `<form target="_blank">` |
| `enctype` | Used for file uploads (`multipart/form-data`). | `<form enctype="multipart/form-data">` |
| `autocomplete` | Enables (`on`) or disables (`off`) autofill. | `<form autocomplete="off">` |
| `novalidate` | Disables built-in validation. | `<form novalidate>` |

---

## 📌 **2️⃣ `<input>` Element Attributes**
These attributes define behavior and validation for form fields.

| Attribute | Description | Example |
|-----------|------------|---------|
| `type` | Specifies the input type (`text`, `email`, `password`, `file`, etc.). | `<input type="email">` |
| `name` | Identifies the input field for form submission. | `<input name="username">` |
| `value` | Sets a default value. | `<input value="Saniyaj">` |
| `placeholder` | Provides a hint to users. | `<input placeholder="Enter your name">` |
| `required` | Makes the field mandatory. | `<input required>` |
| `disabled` | Disables input. | `<input disabled>` |
| `readonly` | Makes the field uneditable. | `<input readonly>` |
| `maxlength` | Limits character input. | `<input maxlength="10">` |
| `min` & `max` | Sets a range for numbers or dates. | `<input type="number" min="1" max="100">` |
| `pattern` | Defines a regex pattern for validation. | `<input type="text" pattern="[A-Za-z]{3,10}">` |
| `autocomplete` | Enables (`on`) or disables (`off`) autofill for a field. | `<input autocomplete="off">` |

---

## 📌 **3️⃣ `<button>` Element Attributes**
| Attribute | Description | Example |
|-----------|------------|---------|
| `type` | Defines button behavior (`submit`, `reset`, `button`). | `<button type="submit">Submit</button>` |
| `disabled` | Disables the button. | `<button disabled>Click Me</button>` |

---

## 📌 **4️⃣ Form Properties (JavaScript)**
JavaScript can manipulate form elements dynamically.

| Property | Description | Example |
|-----------|------------|---------|
| `document.forms` | Gets all forms in a document. | `console.log(document.forms);` |
| `form.elements` | Gets all elements inside a form. | `console.log(document.forms[0].elements);` |
| `form.submit()` | Submits the form using JavaScript. | `document.forms[0].submit();` |
| `form.reset()` | Resets all form fields. | `document.forms[0].reset();` |
| `input.value` | Gets or sets input values. | `document.getElementById('name').value = 'Saniyaj';` |
| `input.focus()` | Moves cursor to an input field. | `document.getElementById('name').focus();` |

---

## 🚀 **Example: HTML Form with Attributes**
```html
<form action="/submit" method="POST" enctype="multipart/form-data" autocomplete="on">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="60">

    <label for="resume">Upload Resume:</label>
    <input type="file" id="resume" name="resume" required>


     <label><input type="radio" name="gender" value="male"> Male</label>
    <label><input type="radio" name="gender" value="female"> Female</label>
    <label><input type="radio" name="gender" value="other"> Other</label>
    <input type="radio" name="gender" value="male" checked>


<label><input type="checkbox" name="hobby" value="reading"> Reading</label>
    <label><input type="checkbox" name="hobby" value="music"> Music</label>
    <label><input type="checkbox" name="hobby" value="sports"> Sports</label>
    <input type="checkbox" name="hobby" value="music" checked>


    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>
```

Would you like a JavaScript validation example too? 😊



### 🔹 **Inline vs. Block Elements in HTML**  

HTML elements are categorized into **block** and **inline** elements based on how they behave in a document.

---

## 📌 **1️⃣ Block Elements**
Block elements **take up the full width** available and **start on a new line** by default.

### ✅ **Examples of Block Elements**  
```html
<div>This is a block element</div>
<p>This is a paragraph</p>
<h1>Heading 1</h1>
<section>This is a section</section>
```

### 🔥 **Key Features**
✔ Always **start on a new line**  
✔ Take up **full width** of the parent container  
✔ Can contain **both block and inline** elements  

### **Common Block Elements**
| Element | Description |
|---------|------------|
| `<div>` | Generic container for grouping elements |
| `<p>` | Defines a paragraph |
| `<h1>` to `<h6>` | Headings |
| `<section>` | Defines a section of content |
| `<article>` | Defines independent content |
| `<header>` | Header section of a page or section |
| `<footer>` | Footer section of a page or section |
| `<nav>` | Navigation links |
| `<aside>` | Sidebar content |

---

## 📌 **2️⃣ Inline Elements**
Inline elements **do not start on a new line** and **only take up as much width as needed**.

### ✅ **Examples of Inline Elements**  
```html
<p>This is a <span>inline</span> element.</p>
<a href="#">This is a link</a>
<strong>Bold Text</strong>
```

### 🔥 **Key Features**
✔ **Do not start on a new line**  
✔ Take up **only the space needed**  
✔ Can contain **only other inline elements**  

### **Common Inline Elements**
| Element | Description |
|---------|------------|
| `<a>` | Defines a hyperlink |
| `<span>` | Used for styling parts of text |
| `<strong>` | Bold text (semantically important) |
| `<em>` | Italicized text |
| `<img>` | Displays an image |
| `<input>` | Inline form field |
| `<label>` | Labels for form inputs |
| `<code>` | Displays inline code |

---

## 📌 **3️⃣ Key Differences Between Block & Inline Elements**
| Feature | Block Elements | Inline Elements |
|---------|---------------|----------------|
| New Line | Starts on a new line | Stays in the same line |
| Width | Takes full width of the parent | Takes only as much width as needed |
| Height | Can be adjusted | Only affects content height |
| Content | Can contain both block and inline elements | Can only contain inline elements |
| Example | `<div>`, `<p>`, `<h1>` | `<span>`, `<a>`, `<strong>` |

---

## 📌 **4️⃣ Example: Block vs. Inline**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .block {
            background: lightblue;
            padding: 10px;
            margin: 5px;
        }
        .inline {
            background: lightcoral;
            padding: 5px;
        }
    </style>
</head>
<body>

    <h2>Block Element:</h2>
    <div class="block">This is a block element (div)</div>
    <p class="block">This is a block paragraph</p>

    <h2>Inline Element:</h2>
    <span class="inline">This is an inline span</span>
    <a href="#" class="inline">This is an inline link</a>

</body>
</html>
```
---




### 🎵 **Audio, Video, and Canvas in HTML** 🎥🎨  

HTML provides built-in elements to embed **audio**, **video**, and **graphics** without requiring external plugins.

---

## 📌 **1️⃣ Audio (`<audio>`)** 🎵  

The `<audio>` element is used to play audio files.  

### ✅ **Example: Embedding an Audio File**  
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

### 🔥 **Attributes of `<audio>`**
| Attribute  | Description |
|------------|------------|
| `controls` | Shows play, pause, and volume controls |
| `autoplay` | Plays automatically when the page loads (may be blocked by browsers) |
| `loop` | Repeats the audio when finished |
| `muted` | Starts the audio in a muted state |
| `preload` | Controls how audio loads: `auto`, `metadata`, `none` |

---

## 📌 **2️⃣ Video (`<video>`)** 🎥  

The `<video>` element is used to play videos.

### ✅ **Example: Embedding a Video File**  
```html
<video width="400" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
```

### 🔥 **Attributes of `<video>`**
| Attribute  | Description |
|------------|------------|
| `controls` | Shows video player controls |
| `autoplay` | Plays automatically (may be blocked by browsers) |
| `loop` | Repeats the video |
| `muted` | Starts the video muted |
| `poster` | Shows an image before the video loads |
| `preload` | Loads video data in advance (`auto`, `metadata`, `none`) |

### 🎬 **Example with Poster Image**
```html
<video width="400" controls poster="poster.jpg">
    <source src="movie.mp4" type="video/mp4">
</video>
```

---

## 📌 **3️⃣ Canvas (`<canvas>`)** 🎨  

The `<canvas>` element is used for **drawing graphics** using JavaScript.

### ✅ **Example: Drawing a Red Rectangle**  
```html
<canvas id="myCanvas" width="300" height="200" style="border:1px solid black;"></canvas>

<script>
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    // Draw a red rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 150, 100);
</script>
```


# 🌟 **Semantic Tags in HTML**  

Semantic HTML refers to **meaningful** tags that clearly describe their **purpose and content**. Using semantic elements improves **SEO**, **accessibility**, and **code readability**.  

---

## 📌 **1️⃣ What are Semantic Tags?**  
Semantic tags **describe the structure of a webpage** in a meaningful way.  

### ✅ **Example: Non-Semantic vs. Semantic**
```html
<!-- ❌ Non-Semantic: No meaning -->
<div id="header">Header Content</div>
<div id="nav">Navigation Links</div>
<div id="main">Main Content</div>
<div id="footer">Footer Content</div>

<!-- ✅ Semantic: Meaningful -->
<header>Header Content</header>
<nav>Navigation Links</nav>
<main>Main Content</main>
<footer>Footer Content</footer>
```

---

## 📌 **2️⃣ Common Semantic Tags & Their Uses**
| Tag | Purpose |
|-----|---------|
| `<header>` | Represents the **top section** of a webpage, usually contains the logo, site title, and navigation |
| `<nav>` | Defines a **navigation menu** (links to other pages or sections) |
| `<main>` | Contains the **main content** of the webpage |
| `<article>` | Represents **independent, self-contained content** (e.g., blog posts, news articles) |
| `<section>` | Defines a **section** of content (e.g., features, testimonials, services) |
| `<aside>` | Used for **side content** (e.g., advertisements, sidebars, widgets) |
| `<footer>` | Defines the **footer** section (e.g., contact info, copyright, links) |
| `<figure>` | Groups media content like **images, videos, or diagrams** |
| `<figcaption>` | Provides a **caption** for `<figure>` content |
| `<mark>` | Highlights text inside content |
| `<time>` | Represents a specific **date or time** |

---

## 📌 **3️⃣ Example: Semantic HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>

    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>About Us</h2>
            <p>We provide the best content on semantic HTML.</p>
        </section>

        <article>
            <h2>Blog Post Title</h2>
            <p>Published on <time datetime="2025-01-29">January 29, 2025</time></p>
            <p>This is a sample blog post.</p>
        </article>

        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">HTML Guide</a></li>
                <li><a href="#">CSS Tips</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

## 📌 **4️⃣ Benefits of Semantic HTML**
✅ **Improved SEO** – Search engines better understand your content.  
✅ **Better Accessibility** – Screen readers interpret the content more accurately.  
✅ **Easier Maintenance** – Code is cleaner and easier to read.  
✅ **Better Browser Support** – Works well across all modern browsers.  

---
#