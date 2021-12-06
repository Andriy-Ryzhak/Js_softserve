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
    if (i % 2) {
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
    const a = prompt("enter 1 number"),
          b = prompt("enter 2 number");
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
    let result = [];
  
    for (let num of arr) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    return result;
  }
  let number = [1, 2, 3, 5, 3];
      numbers = [1, 2, 3, 5, 11];
  
  console.log( findUnique(number) );
  console.log( findUnique(numbers) );

// Task 7
let lastElem = [3, 4, 10, -5]
let last_element = lastElem[lastElem.length - 1];
    console.log(last_element);

// Task 8

let str = "i love java script";  
function capitalize(str) {
 return str.replace(/(^|\s)\S/g, function(a) {
   return a.toUpperCase();
  });
}
console.log(capitalize(str));