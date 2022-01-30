'use strict';

// // Task 1
// const array = [1,2,3,4,5,];
// let one = 1;
// for (let i = 0; i < array.length; i++) {
//     one = one * array[i];
// }
// console.log(one);

// // Task 2

// for (let i = 0; i <= 15; i++) {
//     if (i % 2) {
//         console.log(`${i} is odd`);
//     } else {
//         console.log(`${i} is even`);
//     }
// }

// // Task 3

// function randArray(k) {
//     let arr =[];
//     for (let i = 0; i < k; i++){
//     arr[i] = Math.floor(Math.random() * 500);
//     }
//     console.log(arr);
// }
// randArray(5);

// // Task 4

// function raiseToDegree(a,b) {
//     let value = a**b;
//     if (isNaN(a) && isNaN(b)) {
//         console.log("Please write number");
//     }
//     console.log(value);
    
// }
// raiseToDegree(3,4);

// // Task 5

// function findMin() {
//     console.log(Math.min(12, 14, 4, -4, 0.2));
// }
// findMin();

// // Task 6

// function findUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = (i + 1); j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
    
// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

// // Task 7

// function lastElem(arr,count) {
//     if (count === 0 || isNaN(count)) {
//         return arr[arr.length - 1];
//     } else if (count >= arr.length) {
//         return arr;
//     }

//     return arr.slice(-Math.abs(count));
// }

// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 2));
// console.log(lastElem([3, 4, 10, -5], 8));

// // Task 8




