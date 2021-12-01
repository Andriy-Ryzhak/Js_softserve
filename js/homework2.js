"use strict";

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

let a = prompt("Введіть число", "");
if ( a % 2 == 0 ) {
    console.log( "multiple of two" );
} else if ( a % 7 == 0) {
   console.log( "divided into seven" );
} else {
   console.log( "bad number" );
}

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
console.log(cities.join('*'));

// Task 5

let isAdult;
let age = prompt("Введіть свій вік", "");

if (age >= 18) {
    isAdult = "Ви досягли повнолітнього віку";
} else if (age < 18 ) {
    isAdult = "Ви ще надто молоді";
}
alert(isAdult);


// Task 6 

let a = parseInt(prompt("Введіть першу сторону","")),
    b = parseInt(prompt("Введіть другу сторону","")),
    c = parseInt(prompt("Введіть третю сторону",""));

let s = (a + b + c) / 2;
let value = Math.sqrt( s * (s - a) * (s - b) * (s - c));
console.log(Math.floor(value * 1000) / 1000 );

let leg = c**2;
let hypotenuse = a**2 + b**2;
if (leg == hypotenuse) {
    console.log("Цей трикутник є прямокутним");
} else {
    console.log("Цей трикутник не є прямокутним");
} 


// Task 7

let hour = new Date().getHours();

if (hour >= 23 && hour <= 24 || hour >= 0 && hour <= 5) {
  alert( "Доброго ночі" );
} else if (hour >= 6 && hour <= 11) {
    alert("Доброго ранку");
} else if (hour >= 12 && hour <= 17) {
    alert("Доброго дня");
} else if (hour >= 18 && hour <= 22) {
    alert("Доброї вечора");
}
    

let hour = new Date().getHours();

switch (true) {
    case hour >= 23 && hour <= 24 || hour >= 0 && hour <= 5:
        alert('Доброї ночі');
        break;
    case hour >= 6 && hour <= 11:
        alert('Доброго ранку');
        break;
    case hour >= 12 && hour <= 17:
        alert('Доброго дня');
        break;
    case hour >= 18 && hour <= 22:
        alert('Доброго вечора');
        break;
}



