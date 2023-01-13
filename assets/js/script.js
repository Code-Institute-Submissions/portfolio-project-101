// Mute Game Start
var muted = false;
function muteAudio(mute) {
    muted = mute;
}    

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    const myAudio = new Audio("assets/audio/Click.mp3");
    let buttons = document.getElementsByTagName("button");    
    for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        } else {
            if(!muted) {
                myAudio.play();
            }
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

// Sound control buttons
    var soundOffButton = document.getElementById("sound-button");
    var soundButton = document.getElementById("sound-button-right");
soundOffButton.onmouseover = function() {
    if (!muted) {
      soundOffButton.title = "Mute";
    } else {
      soundOffButton.title = "Sound is Off";
    }
};
soundButton.onmouseover = function() {
    if (muted) {
      soundButton.title = "Sound On";
    } else {
      soundButton.title = "Sound";
    }
};

// Link to set localStorage data for summary.html
    var link = document.getElementById("link");
link.addEventListener("click", function(){
    var value1 = document.getElementById("timer").innerHTML;
    var value2 = document.getElementById("score").innerHTML;
    var value3 = document.getElementById("incorrect").innerHTML;
    console.log(value1);
    console.log(value2);
    console.log(value3);
// Sets values in local storage
    localStorage.setItem("value1", value1);
    localStorage.setItem("value2", value2);
    localStorage.setItem("value3", value3);
});

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

// Function to publish the numbers for the game
function runGame(gameType) {
// Math.floor rounds down to the whole number
// Math.random generates random numbers
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();
// Adds two random numbers between 1 and 25 
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
// Adds two random numbers between 1 and 10 for "Division"
    let num3 = Math.floor(Math.random() * 10) + 1;
    let num4 = Math.floor(Math.random() * 10) + 1;
// Displaying Game Types
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

// Checks the answer against the first element in
// the returned calculateCorrectAnswer array
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isNaN(userAnswer)) {
        alert("Wrong! Please enter a valid number.");
    } else if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}

// Gets the operands (the numbers) and the operator (plus, minus etc)
// directly from the DOM
function calculateCorrectAnswer() {    
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

// Gets the current score from the DOM and increments it
// Sets audio to the Scores
    let sound1 = new Audio("assets/audio/Celebrate.mp3");
    let sound2 = new Audio("assets/audio/applaude.mp3");
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    if (!muted && oldScore % 10 === 0) {
        sound2.play();
    } else {
        if (!muted) {
            sound1.play();
        }
    }
}

// Gets the current tally of incorrect answers from the DOM and increments it
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

// Displays the addition question
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

// Displays the subtraction question 
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

// Displays the multiply question 
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

// Displays the division question
function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 * operand2;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}