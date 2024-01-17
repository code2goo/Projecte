# Array Method .sort

#### 1. Sort in decreasing order
* create a variable named `arr` and assign an array of numbers to it
* Write code that sorts that array in descending order (highest to lowest)
* Print the sorted array to the console

```js 
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in descending order

console.log( arr ); // 8, 5, 2, 1, -10
``` 

#### 2. We have an array of strings `array`. We’d like to have a sorted copy of it, but keep `array` unmodified.

* Create a function `copySorted(arr)` that returns such a copy.

```js
let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)
```