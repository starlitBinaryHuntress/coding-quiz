//create variables from HTML
var h1 = document.querySelector('#header');

var startBtn = document.querySelector("#start");

var start = document.querySelector('.start');

// var question = document.querySelector('#question');

var first = document.querySelector("#first-question");

var second = document.querySelector("#second-question");

var third = document.querySelector("#third-question");

var fourth = document.querySelector('#fourth-question');

var finishedText = document.querySelector('#finished-quiz');

var timer = document.querySelector('#timer');

timer.style.fontSize = "50px";

var gameOver = document.querySelector('#game-over')

var restart = document.querySelector('#restart');

var scores = document.querySelector("#high-scores");

// var h2 = document.querySelector("#question-container");

// var questions = [
//     {
//     question: 'Which of the following pseudo-classes would you use in CSS to change the class of an element while the mouse is over it?',
//     answers: [
//         {text: '____:active', correct: false},
//         {text: '____:hover', correct: true},
//         {text: '____:focus', correct: false},
//         {text: '____:not()', correct: false}
//     ]
// }, {
//     question: 'Which HTML element contains the text that goes on the tab above the webpage?',
//     answers: [
//         {text: '!DOCTYPE', correct: false},
//         {text: 'body', correct: false},
//         {text: 'div', correct: false},
//         {text: 'title', correct: true}
//     ]
// }, {
//     question: 'Which of the following is a way to store groups of data into a single variable?',
//     answers: [
//         {text: 'arrays', correct: true},
//         {text: 'functions', correct: false},
//         {text: 'objects', correct: false},
//         {text: 'conditional', correct: false}
//     ]
// }, {
//     question: 'How do you halt event bubbling?',
//     answers: [
//         {text: 'Domain Object Model (DOM)', correct: false},
//         {text: 'JSON.parse', correct: false},
//         {text: '.trim()', correct: false},
//         {text: 'event.stopPropagation', correct: true}
//     ]
// }
// ];

// function startTimer () {
//     let time = 99;
//     let countdown = setInterval(function () {
//              timer.innerHTML = "00:" + time;
//              time--;
//              if (time < 0) {
//                  clearInterval(countdown);
//                  gameOver();
//              }
//          }, 1000);
     
// };

// function showNextQuestion () {

// };

// function hideStartPage(){
//     start.style.display = "none";
//     startBtn.style.display = "none";
//     h1.style.display = "none";
// };

// function startQuiz(){
//     startBtn.classList.add('hide');
//     question.classList.remove('hide');
//     showNextQuestion()
// };

// function endGame (){
//     h2.style.display = "Well Done!";
//     timer.style.display = "none";
//     scores.style.display = "block";
//     clearInterval(countdown);
// };

// function enterInitials (){};

// function showHighScores (){};

// function gameOver (){

// };

// startBtn.addEventListener("click", () => {
//     startTimer(); 
//     hideStartPage(); 
//     startQuiz ();
// });

// startBtn.addEventListener("click", startQuiz)

let time = 99;

//label the correct answer
  var correct = document.querySelector('#first-correct');
//label the wrong answers
  var incorrect = document.querySelectorAll('.first-incorrect');

//set the questions to disappear

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
finishedText.style.display = "none";
gameOver.style.display = "none";
scores.style.display = "none";

function secondQuestion () {
    //display second question
    first.style.display = "none";
    second.style.display = "block";
    var correct = document.querySelector('#second-correct');
    var incorrect = document.querySelectorAll('.second-incorrect');
    //correct.addEventListener("click", thirdQuestion);
    
}

function thirdQuestion () {
    //display third question
    second.style.display = "none";
    third.style.display = "block";
    var correct = document.querySelector('#third-correct');
    var incorrect = document.querySelectorAll('.third-incorrect');
    // correct.addEventListener("click", fourthQuestion);
    
}

function fourthQuestion () {
    //display fourth question
    third.style.display = "none";
    fourth.style.display = "block";
    var correct = document.querySelector('#fourth-correct');
    var incorrect = document.querySelectorAll('.fourth-incorrect');
    //correct.addEventListener("click", finishedQuiz);
    
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

function startQuiz () {
    //make start button & intro disappear
    start.style.display = "none";
    startBtn.style.display = "none";
    h1.style.display = "none";
    gameOver.style.display = "none";

    //create a timer
    myTimer()
    timer.style.display = "block";
    timer.style.fontSize = "50px";

    //let the first question and possible answers be shown
    first.style.display = "block";

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