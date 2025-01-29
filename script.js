const questions = [
    { question: "What is the current version of HTML?", answers: ["1", "6", "8", "5"], correct: "5" },
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: "4" },
    { question: "CSS is used for?", answers: ["stylying", "structure", "function", "perfect look"], correct: "stylying" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progress = document.getElementById("progress");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next Question";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    progress.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn", "btn-outline-primary");
        button.addEventListener("click", () => selectAnswer(button, currentQuestion.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(button, correctAnswer) {
    if (button.innerText === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = `🎉 You scored ${score} out of ${questions.length}!`;
        answerButtons.innerHTML = "";
        progress.innerText = "";
        nextButton.innerText = "Restart Quiz";
        nextButton.style.display = "block";
        nextButton.addEventListener("click", startQuiz);
    }
});

startQuiz();
