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



function raiseToDegree(a,b) {
    let value = a**b;
    if (isNaN(a) && isNaN(b)) {
        console.log("Please write number");
    }
    console.log(value);
    
}
raiseToDegree(3,4);


