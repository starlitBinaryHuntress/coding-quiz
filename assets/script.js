//create variables from HTML

var start = document.querySelector("#start");

var first = document.querySelector("#first-question");

var second = document.querySelector("#second-question");

var third = document.querySelector("#third-question");

var fourth = document.querySelector('#fourth-question');

var userChoice = document.querySelector('.answers');

var finishedText = document.querySelector('#done');

var time = 0;

//set the questions to disappear

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";

//Click the button to start the quiz
start.addEventListener("click", startQuiz);

function startQuiz () {
    //make start button disappear
    start.style.display = "none";

    //create a timer

    //let the first question and possible answers be shown
    first.style.display = "block";

    var correct = document.querySelector('#first-correct').innerHTML;

    var incorrect = document.getElementById(first-incorrect);

    console.log(correct);



    function removeTime () {
        time--;
    }

    function secondQuestion () {
        //display second question
        first.style.display = "none";
        second.style.display = "block";
        correct.addEventListener("click", thirdQuestion);
        incorrect.addEventListener("click", removeTime);
    }

    function thirdQuestion () {
        //display third question
        second.style.display = "none";
        third.style.display = "block";
        correct.addEventListener("click", fourthQuestion);
        incorrect.addEventListener("click", removeTime);
    }

    function fourthQuestion () {
        //display fourth question
        third.style.display = "none";
        fourth.style.display = "block";
        correct.addEventListener("click", finishedQuiz);
        incorrect.addEventListener("click", removeTime);
    }

    correct.addEventListener("click", secondQuestion);
    incorrect.addEventListener("click", removeTime);

    console.log(userChoice);
    console.log(correct);
}