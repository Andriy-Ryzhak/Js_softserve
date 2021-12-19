"use strict";
// Task 1

let openWin; 
function openWindows() {
    openWin = window.open("about:blank","hello","width=300,height=300");
}

openWindows();
function second() {
    openWin.resizeTo(500,500);
}

setTimeout (second, 2000);

function moveWindows () {
    openWin.moveTo(200,200);
}

setTimeout(moveWindows, 4000);

function closeWindows () {
    openWin.close();
}

setTimeout(closeWindows, 6000);

// Task 2

function changeCSS() {
    document.querySelector('p').style.color = "orange";
    document.querySelector('p').style.fontSize = "20px";
    document.querySelector('p').style.fontStyle = "Comic Sans MS";
}

// Task 3 

let blue = document.getElementById("blue").onclick = function () {
    document.body.style.background = "blue";
};

let pink = document.getElementById("pink").ondblclick = function () {
    document.body.style.background = "pink";
};

function brown() {
    document.getElementById("brown").addEventListener("mousedown", () => {
        document.body.style.backgroundColor = "brown";
    });
    document.getElementById("brown").addEventListener("mouseup", () => {
        document.body.style.backgroundColor = "white";
    });
}

brown();

function link() {
    document.getElementById("link").addEventListener("mouseover", () => {
        document.body.style.backgroundColor = "yellow";
    });
    document.getElementById("link").addEventListener("mouseout", () => {
        document.body.style.backgroundColor = "white";
    });
}

link();

// Task 4

function DeleteOption() {
    let list = document.querySelector("#option");
    for (let i = 0; i <= list.options.length; i++) {
        if (list.options[i].selected) {
            list.removeChild(list.options[i]);
            break;
        }
    }
} 

document.querySelector("#buttonDelete").addEventListener("click",DeleteOption);

// Task 5

let eventing = document.getElementById("liveBtn");
eventing.addEventListener ("mouseover", mouseOverFunction);
eventing.addEventListener ("click", mouserClickFunction);
eventing.addEventListener ("mouseout", mouseOutFunction);

function mouseOverFunction() {
    document.getElementById("div").innerHTML += "Mouse on me! <br>";
}
function mouserClickFunction() {
    document.getElementById("div").innerHTML += "I was pressed! <br>";
}
function mouseOutFunction() {
    document.getElementById("div").innerHTML += "Mouse is not on me! <br>";
}

// Task 6

    function screenMonitoring() {
        let monitor = document.createElement("div");
        monitor.id = "screen";
        document.body.appendChild(monitor);

        window.addEventListener("resize", () => {
            let width = window.innerWidth;
            let height = window.innerHeight;
            document.querySelector("#screen").innerHTML = ("Width: " + width + "Height: " + height);
        });
    }

    screenMonitoring();



    