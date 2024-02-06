import Questions from "./data.js"
const Quiz = document.getElementById("quiz-container")
const Ques = document.getElementById("questions-container")
Ques.textContent = "WELCOME To the QUIZ"
const Options = document.getElementById("options-container")
const startBtn = document.getElementById("startBtn")
let score = 0
let currentIndex = 0

startBtn.addEventListener("click", displayQuestion)
function displayQuestion() {
	Ques.innerHTML = ""
	Options.innerHTML = ""
	startBtn.style.display = "none"
	const question = Questions[currentIndex]

	Ques.textContent = question.Question
	const buttons = document.createElement("div")
	question.options.forEach((option) => {
		const opt = document.createElement("button")
		opt.textContent = option
		opt.addEventListener("click", function () {
			if (event.target.textContent == question.options[question.correct]) {
				score++
				currentIndex++
				console.log(score, currentIndex)
                check();
				
			} else {
				currentIndex++
                check();
				
			}
		})
		buttons.appendChild(opt)
	})
	Options.appendChild(buttons)
}
function check() {
	if (Questions.length == currentIndex) {
		startBtn.style.display = "block"
		startBtn.textContent = "STOP"
		Quiz.textContent = "YOur Quiz is Over and your score is" + score
       
	} else {
        displayQuestion();
	}
}
