"use strict";

// Task 1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development", 
};

function propsCount (mentor){
    let value = Object.keys(mentor);
    console.log(value.length);
}

propsCount (mentor);


// Task 2 
const obj = {
    str: "name",
    num: "age",
    male: "man",
    live: "city",
    status: "student"
};


function showProps(obj){
    let keys = Object.values(obj);
    let values = Object.keys(obj);
    
    console.log(values);
    console.log(keys);
}

showProps(obj);

// Task 3
class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log( this.name + " " + this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, yearOfEntry){
        super(name, surname);
        this.yearOfEntry = yearOfEntry;
    }
        showFullName(midleName) {
            this.midleName = midleName;
            console.log(this.name + " " + this.surname + " " + this.midleName);
        }
        showCourse() {
            let today = new Date;
            return (today.getFullYear() - this.yearOfEntry); 
        }

    }

let student1 = new Student ("Andriy" , "Ryzhak", 2016);
student1.showFullName("Mykhailovych");
console.log("Current course: " + student1.showCourse());


// Task 4
class Worker {
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        console.log("Salary " + this.dayRate * this.workingDays + " $");
    }
    #experience = 1.2;

    get showExp() {
        return this.#experience;
    }

    set setExp(value) {
        this.#experience = value;
    }

    showSalaryWithExperience() {
        console.log("Salary with experience " + this.dayRate * this.workingDays * this.#experience + " $");
    }
}

let worker1 = new Worker ("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("new experience " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log("");

let worker2 = new Worker ("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log("");

let worker3 = new Worker ("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experiance " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log("");

console.log("Sorted salary:");
function sortSalary() {
    let salary = [
        worker1.showSalaryWithExperience(),
        worker3.showSalaryWithExperience(),
        worker2.showSalaryWithExperience()
    ];
    return salary.sort();
}
sortSalary();

// Task 5 
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a,h){
        super();
        this.a = a;
        this.h = h;
    }
    getArea(){
        return 0.5 * this.a * this.h;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea(){
        return this.a**2;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea(){
        return Math.PI * this.r**2;
    }
}

function handleFigures(figures) {
    return (figures.reduce((acc,fig) => {
        if (fig instanceof GeometricFigure) {
            console.log("Geometric figure "+ className + fig.getArea());
            return acc + fig.getArea();
        } else {
            return acc;
        }
    }, 0));
}

figures = [
    new Triangle(4,5),
    new Square(7),
    new Circle(5)
];

console.log("Total area " + handleFigures(figures));