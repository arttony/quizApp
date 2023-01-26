# quizApp

I wanted to create a simple browser based trivia type of game. This game would be a single player game where the player is playing against themselves, trying to get a better score and time. An issue I have ran into while creating this project was getting the music to autoplay on window load. This is due to the fact that Google Chrome's policy no allows for autoplay. Another feature I wanted to add was a live timer that starts when the startGame function is called and hides when endScreen is called. In the future I want to refactor the code so that the answers positions can be shuffled as well.

Known Bugs:
    -User is able to select the next answer wrong or correct in a timer interval after the correct answer is chosen and next question appears.

The questions in this app are contained in an array called questions which holds multiple objects. Within these objects are the questions and 4 different answers along with the correct element, which tells which option number is correct.

When the page first loads up, it loads the title of the app and a button labeled start. The start button has an event listener that is waiting for a click. Once the start button is clicked, the game begins by getting a startTime and revealing the game container by removing the hidden class to rid of the "display: none" in css. The game container contains a p element to hold the questions and 4 buttons that are contained in an answers div. The answers div is styled with grid. The question is also revealed by running the changeQuestion function. The changeQuestion function takes in the questions[questionIndex] to change the p and button textContent. Each of the 4 answer buttons have an inline script in html that listens for a click. Once an answer button is clicked, it calls on a function called checkAnswer with a buttonNumber being passed as well. The function checkAnswer runs an if statement that compares the buttonNumber that is clicked to the number in the object element called correct. If the buttonNumber matches, the score and questionIndex increases as well as the changeQuestion function being called after 2 seconds. Selecting the correct answer also changes the background color to green. Else the score will decrease by one and the background color changes to red and back to normal after 7 hundreths of a second. Once the user answers the final question correctly, the endScreen function is called. The endScreen function grabs tne endTime and updates the endCard textContent with the final score and the time elapsed in seconds. The endCard also contains a replay button that has an event listener. The replay event listener is waiting for a click so that it can restart the game by revealing the gameContainer and setting the score and questionIndex back to 0. The startTime is also reset by calling the getTime function again. 