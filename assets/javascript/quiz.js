

// finds all HTML elements

const quiz= document.getElementById('quiz')
const answerChoice = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const nextBtn = document.getElementById('next')

// defines quiz score

let currentQuiz = 0
let score = 0

// loads the quiz questions and answers

displayQuiz()
function displayQuiz() {
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


// function to return users' answer

function getAnswer() {
    let answer
    answerChoice.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// event listener to submit answer when clicking submit button and increase score if correct

nextBtn.addEventListener('click', () => {
    const answer = getAnswer()

    if(answer) {
        if(answer == quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            displayQuiz()
         } else {
             quiz.innerHTML = `
             <h2>You got ${score}/${quizData.length} questions right!</h2>
             <button onclick="location.reload()">Try Again?</button>
             `
         }
      }
  })


