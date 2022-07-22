// The rock paper scissor game


//Values that translate rock, paper, scissor into numbers
//const ROCK = 0;
//const PAPER = 1;
//const SCISSOR = 2;

//Variables to select the buttons elements "first step"
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorkButton = document.querySelector('.scissor');
const outcomeDiv = document.querySelector('.outcome');

//Keep Scores
let playerScore = 0;
let computerScore = 0;

//let gamesPlayed = 0;

//let earlyExit = false;

//


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
        const p = document.createElement('p');
        p.innerText = `Your tied! You both picked ${playerSelection}`;
        outcomeDiv.append(p);
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = "You lost! Rock beats Scissors"
        outcomeDiv.append(p);

    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = "You Win! Scissors beats Paper";
        outcomeDiv.append(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = "You lost! Paper beats Rock";
        outcomeDiv.append(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        playerScore++;
        const p = document.createElement('p');
        p.innerText = "You Win! Rock beats Scissors";
        outcomeDiv.append(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lost! Scissors beats Paper";
        outcomeDiv.append(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You Win! Paper beats Rock";
        outcomeDiv.append(p);
    }
}

// Adding an event listener to each player selection 
rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});
scissorkButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissor';
    playRound(playerSelection, computerSelection);
});


//Play until either computer or player reaches a score of 3 first
/*function game(){
    //Introduce the user to the game and get the user's input 

    while (gamesPlayed < 5){

        gamesPlayed ++;
        let choice = prompt("Welcome to Rock, Paper & Scissors! Enter your choice.", "Exit");

        if(choice == undefined){
            earlyExit = true;
            console.log("Chickened out!");
            break;
        }

        console.log(choice.toLowerCase());
        

        if(choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissor"){
            
            if(choice.toLowerCase() == "rock"){
                console.log(playRound(ROCK, computerPlay()));

                console.log("Computer: " + computerScore + "     " + "You: " + playerScore);
                console.log("Games played = " + gamesPlayed);
                
            }
            else if(choice.toLowerCase() == "paper"){
                console.log(playRound(PAPER, computerPlay()));

                console.log("Computer: " + computerScore + "     " + "You: " + playerScore);
                console.log("Games played = " + gamesPlayed);
            }
            else{
                console.log(playRound(SCISSOR, computerPlay()));

                console.log("Computer: " + computerScore + "     " + "You: " + playerScore);
                console.log("Games played = " + gamesPlayed);
            }

            if(computerScore == 3 || playerScore == 3){
                break;//Exit if any player reaches 3 before 5 games end.
            }
            

        }
        else if(choice.toLowerCase() == "exit"){
            earlyExit = true;
            console.log("Chickened out!")
            break; //Exit game if user wants to exit

        }
        else{
        console.log("Please enter either rock, paper or scissors.");//User entered wrong text
        gamesPlayed--;
        }
    
    }

    


    if(!earlyExit){
        if (playerScore > computerScore){
            console.log("Results: You win the game!");
        }
        else if (computerScore > playerScore){
            console.log("Reseults: You loose the game");
        }
        else if(computerScore == playerScore){
            console.log("Results: Draw game.")
        }
    }

    gamesPlayed = 0;
    playerScore = 0;
    computerScore = 0;
}*/