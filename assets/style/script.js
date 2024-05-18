const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["1. Hyper Text Markup Language", "2. Hyperlinks and Text Markup Language", "3. Home Tool Markup Language", "4. Home Tool Markup Language"],
    answer: "1. Hyper Text Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: ["1. Creative Style Sheets", "2. Cascading Style Sheets", "3. Computer Style Sheets", "4. Computer Style Sheets"],
    answer: "2. Cascading Style Sheets"
  },
  {
    question: "What is the purpose of the SQL language?",
    options: ["1. To style web pages", "2. To create dynamic web content", "3. To query and manipulate databases", "4. To define the structure of a webpage"],
    answer: "2. Cascading Style Sheets"
  },
  {
    question: "Which of the following is a backend framework for JavaScript??",
    options: ["1. React", "2. Angular", "3. Express","4. Vue"],
    answer: "3. Express"
  },
  {
    question: "Which of the following is not a programming language??",
    options: ["1. Python", "2. CSS", "3. Java", "4. Ruby"],
    answer: "3. Ruby"
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
}

showQuestion();