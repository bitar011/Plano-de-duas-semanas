const questions = [
    {
        question: "Qual a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro"],
        answer: "Brasília"
    },
    {
        question: "Qual o resultado de 3x4?",
        options: ["12", "9", "14"],
        answer: "12"
    },
    {
        question: "Qual linguagem usamos no navegador?",
        options: ["Python", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Qual o nome do Homem de Ferro?",
        options: ["Tony Stark", "Peter Parker", "Bruce Banner"],
        answer: "Tony Stark"
    },
    {
        question: "Qual o menor país do mundo?",
        options: ["Pernambuco", "Guiana Inglesa", "Vaticano"],
        answer: "Vaticano"
    }
]

let current = 0
let score = 0

const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answers")
const scoreEl = document.getElementById("score")

function showQuestion(){
    if(current >= questions.length){
        questionEl.textContent = "Fim do Quiz!"
        answersEl.innerHTML = ""
        scoreEl.textContent = `Você acertou ${score} de ${questions.length}`
        return
    }

    const q = questions[current]
    questionEl.textContent = q.question
    answersEl.innerHTML = ""

    q.options.forEach(option => {
        const btn = document.createElement("button")
        btn.textContent = option
        btn.onclick = () => {
            if(option === q.answer) score++
            current++
            showQuestion()
        }
        answersEl.appendChild(btn)
    })
}

showQuestion()