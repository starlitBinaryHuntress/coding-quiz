//create variables from HTML
var h1 = document.querySelector('#header');

var startBtn = document.querySelector("#start");

var start = document.querySelector('.start');

var first = document.querySelector("#first-question");

var second = document.querySelector("#second-question");

var third = document.querySelector("#third-question");

var fourth = document.querySelector('#fourth-question');

var finishedText = document.querySelector('#finished-quiz');

var timer = document.querySelector('#timer');

var gameOver = document.querySelector('#game-over')

var restart = document.querySelector('#restart');

var scores = document.querySelector("#high-scores");

var firstCorrect = document.querySelector(".first-correct");

var secondCorrect = document.querySelector(".second-correct");

var thirdCorrect = document.querySelector(".third-correct");

var fourthCorrect = document.querySelector(".fourth-correct");

var firstFirst = document.querySelector("#first-first");

var firstSecond = document.querySelector("#first-second");

var firstThird = document.querySelector("#first-third");

var secondFirst = document.querySelector("#second-first");

var secondSecond = document.querySelector("#second-second");

var secondThird = document.querySelector("#second-third");

var thirdFirst = document.querySelector("#third-first");

var thirdSecond = document.querySelector("#third-second");

var thirdThird = document.querySelector("#third-third");

var fourthFirst = document.querySelector("#fourth-first");

var fourthSecond = document.querySelector("#fourth-second");

var fourthThird = document.querySelector("#fourth-third");

var score = 0;

let time = 99;

timer.style.fontSize = "50px";

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
finishedText.style.display = "none";
gameOver.style.display = "none";
scores.style.display = "none";

function correctAns () {
    score = score + 10;
}

function secondQuestion () {
    //display second question
    first.style.display = "none";
    second.style.display = "block";
    correct.addEventListener("click", thirdQuestion);
}

function thirdQuestion () {
    //display third question
    second.style.display = "none";
    third.style.display = "block";
    correct.addEventListener("click", fourthQuestion);
    
}

function fourthQuestion () {
    //display fourth question
    third.style.display = "none";
    fourth.style.display = "block";
    correct.addEventListener("click", finishedQuiz);
}

function myTimer(){
    let countdown = setInterval(function () {
        timer.innerHTML = "00:" + time;
        time--;
        if (time < 0) {
            clearInterval(countdown);
            gameOverFunc();
        }
    }, 1000);
}

//add function to remove time
function removeTime () {
    time = time - 5;
};

//Display Finished Quiz Prompt
function finishedQuiz () {
    finishedText.style.display = "block";
    fourth.style.display = "none";
    timer.style.display = "none";
    gameOver.style.display = "none";
    scores.style.display = "block";
    //add local storage for scores
}

//Display Game Over Prompt
function gameOverFunc () {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    timer.style.display = "none";
    gameOver.style.display = "block";
}

function startQuiz () {
    //make start button & intro disappear
    start.style.display = "none";
    startBtn.style.display = "none";
    h1.style.display = "none";
    gameOver.style.display = "none";
    second.style.display = "none";

    //create a timer
    myTimer()
    timer.style.display = "block";
    timer.style.fontSize = "50px";

    //let the first question and possible answers be shown
    first.style.display = "block";

    firstFirst.addEventListener("click", removeTime())
    firstSecond.addEventListener("click", removeTime)
    firstThird.addEventListener("click", removeTime)
    correct.addEventListener("click", secondQuestion())

    //create a timer
    myTimer()
    timer.style.display = "block";
    timer.style.fontSize = "50px";

    //add eventlistener to correct answer to move on to second question JK RIDER SAID TO USE A CONDITIONAL STATEMENT LET'S TRY THAT
    //correct.addEventListener("click", secondQuestion);

    //add eventListener to incorrect answers to remove time
    //incorrect.addEventListener("click", removeTime());

    //Attempt #1
    // for(element of incorrect) {
    // element.addEventListener("click", removeTime);
    // }

    //Attempt#2
    //incorrect.forEach(element => removeTime());
    //I don't think so

    //Attempt#3 - conditional statement

}

//Click the button to start the quiz
startBtn.addEventListener("click", startQuiz);
restart.addEventListener("click", startQuiz)