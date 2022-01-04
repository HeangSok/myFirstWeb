let count = 1

let randomNumber = Math.floor(Math.random() * 100) + 1

const yourGuess = document.querySelector('.yourGuess');
const yourResult = document.querySelector('.result');
const hiLowNotification = document.querySelector('.hiLow');

const inputValue = document.querySelector('.inputField');
const answerSubmit = document.querySelector('.answerSubmit');

const showRestartGameButton = document.querySelector('.hide__button');

function checkAnswer() {
    const userInput = Number(inputValue.value);
    
    if (count === 1 ) {
        yourGuess.innerHTML = "Your last guesses: "
    }

    yourGuess.innerHTML += userInput + " ";

    if (userInput === randomNumber) {
        yourResult.innerHTML = "Congratulation 🎉. The correct Answer is " + randomNumber;
        yourResult.style.backgroundColor = '#04aa6d';
        yourResult.style.color = 'white';
        hiLowNotification.innerHTML = '';
        gameOver();

    } else if (count === 10) {
        yourResult.innerHTML = "GAME OVER !!!";
        hiLowNotification.innerHTML = '';
        gameOver();
    } else {
        yourResult.innerHTML = 'Wrong Answer! Please try again.';
        yourResult.style.backgroundColor = '#ff3400';
        yourResult.style.color = 'white';
        if(userInput < randomNumber) {
            hiLowNotification.innerHTML = 'Please give a higher number! ' + (10 - count) + 'Guess left 😅';
        
        } else if(userInput > randomNumber) {
            hiLowNotification.innerHTML = 'Please give a lower number! ' + (10 - count) + 'Guess left 😅';
        }
    }

    count++;
    inputValue.value = '';
    inputValue.focus();

}

answerSubmit.addEventListener('click', checkAnswer);

function gameOver() {
    inputValue.disabled = true;
    answerSubmit.disabled = true;
    showRestartGameButton.style.display = 'block';
    showRestartGameButton.addEventListener('click', restartGame);
}
showRestartGameButton.addEventListener('click', restartGame);

function restartGame() {
    count = 1;
    const resultSections = document.querySelectorAll('.resultSection p');
    for (const i of resultSections) {
        i.innerHTML = '';
    }
    
    showRestartGameButton.style.display = 'none';

inputValue.disabled = false;
answerSubmit.disabled = false;
inputValue.vlaue = '';
inputValue.focus();

yourResult.style.backgroundColor = 'white';
randomNumber = Math.floor(Math.random() * 100) + 1;

}


