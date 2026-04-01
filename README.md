# JavaScript Micro Demo

A JavaScript webpage demonstrating built-in objects and methods for COMP 484 Homework 9.

## GitHub Pages Link

[[GitHub Pages](https://github.com/adamurban04/comp484-hw9-main)]

## Screenshot

![Screenshot](screenshot.png)

## Built-In Objects and Methods Used

### Date Object
- `new Date()`
- `getMonth()`
- `getDate()` 
- `getFullYear()`

### Number Object
- `Number()` 
- `Number.isNaN()`
- `Number.isInteger()` 
- `toFixed()`

### DOM Methods
- `document.getElementById()`
- `.textContent`
- `.innerHTML`

## Reflection

The easiest part of this assignment was the math section, as I chose to calculate a grade score average, which is just basic algebra.
I found understanding the DOM to be the most challenging.
I learned that in the `Date` object, the month is 0-indexed, while day and year are not.
I also learned that the `Number` object can convert strings to both decimals and integers, and we can use methods like `isInteger()` and `isNaN()` to check the result.
Finally, I learned that displaying results in the browser requires selecting an HTML element first and then modifying its `.textContent` or `.innerHTML` property.

## Extra Credit: typeof Type Identification

Added a fourth section that uses the `typeof` operator to identify the type of six different values.
