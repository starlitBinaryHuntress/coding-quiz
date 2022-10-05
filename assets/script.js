//create variables from HTML
var h1 = document.querySelector('#header');

var startBtn = document.querySelector("#start");

var start = document.querySelector('.start');

var first = document.querySelector("#first-question");

var second = document.querySelector("#second-question");

var third = document.querySelector("#third-question");

var fourth = document.querySelector('#fourth-question');

var finishedText = document.querySelector('#done');

var time = 0;

//set the questions to disappear

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";

function startQuiz () {
    //make start button disappear
    start.style.display = "none";
    startBtn.style.display = "none";
    h1.style.display = "none";

    //create a timer

    //let the first question and possible answers be shown
    first.style.display = "block";

    var correct = document.querySelector('#first-correct');

    var incorrect = document.querySelector('#first-incorrect');

    console.log(correct);

    
    correct.addEventListener("click", secondQuestion);
    incorrect.addEventListener("click", removeTime);



    function removeTime () {
        time--;
    }

    function secondQuestion () {
        //display second question
        first.style.display = "none";
        second.style.display = "block";
        var correct = document.querySelector('#second-correct');
        var incorrect = document.querySelector('#second-incorrect');
        correct.addEventListener("click", thirdQuestion);
        incorrect.addEventListener("click", removeTime);
    }

    function thirdQuestion () {
        //display third question
        second.style.display = "none";
        third.style.display = "block";
        var correct = document.querySelector('#third-correct');
        var incorrect = document.querySelector('#third-incorrect');
        correct.addEventListener("click", fourthQuestion);
        incorrect.addEventListener("click", removeTime);
    }

    function fourthQuestion () {
        //display fourth question
        third.style.display = "none";
        fourth.style.display = "block";
        var correct = document.querySelector('#fourth-correct');
        var incorrect = document.querySelector('#fourth-incorrect');
        correct.addEventListener("click", finishedQuiz);
        incorrect.addEventListener("click", removeTime);
    }

}

//Click the button to start the quiz
startBtn.addEventListener("click", startQuiz);