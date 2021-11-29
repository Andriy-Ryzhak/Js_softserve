// "use strict";

//Task 1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);

console.log(res1);
console.log(typeof res1);


let res2 = Boolean(x) + String(y);

console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

let res4 = (x + y * "ab");
console.log(res4);
console.log(typeof res4);


//Task 2
 let reply;
 let answer = prompt("Введіть число", "");
 if (+answer / 7) {
     console.log(true);
 } else if (+answer % 2) {
    console.log(true);
 } else {
    console.log(false);
 }
  
  //доробити


//Task 3
const answers = [];

answers[0] = 5;
answers[1] = "str";
answers[2] = true;
answers[3] = null;

console.log(answers.length);

const arr = prompt("Введіть своє ім'я", "");
answers[5] = arr;
alert(answers[5]);
answers.shift();
alert(answers);


//Task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities);

// Task 5
let isAdult;
let age = prompt("Введіть свій вік", "");

if (age >= 18) {
    isAdult = "Ви досягли повнолітнього віку";
} else if (age < 18 ) {
    isAdult = "Ви ще надто молоді";
}
alert(isAdult);

//Task 6 

