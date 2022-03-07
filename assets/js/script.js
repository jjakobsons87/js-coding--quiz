const start_btn = document.getElementById("start-quiz-btn");
const infoBox = document.getElementById('infoBox');
const quizBox = document.getElementById('quizBox')
const quizContainer = document.getElementById('questions');
const resultsContainer = document.getElementById('results');
const choiceA = document.getElementById("choiceA")
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
let score = 0;
let sec = 90;
let currentQuestionIndex = 0;

// creating questions 
let questions = [
  { question: "Commonly used data types do NOT include:",
    answers: {
      choiceA: "Strings",
      choiceB: "Booleans",
      choiceC: "Alerts",
      choiceD: "Numbers",
    },
    correctAnswer: "choiceB",
  },
  {
    question: "The condition in an if / else statement is enclosed with _______:",
    answers: {
      choiceA: "Quotes",
      choiceB: "Curly Brackets",
      choiceC: "Parenthesis",
      choiceD: "Square Brackets",
    },
    correctAnswer: "choiceC",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: {
      choiceA: "Numbers and Strings",
      choiceB: "Other Arrays",
      choiceC: "Booleans",
      choiceD: "All of the above",
    },
    correctAnswer: "choiceD",
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: {
      choiceA: "Commas",
      choiceB: "Curly Brackets",
      choiceC: "Quotes",
      choiceD: "Parenthesis",
    },
    correctAnswer: "choiceB"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      choiceA: "JavaScript",
      choiceB: "Terminal/bash",
      choiceC: "For Loops",
      choiceD: "console.log",
    },
    correctAnswer: "choiceC"
  },
];

// timer function 
function timer() {
  var sec = 10;
  var timer = setInterval(function () {
    document.getElementById("timerDisplay").innerHTML = sec;
    sec--;
    if (sec === 0) {
      clearInterval(timer);
      alert("You are out of time!");
    }
  }, 1000);
}

var selectedAnswer = function() {
  if (this.textContent == questions[currentQuestionIndex].correctAnswer) {
    window.alert("That is correct!")
  } else {
    window.alert("Wrong Answer! On to the next question!")
    count -= 10; 
  }
  nextQuestion();
}

function displayAnswers() {
  answer.El.innerHTML = "";
  for (let i=0; i < questions[currentQuestionIndex].answers.length; i++) {
    var answerButton = document.createElement('button');
    answerButton.onclick = selectedAnswer;
    answerButton.textContent = questions[currentQuestionIndex].answers[i];
    answersEl.appendChild(answerButton);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    gameOver();
  } else {
    questionEl.textContent = questions[currentQuestionIndex].question;
    displayAnswers;
  }
}

function gameOver () {
  prompt("Nice Job! Enter your initials to save your score!");
  score = sec;
  localStorage.setItem("score", score);
}

// start the quiz
start_btn.addEventListener("click", timer);











// have an option to view high scores 
// click start quiz
// hide info box and header
// show first question/answers and start timer 
// if correct answer is clicked, display correct, then go to next question
// if wrong answer is clicked, display incorrect, then go to next question 
// if timer runs out before all questions are answered, end quiz
// if all questions are answered, hide quiz element and show results element 
// show score and give option to add initials for high score
// 