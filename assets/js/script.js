const start_btn = document.getElementById("startQuizBtn");
const infoBox = document.getElementById('infoBox');
const quizBox = document.getElementById('quizBox');
const timerEl = document.getElementById('timer');
const quizContainer = document.getElementById('question');
const resultsContainer = document.getElementById('results');
const answerEl = document.getElementById('answers');
const timeLeftEl = document.getElementById('timeLeft');
let scoreTotal = JSON.parse(localStorage.getItem("user")) || [];
let sec = 20;
let time =  null;
let currentQuestionIndex = 0;

// creating questions 
let questions = [
  { question: "Commonly used data types do NOT include:",
    answers: [
      "Strings",
      "Booleans",
      "Alerts",
      "Numbers",
],
    correctAnswer: "Booleans",
  },
  {
    question: "The condition in an if / else statement is enclosed with _______:",
    answers: [
      "Quotes",
      "Curly Brackets",
      "Parenthesis",
      "Square Brackets",
    ],
    correctAnswer: "Parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
      "Commas",
      "Curly Brackets",
      "Quotes",
      "Parenthesis",
    ],
    correctAnswer: "Curly Brackets"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "JavaScript",
      "Terminal/bash",
      "For Loops",
      "console.log",
    ],
    correctAnswer: "console.log"
  },
];

// timer function 
function timer() {
  timerEl.innerHTML = sec;
  sec--;
  if (sec == 0) {
    clearInterval(timer);
    alert("You are out of time!");
  }
};

function startTimer () {
  time = setInterval(timer, 1000);
}

function selectedAnswer() {
  if (this.textContent == questions[currentQuestionIndex].correctAnswer) {
    window.alert("That is correct!")
  } else {
    window.alert("Wrong Answer! On to the next question!")
    sec -= 10; 
  }
  nextQuestion();
}

function displayAnswers() {
  answerEl.innerHTML = "";
  for (let i=0; i < questions[currentQuestionIndex].answers.length; i++) {
    var answerButton = document.createElement('button');
    answerButton.onclick = selectedAnswer;
    answerButton.textContent = questions[currentQuestionIndex].answers[i];
    answerEl.appendChild(answerButton);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    gameOver();
  } else {
    question.textContent = questions[currentQuestionIndex].question;
    displayAnswers();
  }
}

// when the game ends, prompt user to enter initals to save in local storage with score 
function gameOver () {
  nameInitials = prompt("Nice Job! Your score is " + sec + ". Enter your initials to save your score!");
  var user = {
    userName: nameInitials,
    scoreTotal: sec,
  };
  scoreTotal.push(user);
  localStorage.setItem("user", JSON.stringify(scoreTotal));
  return goAgain();
}

function goAgain() {
  clearInterval(time);
  infoBox.style.display = "block";
  quizBox.style.display = "none";
  timeLeftEl.style.display = "none";
  timerEl.style.display = "none";
}

// on page load hide the timer/time left display 
onload = function() {
  timeLeftEl.style.display = "none";
  timerEl.style.display = "none";
}
// start the quiz
start_btn.onclick = function() {
  startTimer ();
  infoBox.style.display = "none";
  quizBox.style.display = "block";
  timerEl.style.display = "block";
  timeLeftEl.style.display = "block";
  quizContainer.textContent = questions[currentQuestionIndex].question;
  answers.textContent = "";
  displayAnswers();
}
