//question class
class Question {

  /* constructor(question, ans1, ans2, ans3, ans4) {
    this.question = question;
    this.answer1 = ans1
    this.answer2 = ans2
    this.answer3 = ans3
    this.answer4 = ans4
  } */

  constructor(obj){
    Object.assign(this, obj);
  }
  
}

const gameContainter = document.querySelector("main");
const questionContainer = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const questions = [
  {
    question: "What time is it?",
    answer1: "yo",
    answer2: "nope",
    answer3: "okay",
    answer4: "lol",
    correct: 4,
  },

  {
    question: "Capitol of France",
    answer1: "England",
    answer2: "New York",
    answer3: "Germany",
    answer4: "Paris",
    correct: 4,
  },

  {
    question: "What is the name of the smallest country in the world?",
    answer1: "England",
    answer2: "The Vatican City",
    answer3: "Germany",
    answer4: "Paris",
    correct: 2,
  },
];

//keep track of score
let score = 0;

//keep track of question
let questionIndex = 0;

//start button event
const startBttn = document.getElementById("start");
startBttn.addEventListener("click", () => {
  console.log("lol");
  //console.log(question1.question);

  /* const gameContainer = document.createElement("div");
  gameContainer.setAttribute("id", "game-container");
  const body = document.querySelector("body");
  body.appendChild(gameContainer);
  const questionContainer = document.createElement('div')
  questionContainer.setAttribute('id', 'question-container')
  const question = document.createElement('p')
  question.setAttribute('id', 'question')
  question.append(question1.question)
  questionContainer.appendChild(question)
  const options = document.createElement('div')
  const option1 = document.createElement('button')
  option1.setAttribute('id', 'option1')
  option1.append(question1.option1)
  const option2 = document.createElement("button");
  option2.setAttribute("id", "option2");
  option2.append(question1.option2);
  const option3 = document.createElement("button");
  option3.setAttribute("id", "option3");
  option3.append(question1.option3);
  const option4 = document.createElement("button");
  option4.setAttribute("id", "option4");
  option4.append(question1.option4);
  options.appendChild(option1)
  options.appendChild(option2);
  options.appendChild(option3);
  options.appendChild(option4);
  options.append(option1, option2, option3, option4)
  questionContainer.appendChild(options)
  gameContainer.appendChild(questionContainer) */
  startBttn.classList.add('hidden');
  gameContainter.classList.remove("hidden");
  changeQuestion(questions[questionIndex])
});

//function to change question
function changeQuestion (question) {
  //resetBackground()
  if(let =questionIndex < questions.length){
    questionIndex++
    questionContainer.textContent = question.question
    option1.textContent = question.answer1;
    option2.textContent = question.answer2;
    option3.textContent = question.answer3;
    option4.textContent = question.answer4;
  }else{
    alert("yo")
  }
  
}

//check for correct answer
function checkAnswer(buttonNumber){
  if(questions[questionIndex].correct == buttonNumber){
    console.log(questions[questionIndex]);
    /* document.body.classList.remove("normal"); */
    score++
    console.log(score)
    changeQuestion(questions[questionIndex]);
  } else{
    score--
    console.log(score)
    /* document.body.classList.remove("normal")
    document.body.classList.add('wrong') */
  }
}

/* function resetBackground(){
  document.body.classList.add("normal");
  document.body.classList.remove("wrong");
} */
//keep track of time stretch goal maybe?

//alert for win w/ play again?

//alert for lost w/ play again?



//how do i change questions and answers
//maybe change text.content?

//how do i store the questions and optional answers?
