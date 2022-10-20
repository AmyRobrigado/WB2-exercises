"use strict";


window.onload = init;

function init() {
const greetBtn = document.getElementById("greetBtn");
greetBtn.onclick = onGreetBtnClicked;
}

function onGreetBtnClicked() {
const nameField = document.getElementById("nameField");
alert("Hello There " + nameField.value);
}
