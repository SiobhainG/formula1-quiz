

// finds all HTML elements

let quiz= document.getElementById('quiz')
let answerChoice = document.querySelectorAll('.answer')
let questionTitle = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let nextBtn = document.getElementById('next')


// defines quiz score

let currentQuiz = 0
let score = 0

// loads the quiz questions and answers

displayQuiz()

function displayQuiz() {
    resetAnswers ()
    let currentQuizData = quizData[currentQuiz]
    questionTitle.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function resetAnswers() {
    answerChoice.forEach(answerChoice => answerChoice.checked = false)
}


// function to return users' answer

function getAnswer() {
    answerChoice.forEach(answerChoice => {
        if(answerChoice.checked) {
            answer = answerChoice.id
        }
    })
    return answer
}


// event listener to submit answer when clicking submit button and increase score if correct

nextBtn.addEventListener('click', () => {
    let answer = getAnswer()
    if(answer) {
        if(answer == quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            displayQuiz()
         } else {
             quiz.innerHTML = `
             <h2>Congrats! You got ${score}/${quizData.length} questions right!</h2>
             <button onclick="location.reload()">Try Again?</button>
             `
         }
      }
  })


