const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const choices = [rock, paper, scissors];
let random = Math.floor(Math.random() * choices.length);
let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
let computerSelection = computerPlay();
function computerPlay() {
    return(random, choices[random]);
    }  
function playRound(playerSelection, computerSelection) {  
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        alert("Rock beats scissors! You win!")
    }
    else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("Paper beats rock! You lose!")
    }
    else if (playerSelection === "rock" && computerSelection === "Rock") {
        alert("Tie! Try again!")
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert("Paper beats rock! You win!")
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("Scissors beats paper! You lose!")
    }
    else if (playerSelection === "paper" && computerSelection === "Paper") {
        alert("Tie! Try again!")
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("Rock beats scissors! You lose!")
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert("Scissors beats paper! You win!")
    }
    else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        alert("Tie! Try again!")
    }
    else {
        alert("Oops! Someting went wrong! Try again!")
    }
}
playRound(playerSelection, computerSelection);

