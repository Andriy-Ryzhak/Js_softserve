"use strict";

//Task 2
console.log("Ryzhak"); 


// Task 3
let string = "lesson";
const namber = 1;
alert(string);
string = "JavaScript";
alert(string);


// Task 4 

let obj = {
   str: "name",
   num: 22,
   bool: true,
   und: undefined,
   nl: null
};
console.log(obj);


// Task 5

const isAdult = confirm("Вам є 18?");
console.log(isAdult);

// Task 6

let name = "Andriy";
let surname = "Ryzhak";
let groop = "654 JS Core";
let birthday = 1998;
const isMarried = false;
console.log(typeof birthday);
console.log(typeof isMarried);
console.log(typeof name);

let age = 22;
age = null;
console.log(age);

let und;
console.log(und);

//Task 7

let login = prompt("Your login", "");
let password = prompt("Your password","");
let email = prompt("Your email","");

alert(`Dear ${login}, your email is ${email}, your password is ${password}`);

//Task 8

let hour = prompt("Введіть кількість годин","");
alert(`В цій кількості годин ${hour * 60 * 60} секунд`);

let day = prompt("Введіть кількість днів","");
alert(`В цій кількості днів ${day * 60 * 60 * 24} секунд`);

let months = prompt("Введіть кількість місяців","");
alert(`В цій кількості місяців ${months * 60 * 60 * 24 * 30} секунд`);


