"use strict";

// Task 1
function calcRectangleArea() {
    let a = prompt("enter a width",""),
        b = prompt("enter a height","");
    let value = a*b;
        if (isNaN(value)) {
          throw new Error ("Error");
        }
}
try {
  calcRectangleArea();
  console.log(value);
} catch (error) {
  console.log("error");
}
  