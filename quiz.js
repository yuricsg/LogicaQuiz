const easyQuestions = [
    {
        question: "Se a proposição P é verdadeira e Q é falsa, qual é o valor lógico de P e Q",
        answers: [
            {text: "Verdadeiro", correct: false},
            {text: "Falso", correct: true},
            {text: "Indeterminado", correct: false},
            {text: "Nenhuma das alternativas", correct: false},
        ]
    },
    {
        question: "Qual conectivo lógico é usado para representar a negação de uma proposição?",
        answers: [
            {text: "Não", correct: true},
            {text: "Ou", correct: false},
            {text: "E", correct: false},
            {text: "Nulo", correct: false},
        ]
    },
    {
        question: "Qual o valor lógico de uma proposição contraditória?",
        answers: [
            {text: "Sempre verdadeiro", correct: false},
            {text: "Todas estão corretas", correct: false},
            {text: "Depende da proposição", correct: false},
            {text: "Sempre falso", correct: true},
        ]
    },
    {
        question: "O que representa uma proposição contingente?",
        answers: [
            {text: " Uma proposição sempre verdadeira", correct: false},
            {text: "Uma proposição sempre falsa", correct: false},
            {text: "Uma proposição que pode ser verdadeira ou falsa, dependendo da situação", correct: true},
            {text: "Nenhuma das alternativas", correct: false},
        ]
    },
    {
        question: "Qual o valor lógico da proposição P ou F?",
        answers: [
            {text: "Falso", correct: false},
            {text: "Verdadeiro", correct: true},
            {text: "Indeterminado", correct: false},
            {text: "Nenhuma das alternativas", correct: false},
        ]
    }
];

const mediumQuestions = [
    {
        question: "Se P é verdadeira e Q é verdadeira, qual o valor lógico de P ou não Q",
        answers: [
            {text: "Falso", correct: false},
            {text: "Verdadeiro", correct: true},
            {text: "Indeterminado", correct: false},
            {text: "Nenhuma das alternativas", correct: false},
        ]
    },
    {
        question: "Dada a proposição composta Se P, então Q, qual é a única situação em que essa proposição será falsa?",
        answers: [
            {text: "Quando P é verdadeira e Q é falsa", correct: true},
            {text: "Quando P é falsa e Q é verdadeira", correct: false},
            {text: "Quando ambas são falsas", correct: false},
            {text: "Quando ambas são verdadeiras", correct: false},
        ]
    },
    {
        question: "O que caracteriza uma proposição como uma tautologia?",
        answers: [
            {text: "Todas as alternativas estão corretas", correct: false},
            {text: " Pode ser verdadeira ou falsa", correct: false},
            {text: "É falsa em todas as possíveis interpretações", correct: false},
            {text: "É verdadeira em todas as possíveis interpretações", correct: true},
        ]
    },
    {
        question: "Se P e Q são proposições verdadeiras, qual o valor lógico de Não P ou Q",
        answers: [
            {text: "Falso", correct: false},
            {text: "Indeterminado", correct: false},
            {text: "Verdadeiro", correct: true},
            {text: "Nenhuma das alternativas", correct: false},
        ]
    },
    {
        question: "Qual proposição resulta em uma contradição?",
        answers: [
            {text: "P ou ~P", correct: false},
            {text: "P e ~P", correct: true},
            {text: "P e Q", correct: false},
            {text: "P", correct: false},
        ]
    }
];

const hardQuestions = [
    {
        question: "Considere a proposição composta (P → Q) e (Q → P). O que ela representa?",
        answers: [
            {text: "Tautologia", correct: false},
            {text: "Equivalência lógica entre P e Q", correct: true},
            {text: "Contradição", correct: false},
            {text: "Nenhuma das alternativas", correct: false},
        ]
    },
    {
        question: "Qual o valor lógico de (P e Q) ou (não P e não Q) em uma interpretação onde P e Q têm o mesmo valor lógico?",
        answers: [
            {text: "Sempre verdadeiro", correct: true},
            {text: "Sempre falso", correct: false},
            {text: "Verdadeiro apenas se ambos forem verdadeiros", correct: false},
            {text: "Todas as alternativas estão corretas", correct: false},
        ]
    },
    {
        question: "Em que situação uma proposição composta P e (Q → P) será uma tautologia?",
        answers: [
            {text: "Quando Q é falso", correct: false},
            {text: "Quando Q é verdadeiro", correct: false},
            {text: "Quando P é verdadeiro", correct: false},
            {text: " Em todas as situações possíveis", correct: true},
        ]
    },
    {
        question: "Se a proposição composta (P ou Q) e (não P ou R) é uma tautologia, o que podemos concluir sobre R quando Q é falso?",
        answers: [
            {text: "R deve ser falso", correct: false},
            {text: "R pode ser verdadeiro ou falso", correct: false},
            {text: "R deve ser verdadeiro", correct: true},
            {text: "Nenhuma das alternativas", correct: false},
        ]
    },
    {
        question: "Qual das seguintes proposições é uma contingência?",
        answers: [
            {text: "P ou ~P", correct: false},
            {text: "P e Q", correct: true},
            {text: "P e ~Q", correct: false},
            {text: "~Q", correct: false},
        ]
    }
];

const startButton = document.getElementById("start-btn");
const startMenu = document.querySelector(".start-menu");
const appElement = document.querySelector(".app");
const difficultyMenu = document.getElementById("difficulty-menu");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    nextButton.style.display = "none";
    showQuestion();
}

function selectDifficulty(level) {
    if (level === 'easy') questions = easyQuestions;
    if (level === 'medium') questions = mediumQuestions;
    if (level === 'hard') questions = hardQuestions;
    
    difficultyMenu.style.display = "none"; // Oculta o menu de dificuldade
    appElement.style.display = "block"; // Exibe o quiz
    startQuiz();
}

// Atualize o evento do botão "Começar!" para mostrar o menu de dificuldade
startButton.addEventListener("click", () => {
    startMenu.style.display = "none"; 
    difficultyMenu.style.display = "block"; // Exibe o menu de dificuldade
});

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button, correct) {
    if (correct) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerHTML === questions[currentQuestionIndex].answers.find(ans => ans.correct).text) {
            btn.classList.add("correct");
        }
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Voltar ao Início";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        appElement.style.display = "none";  
        startMenu.style.display = "flex";   
        resetState();
    }
});
