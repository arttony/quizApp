/* //question class
 class Question {

   constructor(question, ans1, ans2, ans3, ans4) {
    this.question = question;
    this.answer1 = ans1
    this.answer2 = ans2
    this.answer3 = ans3
    this.answer4 = ans4
  } 

  constructor(obj){
    Object.assign(this, obj);
  }
  
} */ 

//dom elements
const gameContainter = document.querySelector("main");
const questionContainer = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const endScore = document.getElementById('score')


//array of object questions
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
    answer2: "Paris",
    answer3: "Germany",
    answer4: "New York",
    correct: 2,
  },

  {
    question: "What is the name of the smallest country in the world?",
    answer1: "Germany",
    answer2: "England",
    answer3: "The Vatican City",
    answer4: "Paris",
    correct: 3,
  },
];

/* const answerKey = ["lol", "Paris", "The Vatican City"]; */

//keep track of score
let score = 0;

//keep track of question
let questionIndex = 0;

let startTime

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
  //keep track of time
  getTime()
});

const getTime = () =>{
  startTime = new Date()
}

//function to change question
const changeQuestion = (question) => {
  //resetBackground()
  if(questionIndex < questions.length){
    questionContainer.textContent = question.question;
    option1.textContent = question.answer1;
    option2.textContent = question.answer2;
    option3.textContent = question.answer3;
    option4.textContent = question.answer4;
  }else{
    console.log(score)
    gameContainter.classList.add('hidden')
    endScreen(score)
  }
  
}

//function to check for correct answer
const checkAnswer = (buttonNumber) => {
  if (questions[questionIndex].correct == buttonNumber) {
    console.log("correct answer");
    /* document.body.classList.remove("normal"); */
    score++;
    console.log(score);
    questionIndex++;
    changeQuestion(questions[questionIndex]);
  } else {
    score--;
    console.log(score);
    /* document.body.classList.remove("normal")
    document.body.classList.add('wrong') */
  }
}

//function to display score and replay button
const endScreen = (score) => {
  let endTime = new Date()
  let endCard = document.getElementById('endCard')
  endScore.textContent = "Your Score: " + score
  endCard.classList.remove('hidden')
  endCard.classList.add('endFlex')
  
  console.log(endTime - startTime)
}

//replay button function
//endCard.classList.add('hidden')
//questionIndex = 0
//score = 0
//gameContainer.classList.remove('hidden')
//changeQuestion(questions[questionIndex])

/* function resetBackground(){
  document.body.classList.add("normal");
  document.body.classList.remove("wrong");
} */

//keep track of time stretch goal maybe?
//new Date


//how do i change questions and answers
//maybe change text.content?

//how do i store the questions and optional answers?
