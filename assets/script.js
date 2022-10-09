//create variables from HTML
var h1 = document.querySelector('#header');

var startBtn = document.querySelector("#start");

var start = document.querySelector('.start');

var first = document.querySelector("#first-question");

var second = document.querySelector("#second-question");

var third = document.querySelector("#third-question");

var fourth = document.querySelector('#fourth-question');

var finishedText = document.querySelector('#finished-quiz');

var timer = document.querySelector('#timer')

var gameOver = document.querySelector('#game-over')

var restart = document.querySelector('#restart')

var scores = document.querySelector("#high-scores")

//set the questions to disappear

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
finishedText.style.display = "none";
gameOver.style.display = "none";
scores.style.display = "none"

function startQuiz () {
    //make start button & intro disappear
    start.style.display = "none";
    startBtn.style.display = "none";
    h1.style.display = "none";
    gameOver.style.display = "none";

    //create a timer
    let time = 100;
    myTimer()
    timer.style.display = "block";
    timer.style.fontSize = "50px";

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

    //let the first question and possible answers be shown
    first.style.display = "block";

    let correct = document.querySelector('#first-correct');
    let incorrect = document.querySelector('.first-incorrect');

    function removeTime () {
        time = time-5;
    }

    correct.addEventListener("click", secondQuestion);
    incorrect.addEventListener("click", removeTime);

    function secondQuestion () {
        //display second question
        first.style.display = "none";
        second.style.display = "block";
        let correct = document.querySelector('#second-correct');
        let incorrect = document.querySelectorAll('.second-incorrect');
        correct.addEventListener("click", thirdQuestion);
        incorrect.addEventListener("click", removeTime);
    }

    function thirdQuestion () {
        //display third question
        second.style.display = "none";
        third.style.display = "block";
        let correct = document.querySelector('#third-correct');
        let incorrect = document.querySelectorAll('.third-incorrect');
        correct.addEventListener("click", fourthQuestion);
        incorrect.addEventListener("click", removeTime);
    }

    function fourthQuestion () {
        //display fourth question
        third.style.display = "none";
        fourth.style.display = "block";
        let correct = document.querySelector('#fourth-correct');
        let incorrect = document.querySelectorAll('.fourth-incorrect');
        correct.addEventListener("click", finishedQuiz);
        incorrect.addEventListener("click", removeTime);
    }

    //Display Finished Quiz Prompt
    function finishedQuiz () {
        finishedText.style.display = "block";
        fourth.style.display = "none";
        timer.style.display = "none";
        gameOver.style.display = "none";
        scores.style.display = "block";
        clearInterval(countdown);

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

}

//Click the button to start the quiz
startBtn.addEventListener("click", startQuiz);
restart.addEventListener("click", startQuiz)