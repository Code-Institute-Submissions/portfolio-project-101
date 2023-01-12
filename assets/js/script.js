// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("addition");
});

//test

var link = document.getElementById("link");
link.addEventListener("click", function(){
    var value1 = document.getElementById("timer").innerHTML;
    var value2 = document.getElementById("score").innerHTML;
    var value3 = document.getElementById("incorrect").innerHTML;
    console.log(value1);
    console.log(value2);
    console.log(value3);
// set link values in local storage
    localStorage.setItem("value1", value1);
    localStorage.setItem("value2", value2);
    localStorage.setItem("value3", value3);

});


var value1 = localStorage.getItem("value1");
var value2 = localStorage.getItem("value2");
var value3 = localStorage.getItem("value3");
var cell1 = document.getElementsByClassName("section-1");
var cell2 = document.getElementsByClassName("section-2");
var cell3 = document.getElementsByClassName("section-3");

cell1.innerHTML = value1;
cell2.innerHTML = value2;
cell3.innerHTML = value3;

// Timer display and conversion to hours, minutes, seconds

let currentTime = 0;

intervalId = setInterval(function(){ 
    let timerElement = document.getElementById("timer");
    currentTime++;

    if(timerElement !== null){
    let hours = Math.floor(currentTime / 3600);
    let minutes = Math.floor((currentTime % 3600) / 60);
    let seconds = currentTime % 60;      

    timerElement.innerHTML = hours.toFixed(0) + "h : " + minutes.toFixed(0) + "m : " + seconds.toFixed(0) + "s";}
}, 1000);

function runGame(gameType) {

    // Generate two random numbers between 1 and 25
    // Math.floor rounds down to the whole number
    // Math.random generates random numbers

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Adds two random numbers between 1 and 10 for "Division"

    let num3 = Math.floor(Math.random() * 10) + 1;
    let num4 = Math.floor(Math.random() * 10) + 1;


    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num3, num4);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`;
    }

}

function checkAnswer() {

    // Checks the answer against the first element in
    // the returned calculateCorrectAnswer array

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {

    // Gets the operands (the numbers) and the operator (plus, minus etc)
    // directly from the DOM
    
    let operand1 = parseInt(document.getElementById("operand1").textContent);
    let operand2 = parseInt(document.getElementById("operand2").textContent);
    let operator = document.getElementById("operator").textContent;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator ==="-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator ==="/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }
}

function incrementScore() {

    // Gets the current score from the DOM and increments it

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    // Gets the current tally of incorrect answers from the DOM and increments it

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

    // Displays the addition question

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

    /* Displays the subtraction question 
    and makes certain that there will be no negative numbers
    in the answers */

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

    // Displays the multiply question 

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {

    /* Displays the division question
    and makes certain that the first number is always 
    dividable with the second one */

    document.getElementById("operand1").textContent = operand1 * operand2;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";

}