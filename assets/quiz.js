// lays out quiz questions

const quizData = [
    {
        question: "What year was the first Formula 1 Championship held?",
        a: "1950",
        b: "1960",
        c: "1970",
        d: "1980",
        correct: "a",
    },
    {
        question: "How many Constructors Championships have Red Bull won in their time in Formula 1?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "d",
    },
    {
        question: "When did Scuderia Ferrari bring home their first Formula 1 trophy?",
        a: "1951",
        b: "1952",
        c: "1953",
        d: "1954",
        correct: "a",
    },
    {
        question: "At what speed does a Formula One car arrive into the pit box at?",
        a: "75km/h",
        b: "80km/h",
        c: "90km/h",
        d: "100km/h",
        correct: "b",
    },
    {
        question: "What is the best attendance ever recorded at a Formula 1 Grand Prix?",
        a: "420,000",
        b: "500,000",
        c: "380,000",
        d: "450,000",
        correct: "a",
    },
    {
        question: "What is the Formula One team Racing Point now known as?",
        a: "Alpha Tauri",
        b: "Alfa Romea",
        c: "Renault",
        d: "Aston Martin",
        correct: "d"
    },
    {
        question: "What is the record number of times a safety car has been deployed in a single Formula 1 Grand Prix?",
        a: "6",
        b: "4",
        c: "3",
        d: "5",
        correct: "a",
    },
    {
        question: "How many Formula 1 teams has Finnish driver, Valterri Bottas, raced for in his time in Formula 1?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
];

// finds all HTML elements

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// defines quiz score

let currentQuiz = 0
let score = 0

// loads the quiz questions and answers

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// function to seselect all answers

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

// function to return users' answer

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}




