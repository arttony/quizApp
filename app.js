//keep track of time stretch goal maybe?

//keep track of score
const score = 0;

//function to start game
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
  
  const gameContainter = document.querySelector('main')
  gameContainter.classList.remove('hidden')
  const question = document.getElementById('question').textContent = question1.question
  const option1 = document.getElementById('option1').textContent = question1.option1
  const option2 = document.getElementById("option2").textContent =
    question1.option2;
  const option3 = document.getElementById("option3").textContent =
    question1.option3;
  const option4 = document.getElementById("option4").textContent =
    question1.option4;  
  startBttn.setAttribute('class', 'hidden')
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
