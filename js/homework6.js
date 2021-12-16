"use strict";

// Task 1
const id = document.getElementById("test").innerHTML = "Last";
//2
document.body.innerHTML = '<div>last</div> '; 
documet.write( document.body.innerHTML );  

// Task 2 

let pikcha = document.querySelector('.image');

pikcha.setAttribute('src', 'cat.jpg');

alert(pikcha.outerHTML);

// Task 3 

let paragraf = text.querySelectorAll('p');

for (let i = 0; i < paragraf.length; i++) {
    let item = paragraf[i].innerHTML;
    console.log("selector text " + [i] + ': ' + item);
}

// Task 4

let lists = list.querySelectorAll ("li");

let one = list.children[0].innerHTML;
let two = list.children[4].innerHTML;
let three = list.children[1].innerHTML;
let four = list.children[3].innerHTML;
let five =list.children[2].innerHTML;

console.log("Total: " + one + "," + two + "," + three + "," + four + "," + five);

//2

let oneLi = list.firstElementChild.innerHTML;
let twoLi = list.lastElementChild.innerHTML;
let threeLi = list.firstElementChild.nextElementSibling.innerHTML;
let fourLi = list.lastElementChild.previousElementSibling.innerHTML;
let fiveLi =list.childNodes[5].innerHTML;

console.log("Total: " + oneLi + "," + twoLi + "," + threeLi + "," + fourLi + "," + fiveLi);

// Task 5

const header = document.querySelector('h1');
header.style.backgroundColor = "green";

const div = myDiv.querySelectorAll(".p");
const first = myDiv.children[0].style.fontWeight = "bold";
const second = myDiv.children[1].style.color = "red";
const third = myDiv.children[2].style.textDecoration = "underline";
const four = myDiv.children[3].style.fontStyle = "italic";

let list = myList.querySelectorAll("li"); 
for(let i= 0; i< list.length; i++) {
    myList.children[i].style.listStyleType = "none";
    myList.children[i].style.display = "inline-flex";
}

const span = document.querySelector("span");
span.style.opacity = "0";

// Task 6

let text1 = prompt("Введіть ваш текст 1 :", "");
let text2= prompt("Введіть ваш текст 2 :", "");
let inpt1 = document.getElementById("input1");
let inpt2 = document.getElementById("input2");

inpt1.value = text1;
inpt2.value = text2;

let inpt1Value = inpt1.value;
let inpt2Value = inpt2.value;
inpt1.value = inpt2Value;
inpt2.value = inpt1Value;

// Task 7

const main = document.createElement("main");
const myDiv = document.createElement("div");
const p = document.createElement("p");

main.classList.add("mainClass", "check", "item");
myDiv.setAttribute("id", "myDiv");
p.innerHTML = "First paragraph";

document.body.prepend(main);
main.prepend(myDiv);
myDiv.prepend(p);



