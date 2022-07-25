// The rock paper scissor game

//Variables to select the buttons elements "first step"
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorkButton = document.querySelector('.scissor');
const outcomeDiv = document.querySelector('.outcome');
const p = document.createElement('p');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

//Keep Scores
let playerScore = 0;
let computerScore = 0;

//This function randomly generates a number between 0 and 2.
//0 being rock, 1 being paper and 2 being scissor
const computerPlay = () => {
    const arrofChoices = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random() *arrofChoices.length);
    return arrofChoices[randomNum];
}

//Play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        
        p.innerText = `Your tied! You both picked ${playerSelection}`;
        outcomeDiv.append(p);
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        
        p.innerText = "You lost! Rock beats Scissors"
        outcomeDiv.append(p);

    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        
        p.innerText = "You Win! Scissors beats Paper";
        outcomeDiv.append(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        
        p.innerText = "You lost! Paper beats Rock";
        outcomeDiv.append(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        playerScore++;
        
        p.innerText = "You Win! Rock beats Scissors";
        outcomeDiv.append(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++;
        
        p.innerText = "You lost! Scissors beats Paper";
        outcomeDiv.append(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        
        p.innerText = "You Win! Paper beats Rock";
        outcomeDiv.append(p);
    }
}


// Function to check who won

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You win! ${playerScore} : ${computerScore}`;
        outcomeDiv.append(h2);
        outcomeDiv.removeChild(p);

    }

    if (computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You lost! ${computerScore} : ${playerScore}`;
        outcomeDiv.append(h2);
        outcomeDiv.removeChild(p);
    }
}

// function to update score

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
}

// Adding an event listener to each player selection 
rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});
scissorkButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissor';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});
