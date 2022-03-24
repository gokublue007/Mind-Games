var startBtn = document.querySelector("#startQuiz");
var time = document.querySelector(".time")
var quizBox = document.querySelector(".quizBox")
var questionOne = document.querySelector("#title")
var anwserOne = document.querySelector("#one")
var anwserTwo = document.querySelector("#two")
var anwserThree = document.querySelector("#three")
var anwserFour = document.querySelector("#four")
var index = 0;
var initialInput = document.querySelector(".initalInput");
var input = document.querySelector(".input");
var saveBtn = document.querySelector(".save");
var showHighscore = document.querySelector(".show-highscore");
var highscores = [];
var clockId = null
var totalTimeRemaining = questions.length * 15

function countDown() {
    time.textContent = "Time Left: " + totalTimeRemaining;
    totalTimeRemaining = totalTimeRemaining - 1;
    
}

function startQuiz() {
    quizBox.classList.remove("hide");
    displayQuestions();
    clockId = setInterval(countDown, 1000);
}

function hideBtn(x) {
    x.style.display = 'none';
}

function nextQuestion() {
    if (this.textContent === questions[index].answer){
        alert("correct")
    } else {
        alert("wrong");
        totalTimeRemaining = totalTimeRemaining - 15;
    }
    index = index + 1
    if (index < questions.length) {
        displayQuestions();
    } else {
        clearInterval(clockId);
        quizBox.classList.add("hide");
        initialInput.classList.remove("hide");
    }
    
}

function displayQuestions() {
    questionOne.textContent = questions[index].question
    anwserOne.textContent = questions[index].options[0]
    anwserTwo.textContent = questions[index].options[1]
    anwserThree.textContent = questions[index].options[2]
    anwserFour.textContent = questions[index].options[3]

    anwserOne.addEventListener("click", nextQuestion);
    anwserTwo.addEventListener("click", nextQuestion);
    anwserThree.addEventListener("click", nextQuestion);
    anwserFour.addEventListener("click", nextQuestion);

}


if (localStorage.getItem("save")) {
    highscores = JSON.parse(localStorage.getItem("save"));
}

function displayHighscore() {
    showHighscore.innerHTML = "highscore <br>";
    for (i = 0; i < highscores.length; i++) {
        showHighscore.innerHTML =
            showHighscore.innerHTML +
            highscores[i].inital +
            " - " +
            highscores[i].score +
            "<br>";
    }
    showHighscore.innerHTML =
        showHighscore.innerHTML +
        `<br><button class="restart">Replay Quiz</button>
    <button class="quit">Quit Quiz</button>`;
}


startBtn.addEventListener("click" , startQuiz);
