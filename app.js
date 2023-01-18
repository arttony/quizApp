//keep track of time stretch goal maybe?

//keep track of score
const score = 0;

//function to start game
const startBttn = document.getElementById("start");
startBttn.addEventListener("click", () => {
  console.log("lol");
  //console.log(question1.question);
  const gameContainer = document.createElement("div");
  gameContainer.setAttribute("id", "game-container");
  gameContainer.append("AYYYYOOO");
  const body = document.querySelector("body");
  body.appendChild(gameContainer);
  const questionContainer = document.createElement('div')
  questionContainer.setAttribute('id', 'question-container')
  const question = document.createElement('p')
  question.setAttribute('id', 'question')
  question.append(question1.question)
  questionContainer.appendChild(question)
  const options = document.createElement('ul')
  const option1 = document.createElement('li')
  gameContainer.appendChild(questionContainer)
  startBttn.remove();
});

//alert for win w/ play again?

//alert for lost w/ play again?

//check for correct answer

//how do i change questions and answers
//maybe change text.content?

//how do i store the questions and optional answers?
const question1 = {
  question: "What time is it?",
  option1: "yo",
  option2: "nope",
  option3: "okay",
  option4: "lol",
};
