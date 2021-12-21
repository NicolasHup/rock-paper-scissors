// The rock paper scissor game


// Values that translate rock, paper, scissors into numbers 

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 3;

// This function randomly generates a number between 0 and 2
// 0 being rock, 1 being paper & 2 being scissors

function computerPlay(){
    return Math.floor(Math.random()*3);// randomly select whole number and return it
}