var btn = document.querySelector('#start-quiz-btn');

function timer() {
  var sec = 60;
  var timer = setInterval(function() {
    document.getElementById('timerDisplay').innerHTML='00:'+sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

let questions = [
  { question: "Commonly used data types do NOT include:",
    answers: {
      a: "Strings",
      b: "Booleans",
      c: "Alerts",
      d: "Numbers",
    },
    correctAnswer: "b",
  },
  {
    question: "The condition in an if / else statement is enclosed with _______:",
    answers: {
      a: "Quotes",
      b: "Curly Brackets",
      c: "Parenthesis",
      d: "Square Brackets",
    },
    correctAnswer: "c",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: {
      a: "Numbers and Strings",
      b: "Other Arrays",
      c: "Booleans",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: {
      a: "Commas",
      b: "Curly Brackets",
      c: "Quotes",
      d: "Parenthesis",
    },
    correctAnswer: "b"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "JavaScript",
      b: "Terminal/bash",
      c: "For Loops",
      d: "console.log",
    },
    correctAnswer: "c"
  },
];

// function showQuestions() {

// };

// start the quiz
btn.addEventListener("click",timer);