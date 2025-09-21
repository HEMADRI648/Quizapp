const questions = [
    {
        question: "What is the capital of Andhra Pradesh?",
        answers: [
            { text: "Amaravati", correct: true},
            { text: "Hyderabad", correct: false},
            { text: "Visakhapatnam", correct: false},
            { text: "Vijayawada", correct: false},
        ]
    },
    {
        question: "What is the capital of Maharashtra?",
        answers: [
            { text: " Pune", correct: false},
            { text: "Nagpur", correct: false},
            { text: "Mumbai", correct: true},
            { text: "Nashik", correct: false},
        ]
    },
    {
        question: "What is the capital of Karnataka?",
        answers: [
            { text: "Mysuru", correct: false},
            { text: "Bengaluru", correct: true},
            { text: "Hubli", correct: false},
            { text: "Mangaluru", correct: false},
        ]
    },
    {
        question: "What is the capital of Gujarat?",
        answers: [
            { text: "Surat", correct: false},
            { text: "Ahmedabad", correct: false},
            { text: "Gandhinagar", correct: true},
            { text: "Rajkot", correct: false},
        ]
    },
     {
        question: "What is the capital of Rajasthan?",
        answers: [
            { text: "Udaipur", correct: false},
            { text: "Jaipur", correct: true},
            { text: "Jodhpur", correct: false},
            { text: "Ajmer", correct: false},
        ]
    },
     {
        question: "What is the capital of Tamil Nadu?",
        answers: [
            { text: "Madurai", correct: false},
            { text: "Madurai", correct: false},
            { text: "Chennai", correct: true},
            { text: "Tiruchirappalli", correct: false},
        ]
    },
     {
        question: "What is the capital of West Bengal?",
        answers: [
            { text: "Darjeeling", correct: false},
            { text: "Howrah", correct: false},
            { text: "Kolkata", correct: true},
            { text: "Siliguri", correct: false},
        ]
    },
     {
        question: "What is the capital of Punjab?",
        answers: [
            { text: "Jalandhar", correct: false},
            { text: "Chandigarh", correct: true},
            { text: "Amritsar", correct: false},
            { text: "Ludhiana", correct: false},
        ]
    },
     {
        question: "What is the capital of Odisha?",
        answers: [
            { text: "Puri", correct: false},
            { text: "Bhubaneswar", correct: true},
            { text: "Cuttack", correct: false},
            { text: "Rourkela", correct: false},
        ]
    },
     {
        question: "What is the capital of Telangana?",
        answers: [
            { text: "Nizamabad", correct: false},
            { text: "Warangal", correct: false},
            { text: "Hyderabad", correct: true},
            { text: "Karimnagar", correct: false},
        ]
    },          

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();