 "use strict";

// Task 1
// for
let Array = [2, 3, 4, 5];
let total = 1;
for (let i = 0; i < Array.length; ++i) {
    total *= Array[i];
}
console.log(total);

// while
let array = [2, 3, 4, 5];
let value = 1;
let i = 0;
while (i < array.length) {
    value *= array[i];
    i++;
}
console.log(value);

// Task 2

for (let i = 0; i <= 15; i++) { 
    if (i % 2 == 0) {
        console.log(i + " is odd");
    } else {
        console.log(i + " is even");
    }
  }


// Task 3
function randArray(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push(randArray(1, 500) );
  }
  console.log(array);

// Task 4 

function raiseToDegree() {
    const a = prompt("enter 1 number",""),
          b = prompt("enter 2 number","");
     if (Number.isInteger(a) && Number.isInteger(b)){
         console.log("Use integer number, please");
      }
    let val = a**b;
    return(val);
  }
  raiseToDegree();

// Task 5 
let arr = [12, 14, 4, -4, 0.2];
function findMin() {
  console.log(Math.min(...arr));
}
 findMin();

// Task 6

function findUnique(arr) {
  let x = arr.length;
  for (let i = 0; i < x; i++) {
    for (let j = (i + 1); j < x; j++) { 
      if (arr [i] === arr [j]) {
       return false; 
      }
   }
  }
  return true;
}
console.log (findUnique ([1, 2, 3, 5, 3]));
console.log (findUnique([1, 2, 3, 5, 11]));  

// Task 7
function lastElem(arr, count) {
  if (count == 0 || isNaN(count)) return arr[arr.length - 1];
  if (count >= arr.length) return arr;

  return arr.slice(-Math.abs(count));
}

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));

// Task 8

let str = "i love java script";  
function capitalize(str) {
 return str.replace(/(^|\s)\S/g, function(a) {
   return a.toUpperCase();
  });
}
console.log(capitalize(str));
