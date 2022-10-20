"use strict";



function init()
{
    const calculateButton = document.getElementById("calcutlateButton");
    calculateButton.onclick = calculateButtonClick;

}

function calculatedButtonOnClick()
{
    const number1Textbox = document.getElementById("number1Textbox");
    const number2Textbox = document.getElementById("number2Textbox");

    let num1AsString = number1Textbox.value;
    let num2AsString = number2Textbox.value;

    let answer = num1AsNumber + num2AsNumber;

    outputPara.innerHTML 
}