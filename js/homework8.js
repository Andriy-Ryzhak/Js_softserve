"use strict";

// Task 1
function upperCase(value) {
    let testText = /^[A-Z]/;
    if (testText.test(value)){
        console.log(value + "String's starts with uppercase character ");
    } else {
        console.log(value + "String's not starts with uppercase character");
    }
}

upperCase("regexp : ");
upperCase("RegExp : ");

// Task 2

function checkEmail(value) {
    let testEmail = /@/;
    if (testEmail.test(value)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkEmail("Qmail2@gmail.com");

// Task 3

function checkText(someText) {
    let result = [];
    let regExp1  = /d{1}b+d{1}/i;
    let regExpTestOne = regExp1.exec(someText);
    let regExp2 = /b+/i;
    let regExpTestTwo = regExp2.exec(someText);
    let regExp3 = /d/;
    let regExpTestThree = regExp3.exec(someText);
    console.log(result  = [`${regExpTestOne}, ${regExpTestTwo}, ${regExpTestThree}`]);
}

checkText("cdbBdbsbz");

// Task 4 

function regularStr (someText) {
    let firstPosition = /\s\w+/;
    let secondPosition = /\w+\S/;
    let changeOne = firstPosition.exec(someText);
    let changeTwo = secondPosition.exec(someText);
    console.log(`${changeTwo} ${changeOne}`);
}

regularStr("Java Script");

// Task 5 

let numberCard = "9999-9999-9999-9999";
function checkCard (numberCard) {
    let checkNumber = /\d{4}(\s|-)\d{4}(\s|-)\d{4}(\s|-)\d{4}/;
    if (checkNumber.test(numberCard)) {
        console.log("Correct number Card");
    } else {
        console.log("Bad number Card");
    }
};

checkCard(numberCard);

// Task 6

function checkEmail (mail) {
    let firstCheck = /(^#|^-|^_)/;
    let secondCheck = /-{2}/;
    let thirdCheck = /_{2}/;

    if(firstCheck.test(mail)) {
        console.log(`${mail} Email is not correct!`);
    } else if(secondCheck.test(mail)) {
        console.log(`${mail} Email is not correct!`);
    } else if(thirdCheck.test(mail)) {
        console.log(`${mail} Email is not correct!`);
    } else {
        console.log(`${mail} Email is correct`);
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

// Task 7

function checkLogin (login) {
    let loginEx =  /\w+\d\.\d\w{2,10}/;
    let loginTest = loginEx.test(login);
    console.log(loginTest);
    let firstNum = login.match(/(\d\.\d|\d)/g);
    console.log(firstNum);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');