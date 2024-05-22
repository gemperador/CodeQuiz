document.addEventListener("DOMContentLoaded", function() {
  // Elements needed for the DOM
  const timerElement = document.getElementById("timer");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  // Define the quiz questions and answers
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
      answer: "3. To query and manipulate databases"
    },
    {
      question: "Which of the following is a backend framework for JavaScript?",
      options: ["1. React", "2. Angular", "3. Express", "4. Vue"],
      answer: "3. Express"
    },
    {
      question: "Which of the following is not a programming language?",
      options: ["1. Python", "2. CSS", "3. Java", "4. Ruby"],
      answer: "2. CSS"
    },
  ];

  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;

  // Start timer countdown
  const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
      showResult();
    }
  }, 1000);



  // Function to display the current question and options
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
    } else {
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      timerElement.textContent = timeLeft;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      clearInterval(countdown);
      showResult();
    }
  }

  // Function to display the quiz results
  function showResult() {
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }

  showQuestion();
});