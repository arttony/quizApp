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
  music.play();
  music.volume = 0.1;
}
//changes the volume on load
window.onload = () => {
  startMusic();
}



//keep track of score
let score = 0;

//keep track of question
let questionIndex = 0;

//empty startTime & endTime var
let startTime;
let endTime

//array of question objects
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

//start button event
const startGame = () => {
  //keep track of time
  getStartTime(startTime);
  hideContainer(startBttn)
  showContainer(gameContainer);
  changeQuestion(questions[questionIndex]);
};

//when quiz started
const getStartTime = () => {
  startTime = new Date();
};

//when quiz finished
const getEndTime = () => {
  endTime = new Date()
}

//function to change question
const changeQuestion = (question) => {
  resetBackground()
  questionContainer.textContent = question.question;
  option1.textContent = question.answer1;
  option2.textContent = question.answer2;
  option3.textContent = question.answer3;
  option4.textContent = question.answer4;
  
};

//function to check for correct answer
const checkAnswer = (buttonNumber) => {
  if (questions[questionIndex].correct == buttonNumber) {
    questionIndex++
    document.body.classList.remove("normal");
    document.body.classList.add('correct')
    score++;
    
    if (questionIndex < questions.length){ 
      setTimeout(() => {
        changeQuestion(questions[questionIndex]
      )}, 2000); //waits 2 secs before changing questions
    } else{
      endScreen()
    }
    
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
const endScreen = () => {
  getEndTime(endTime)
  resetBackground()
  hideContainer(gameContainer)
  endScore.textContent =
    "You scored a " + score + " in " + (endTime - startTime) / 1000 + " seconds";
  showContainer(endCard);
  endCard.classList.add("end-flex");
};

//replay button click function
const replay =  () => {
  resetBackground()
  endCard.classList.remove("end-flex");
  hideContainer(endCard)
  questionIndex = 0;
  score = 0;
  startGame()
};

//function to add hidden class
const hideContainer = (container) => {
  container.classList.add("hidden");
};

//function to remove hidden class
const showContainer = (container) => {
  container.classList.remove("hidden");
};

//function to resect background color
const resetBackground = () => {
  document.body.classList.add("normal");
  document.body.classList.remove("incorrect");
  document.body.classList.remove('correct')
}