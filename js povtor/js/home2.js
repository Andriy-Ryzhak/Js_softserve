'use strict';

// // Task 1
// let x = 1;
// let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1); 
// console.log(typeof res1); 

// let res2 = Boolean(x) + String(y);
// console.log(res2); 
// console.log(typeof res2); 

// let res3 = x + y == 3;
// console.log(res3); 
// console.log(typeof res3);

// let res4 = (x + y * "a");
// console.log(res4); 
// console.log(typeof res4);

// // Task 2

// const userNumber = prompt("Введіть парне додатнє число або кратне 7", "");

// if (userNumber % 2 == 0 && userNumber > 0) {
//     console.log ("Число парне додатнє");
// } else if (userNumber % 7 == 0 && userNumber > 0) {
//     console.log("Число ділиться на 7");
// } else {
//     console.log("Число не відповідає критеріям");
// }

// // Task 3 

// let array = [];
// array[0] = 23;
// array[1] = "todayTwentyFifthDecember";
// array[2] = 1==1;
// array[3] = null;
// console.log(array);
// console.log(array.length);
// let userQuesion = prompt("Something","");
// array[4] = userQuesion;
// console.log(array[4]);
// array.shift(0);
// console.log(array);

// // Task 4

// let cities = ["Rome", "Lviv", "Warsaw"]; 
// let newCities = cities.join("*");
// console.log(newCities);

// // Task 5


// let isAdult = prompt("Please, enter you age", "");
// if (isAdult < 18 && isAdult >= 0) {
//     console.log("You are very young!");
// } else if (isAdult >= 18 && isAdult < 100) {
//     console.log("Ви повнолітні, вхід дозволено");
// } else if (isAdult >= 100) {
//     console.log("Ви вже дуже старі");
// } else {
//     console.log("Ви ввели не число");
// }

// // Task 6

// let a = parseInt(prompt("Введіть першу сторону",""));
// let b = parseInt(prompt("Введіть другу сторону",""));
// let c = parseInt(prompt("Введіть третю сторону",""));

// let s = (a + b + c) / 2;
// let value = Math.sqrt( s * (s - a) * (s - b) * (s - c));
// console.log(Math.floor(value * 1000) / 1000 );

// let leg = c**2;
// let hypotenuse = a**2 + b**2;
// if (leg == hypotenuse) {
//     console.log("Цей трикутник є прямокутним");
// } else {
//     console.log("Цей трикутник не є прямокутним");
// } 


