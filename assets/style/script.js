//when i click the start button, the timer is displayed and the timer starts
//add envtlistener to the start button

//create an interval that runs every 1000mill decrease seconds left and update the DOM to display the new seconds left
//
var secondsLeft = 60;

function setTime() {}
var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);

    }
})
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

//what do i write for random question
var correctCounter = 0;
var incorrectCounter = 0;


