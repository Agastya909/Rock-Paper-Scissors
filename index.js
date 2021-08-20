var names = ['rock', 'paper', 'scissors'];
var userScore = 0, compScore = 0, counter = 0;
// comp holds string for computer and user for user
var comp, user;

//  generates a random number and selects one choice for computer
function computerChoice() {
    var randomNum = Math.floor(Math.random() * 3);
    comp = names[randomNum];
}

// compares the two choices (comp and user) and updates the score
function compare() {
    if (userScore == 10 || compScore == 10) {
        return; // this if makes sure that the counter does not go beyond 10
    }
    else if (comp == user) {
        return;
    }
    else if (comp == 'rock') {
        if (user == 'paper') {
            userScore++;
        }
        else if (user == 'scissors') {
            compScore++;
        }
    }
    else if (comp == 'paper') {
        if (user == 'rock') {
            compScore++;
        }
        else if (user == 'scissors') {
            userScore++;
        }
    }
    else if (comp == 'scissors') {
        if (user == 'rock') {
            userScore++;
        }
        else if (user == 'paper') {
            compScore++;
        }
    }
}

// changes the value of scores displayed
function changeScore() {
    document.getElementById('player-score-id').innerHTML = userScore;
    document.getElementById('comp-score-id').innerHTML = compScore;
}

// restart the game
function restartGame() {
    userScore = 0;
    compScore = 0;
    changeScore();
    document.getElementById('heading').innerHTML = 'Rock Paper Scissor';
}

// same as restart but is used to restart 1.25s after the game was finished
function timeOutRestart() {
    var delay = 1250;
    setTimeout(() => {
        userScore = 0;
        compScore = 0;
        changeScore();
        document.getElementById('heading').innerHTML = 'Rock Paper Scissor';
    }, delay);
}

// checks for the winner and reset the game is winner found
function winnerCheck() {
    if (compScore == 10) {
        document.getElementById('heading').innerHTML = 'You Lost';
        timeOutRestart();
    }
    if (userScore == 10) {
        document.getElementById('heading').innerHTML = 'You won !!';
        timeOutRestart();
    }
}

document.getElementById('rock').onclick = function () {
    user = 'rock';
    computerChoice();
    compare();
    changeScore();
    winnerCheck();
}

document.getElementById('paper').onclick = function () {
    user = 'paper';
    computerChoice();
    compare();
    changeScore();
    winnerCheck();
}

document.getElementById('scissors').onclick = function () {
    user = 'scissors';
    computerChoice();
    compare();
    changeScore();
    winnerCheck();
}

document.getElementById('restart-id').onclick = restartGame;