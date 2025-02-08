# CSS Tutorial and examples

### **CSS Overview**

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of a web page.

---

### **VS Code Setup and Extensions**
- **VS Code Setup**: Download and install [Visual Studio Code](https://code.visualstudio.com/).
- **Useful Extensions**:
  - **Live Server**: Automatically reloads the page when you save changes.
  - **Prettier**: Formats your code for better readability.
  - **CSS Peek**: Allows you to peek into CSS definitions directly from HTML.
  - **IntelliSense for CSS**: Provides autocompletion for CSS properties and values.

---

### **Adding CSS to an HTML Page**
There are three ways to add CSS to an HTML page:
1. **Inline CSS**: Add styles directly to HTML elements using the `style` attribute.
   ```html
   <p style="color: red;">This is a red paragraph.</p>
   ```
2. **Internal CSS**: Add a `<style>` block in the `<head>` section of the HTML document.
   ```html
   <head>
     <style>
       p { color: blue; }
     </style>
   </head>
   ```
3. **External CSS**: Link an external `.css` file using the `<link>` tag.
   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   ```

---

### **CSS Selectors**
CSS selectors are used to target HTML elements for styling.
1. **Element Selector**: Targets all instances of a specific HTML element.
   ```css
   p { color: green; }
   ```
2. **Class Selector**: Targets elements with a specific class.
   ```css
   .highlight { background-color: yellow; }
   ```
3. **ID Selector**: Targets a single element with a specific ID.
   ```css
   #header { font-size: 24px; }
   ```
4. **Attribute Selector**: Targets elements with a specific attribute.
   ```css
   input[type="text"] { border: 1px solid #ccc; }
   ```
5. **Descendant Selector**: Targets elements nested within another element.
   ```css
   div p { color: blue; }
   ```
6. **Child Selector**: Targets direct children of an element.
   ```css
   ul > li { list-style: none; }
   ```
7. **Pseudo-classes**: Targets elements in a specific state.
   ```css
   a:hover { color: red; }
   ```
8. **Pseudo-elements**: Targets specific parts of an element.
   ```css
   p::first-letter { font-size: 2em; }
   ```

---

### **Colors in CSS**
- **Color Property**: Sets the text color.
  ```css
  p { color: #ff0000; }
  ```
- **Background Colors**: Sets the background color of an element.
  ```css
  body { background-color: #f0f0f0; }
  ```

---

### **Display Property**
- **Block**: Takes up the full width and starts on a new line.
  ```css
  div { display: block; }
  ```
- **Inline**: Takes up only as much width as necessary.
  ```css
  span { display: inline; }
  ```
- **Inline-block**: Combines block and inline properties.
  ```css
  button { display: inline-block; }
  ```
- **None**: Hides the element.
  ```css
  .hidden { display: none; }
  ```

---

### **CSS Units**
- **px**: Pixels (absolute unit).
  ```css
  p { font-size: 16px; }
  ```
- **rem**: Relative to the root element's font size.
  ```css
  p { font-size: 1.5rem; }
  ```
- **em**: Relative to the parent element's font size.
  ```css
  p { font-size: 1.2em; }
  ```
- **%**: Percentage of the parent element's size.
  ```css
  div { width: 50%; }
  ```

---

### **Styling Text**
- **Font Family**: Sets the font.
  ```css
  p { font-family: Arial, sans-serif; }
  ```
- **Font Size**: Sets the size of the text.
  ```css
  p { font-size: 18px; }
  ```
- **Font Weight**: Sets the boldness of the text.
  ```css
  p { font-weight: bold; }
  ```
- **Text Align**: Aligns text horizontally.
  ```css
  p { text-align: center; }
  ```
- **Text Decoration**: Adds decorations like underline.
  ```css
  a { text-decoration: none; }
  ```
- **Text Transform**: Changes text case.
  ```css
  p { text-transform: uppercase; }
  ```

---

### **Dimensions**
- **Width**: Sets the width of an element.
  ```css
  div { width: 300px; }
  ```
- **Height**: Sets the height of an element.
  ```css
  div { height: 200px; }
  ```

---

### **Box Model**
- **Content**: The actual content of the box.
- **Padding**: Space between the content and the border.
  ```css
  div { padding: 10px; }
  ```
- **Border**: The border around the padding.
  ```css
  div { border: 1px solid black; }
  ```
- **Margin**: Space outside the border.
  ```css
  div { margin: 20px; }
  ```

---

### **Borders**
- **Border Color**: Sets the border color.
  ```css
  div { border-color: red; }
  ```
- **Border Radius**: Rounds the corners of the border.
  ```css
  div { border-radius: 10px; }
  ```
- **Border Width**: Sets the thickness of the border.
  ```css
  div { border-width: 2px; }
  ```
- **Border Style**: Sets the style of the border.
  ```css
  div { border-style: dashed; }
  ```

---

### **CSS Variables**
CSS variables allow you to store reusable values.
```css
:root {
  --primary-color: #3498db;
}
p { color: var(--primary-color); }
```

---

### **List Styling**
- **List Style**: Sets the style of list items.
  ```css
  ul { list-style: square; }
  ```
- **List Style Image**: Uses an image as the list marker.
  ```css
  ul { list-style-image: url('bullet.png'); }
  ```

---

### **Styling Forms**
- **Styling Form Elements**:
  ```css
  input[type="text"] { padding: 10px; }
  ```
- **:focus and :hover States**:
  ```css
  input:focus { border-color: blue; }
  button:hover { background-color: #ccc; }
  ```

---

### **CSS Positions**
- **Relative**: Positions relative to its normal position.
  ```css
  div { position: relative; top: 10px; }
  ```
- **Absolute**: Positions relative to the nearest positioned ancestor.
  ```css
  div { position: absolute; top: 0; }
  ```
- **Fixed**: Positions relative to the viewport.
  ```css
  div { position: fixed; top: 0; }
  ```
- **Sticky**: Toggles between relative and fixed based on scroll position.
  ```css
  div { position: sticky; top: 0; }
  ```

---

### **Filters**
- **Brightness**: Adjusts brightness.
  ```css
  img { filter: brightness(150%); }
  ```
- **Contrast**: Adjusts contrast.
  ```css
  img { filter: contrast(200%); }
  ```
- **Blur**: Applies a blur effect.
  ```css
  img { filter: blur(5px); }
  ```
- **Grayscale**: Converts to grayscale.
  ```css
  img { filter: grayscale(100%); }
  ```

---

### **CSS Background**
- **Background Color**: Sets the background color.
  ```css
  body { background-color: #f0f0f0; }
  ```
- **Background Image**: Sets a background image.
  ```css
  body { background-image: url('bg.jpg'); }
  ```
- **Background Repeat**: Controls image repetition.
  ```css
  body { background-repeat: no-repeat; }
  ```
- **Background Position**: Sets the position of the image.
  ```css
  body { background-position: center; }
  ```
- **Background Size**: Sets the size of the image.
  ```css
  body { background-size: cover; }
  ```
- **Gradient**: Creates a gradient background.
  ```css
  body { background: linear-gradient(to right, red, yellow); }
  ```

---

### **CSS Flexbox**
- **Flex Container and Items**:
  ```css
  .container { display: flex; }
  ```
- **Flex Direction**: Sets the direction of flex items.
  ```css
  .container { flex-direction: column; }
  ```
- **Flex Grow, Shrink, and Basis**:
  ```css
  .item { flex: 1 1 auto; }
  ```

---

### **CSS Grid**
- **Grid Container and Items**:
  ```css
  .container { display: grid; }
  ```
- **Grid Columns and Rows**:
  ```css
  .container { grid-template-columns: 1fr 1fr; }
  ```
- **Grid Template Areas**:
  ```css
  .container { grid-template-areas: "header header" "main sidebar"; }
  ```

---

### **Transitions**
- **Property**: Specifies the CSS property to transition.
  ```css
  div { transition: background-color 0.5s; }
  ```
- **Duration**: Sets the duration of the transition.
  ```css
  div { transition-duration: 1s; }
  ```
- **Timing Function**: Controls the speed curve.
  ```css
  div { transition-timing-function: ease-in; }
  ```
- **Delay**: Sets a delay before the transition starts.
  ```css
  div { transition-delay: 0.5s; }
  ```

---

### **Transforms**
- **Translate**: Moves an element.
  ```css
  div { transform: translate(50px, 100px); }
  ```
- **Rotate**: Rotates an element.
  ```css
  div { transform: rotate(45deg); }
  ```
- **Scale**: Scales an element.
  ```css
  div { transform: scale(1.5); }
  ```

---

### **Animations**
- **Keyframes**: Defines the animation sequence.
  ```css
  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
  }
  ```
- **Animation Properties**: Applies the animation.
  ```css
  div { animation: slide 2s infinite; }
  ```

---

### **Media Queries**
- **Max Screen Size**: Applies styles for screens smaller than a specific size.
  ```css
  @media (max-width: 768px) {
    body { font-size: 14px; }
  }
  ```
- **Min Screen Size**: Applies styles for screens larger than a specific size.
  ```css
  @media (min-width: 1024px) {
    body { font-size: 18px; }
  }
  ```

---

### **Responsive Project Example**
Here’s a simple responsive layout using Flexbox and Media Queries:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Layout</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
    }
    .box {
      flex: 1 1 200px;
      margin: 10px;
      padding: 20px;
      background-color: #f0f0f0;
      text-align: center;
    }
    @media (max-width: 768px) {
      .box {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>
```

This layout adjusts the number of columns based on the screen size. On smaller screens, the boxes stack vertically.