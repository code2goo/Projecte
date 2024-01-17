//Sort in decreasing order
//1 
function decreasing(a, b) {
  if (a > b )    return -1; 
  if (a < b )    return 1; 
  if (a == b )    return 0;
}
let arr = [5, 2, 1, 10, 8];
console.log(arr.sort(decreasing));
// Or
arr.sort((a, b) => b-a);
// **** 


7
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.



//2
//We can use slice() to make a copy and run the sort on it:

function copySorted (array) {
     return  array.slice().sort();
}

  let array = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(array);
 
  console.log(copySorted(array));
  console.log( array );
