"use strict";

// // Task 1
// function calcRectangleArea(width, height) {
//   if (!(width > 0 && height > 0)) {
//     throw new Error("Bad number");
//   }

//   return width * height;
// }

// let rectangleWidth = prompt("Введіть ширину", "");
// let rectangleHeight = prompt("Введіть висоту", "");
// let rectangleArea = null;

// try {
//   rectangleArea = calcRectangleArea(rectangleWidth, rectangleHeight);
//   console.log(rectangleArea);
// } catch (e) {
//   console.log(`${e.name}: ${e.message}`);
// }

// // Task 2

// let user = prompt("Введіть свій вік", "");
// function checkAge(user){
//     if (user === "" || user === null){
//         throw new Error("Ви не ввели ніяких значень");
//     }
//     else if (isNaN(user)){
//         throw new Error("Введіть, будь ласка, числове значення ");
//     }

//     else if (+user <= 14){
//         throw new Error("Ви занатто молоді");
//     }
//     return user;
// }

// try{
//     let age = checkAge(user);
// alert ("Ваш вік:" + age);
// }
// catch(exception){
//     alert(exception.message);
// }

// // Task 3

// class MonthException {
//   constructor(message){
//       this.MonthException = message;  
//   }
// }
// function showMonthName(month){
//       month = month - 1; 
//       let months = ['January','February','March','April','May','June','Jule','August','September','October','November','December'];
  
//       let whatMonth = new MonthException('Incorrect month number');
//       if (months[month] != null) {
//               return months[month];
//       } else {
//               return whatMonth;   
//       }
      
//   }
  
//   try {
//       console.log(showMonthName(prompt("Введіть номер місяця","")));
//   } catch (exception) {
//       console.log(exception.name + ':' + exception.message);
//   }

// // Task 4
// function showUser(id) {
//   if (id < 0) {
//       throw new Error("Індентифікато не повинен бути негативним: " + id);
//   }
//   return {id}
// }
// function showUsers(ids){
// let arr = [];
//       for (let i = 0; i < ids.length; i++) {
//           try {
//           arr[arr.length] = showUser(ids[i]);       
//           } 
//           catch (exception) {
//               console.log(exception.message);
//           }  
//       }  
//       return arr    
// }
//  console.log(showUsers([7, -12, 44, 22]));