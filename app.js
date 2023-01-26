//Art Tony Ramirez
//dom elements
const gameContainer = document.querySelector("main");
const questionContainer = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const endScore = document.getElementById("score");
const replayBttn = document.getElementById("replayBttn");
const endCard = document.getElementById("end-container");
const startBttn = document.getElementById("start");
const music = document.querySelector('audio')

function startMusic() {
  music.volume = 0.1;
  music.play();
}

//keep track of score
let score = 0;

//keep track of question
let questionIndex = 0;

//empty startTime & endTime var
let startTime;
let endTime

//randomized questions array
let shuffledQuestion

//array of question objects 16 questions
const questions = [
  {
    question: "What is the largest ocean in the world?",
    answer1: "Pacific",
    answer2: "Atlantic",
    answer3: "Indian",
    answer4: "Artic",
    correct: 1,
  },

  {
    question: "What is the capitol of France?",
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

  {
    question: "How many states does the United States consist of?",
    answer1: "15",
    answer2: "50",
    answer3: "25",
    answer4: "52",
    correct: 2,
  },

  {
    question: "What country is also called The Netherlands?",
    answer1: "England",
    answer2: "Ireland",
    answer3: "Holland",
    answer4: "Greenland",
    correct: 3,
  },

  {
    question: "How many countries are in the United Kingdom?",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correct: 4,
  },

  {
    question: "How many time zones are there in the US?",
    answer1: "8",
    answer2: "2",
    answer3: "3",
    answer4: "6",
    correct: 4,
  },

  {
    question: "What is the largest country in South America?",
    answer1: "Brazil",
    answer2: "Chile",
    answer3: "Argentina",
    answer4: "Columbia",
    correct: 1,
  },

  {
    question: "What country has the largest population?",
    answer1: "China",
    answer2: "United States",
    answer3: "Russia",
    answer4: "Germany",
    correct: 1,
  },

  {
    question: "Where would you find the 'Spanish Steps'?",
    answer1: "Spain",
    answer2: "Mexico",
    answer3: "Germany",
    answer4: "Italy",
    correct: 4,
  },

  {
    question: "What country is made up of 6852 islands?",
    answer1: "Hawaii",
    answer2: "Japan",
    answer3: "Philippines",
    answer4: "Madagascar",
    correct: 2,
  },

  {
    question: "What is the capitol of Canada?",
    answer1: "Toronto",
    answer2: "Ottawa",
    answer3: "Ontario",
    answer4: "Saskatchewan",
    correct: 2,
  },

  {
    question: "What state is Mount Rushmore located?",
    answer1: "South Dakota",
    answer2: "West Virginia",
    answer3: "Washington",
    answer4: "New York",
    correct: 1,
  },

  {
    question: "What state is known as the 'First State'?",
    answer1: "New Jersey",
    answer2: "Boston",
    answer3: "Delaware",
    answer4: "New York",
    correct: 3,
  },

  {
    question: "How many total islands does Hawaii have?",
    answer1: "169",
    answer2: "100",
    answer3: "114",
    answer4: "132",
    correct: 4,
  },

  {
    question: "How many time zones does Australia have?",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correct: 3,
  },
];

//start button event
function startGame(){
  startMusic();
  //keep track of time
  getStartTime(startTime);
  hideContainer(startBttn)
  showContainer(gameContainer);
  shuffledQuestion = questions.sort(() => Math.random() - .5)// shuffles questions
  changeQuestion(shuffledQuestion[questionIndex]);
  /* startClock(); */
};

//when quiz started
function getStartTime(){
  startTime = new Date();
};

//when quiz finished
function getEndTime(){
  endTime = new Date()
}

//function to change question
function changeQuestion(question){
  resetBackground()
  questionContainer.textContent = question.question;
  option1.textContent = question.answer1;
  option2.textContent = question.answer2;
  option3.textContent = question.answer3;
  option4.textContent = question.answer4;
  
};

//function to check for correct answer
function checkAnswer(buttonNumber){
  //if answer is correct
  if (questions[questionIndex].correct == buttonNumber) {
    questionIndex++
    document.body.classList.remove("normal");
    document.body.classList.add('correct')
    score++;
    
    //if there are more questions
    if (questionIndex < questions.length){ 
      setTimeout(() => {
        changeQuestion(shuffledQuestion[questionIndex]
      )}, 800); //waits .8 secs before changing questions
    } else{//if there are no more questions
      endScreen()
    }
    
  //if answer wrong
  } else {
    score--;
    document.body.classList.remove("normal")
    document.body.classList.add('incorrect')
    setTimeout(() => {
      resetBackground()
    }, 800) //waits 8 hundreths of a second before reseting background color
  }
};

//function to display score and replay button
function endScreen(){
  /* hideContainer(timer) */
  getEndTime(endTime)
  resetBackground()
  hideContainer(gameContainer)
  endScore.textContent =
    "You scored a " + score + " in " + (endTime - startTime) / 1000 + " seconds";
  showContainer(endCard);
  endCard.classList.add("end-flex");
};

//replay button click function
function replay(){
  resetBackground()
  endCard.classList.remove("end-flex");
  hideContainer(endCard)
  questionIndex = 0;
  score = 0;
  startGame()
};

//function to add hidden class
function hideContainer(container){
  container.classList.add("hidden");
};

//function to remove hidden class
function showContainer(container){
  container.classList.remove("hidden");
};

//function to resect background color
function resetBackground(){
  document.body.classList.add("normal");
  document.body.classList.remove("incorrect");
  document.body.classList.remove('correct')
}


//live clock
/* function startClock() {
  showContainer(timer)
  var currentDate = new Date();

  time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  document.getElementById("timer").innerHTML = time;

  setTimeout(startClock, 1000);
} */


