const btn = document.querySelector('#start-quiz-btn');
const quizContainer = document.getElementById('questions');
const resultsContainer = document.getElementById('results');

function timer() {
  var sec = 10;
  var timer = setInterval(function() {
    document.getElementById('timerDisplay').innerHTML='00:'+sec;
    sec--;
    if (sec === 0) {
      clearInterval(timer);
      alert("You are out of time!");
    }
  }, 1000);
}

//  THIS SECTION IM NOT SURE IF ITS RIGHT 
// function buildQuiz() {
//   const output = [];

//   questions.forEach(
//     (currentQuestion, questionNumber) => {
//       const answers = [];

//       for(letter in currentQuestion.answers){
//         answers.push(
//           `<label>
//           <input type="button" name="questions${questionNumber}" value="${letter}">
//           ${letter} :
//           ${currentQuestion.answers[letter]}
//         </label>`
//         );
//       }
//     output.push(
//      `<div class="questions"> ${currentQuestion.question} </div>
//       <div class="answers"> ${answers.join("")} </div>`
//     );
//     }
//   );
//   quizContainer.innerHTML = output.join('');
// }

function showResults() {

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