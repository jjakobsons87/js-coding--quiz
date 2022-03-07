const start_btn = document.querySelector('#start-quiz-btn');
const infoBox = document.querySelector('#welcome');
const quizBox = document.querySelector('#quizBox')
const quizContainer = document.getElementById('questions');
const resultsContainer = document.getElementById('results');
const choiceA = document.getElementById("option1")
const choiceB = document.getElementById("option2");
const choiceC = document.getElementById("option3");
const choiceD = document.getElementById("option4");

function timer() {
  var sec = 12;
  var timer = setInterval(function() {
    document.getElementById('timerDisplay').innerHTML=sec;
    sec--;
    if (sec == 0) {
      clearInterval(timer);
      alert("You are out of time!");
    }
  }, 1000);
}

function showResults() {

}

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
      b: "Curly Brackets",
      c: "Parenthesis",
      d: "Square Brackets",
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

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>"+ q.question + "</p>";

}

// function showQuestions() {

// };

// start the quiz
start_btn.addEventListener("click",timer);




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