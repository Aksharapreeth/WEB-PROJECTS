const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'Who was the first person to step on the moon?',
        answers: [
            { text: 'Neil Armstrong', correct: true },
            { text: 'Buzz Aldrin', correct: false },
            { text: ' Michael Collins', correct: false },
            { text: ' Yuri Gagarin', correct: false }
        ]
    },
    {
        question: 'Current version of HTML?',
        answers: [
            { text: '5', correct: true },
            { text: '3', correct: false },
            { text: '2', correct: false },
            { text: ' 9', correct: false }
        ]
    },
    {
        question: 'The basic knowldge of fullstack ?',
        answers: [
            { text: 'CSS', correct: false },
            { text: 'Django', correct: false },
            { text: ' HTML', correct: true },
            { text: ' React', correct: false }
        ]
    },

];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

function startQuiz() {
    score = 0;
    scoreDisplay.textContent = 'Score: ' + score;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = 'Quiz Complete!';
    answerButtons.innerHTML = '';
    nextButton.style.display = 'none';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

startQuiz();
