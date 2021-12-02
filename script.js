// The rock paper scissor game

// Declaring variables to store computer score and user score 
let userScore = 0;
let computerScore = 0;
var choices;

    choices = {
        rock: 0, 
        paper: 1, 
        scissors: 2,
    };

//  The computerplay function that randomly select rock, paper or scissor

// a fuction that converts to case-insensitive 
function convertChoices() {
    playerSelection = prompt('Please choose rock, paper, or scissors').toLowerCase();
    return choices[playerSelection];
}

function computerPlay() {
    const choices = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

console.log(computerPlay());

//A function that plays a single round 



//console.log(convertMoves());

