const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const choices = [rock, paper, scissors];
let random = Math.floor(Math.random() * choices.length);
let playerSelection = prompt("Rock, Paper, Scissors?");
let computerSelection = computerPlay();
function computerPlay() {
    console.log(random, choices[random]);
    }
    
function playRound() {
    function computerPlay() {
    console.log(random, choices[random]);
    } 
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        alert("Rock beats scissors! You win!")
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        alert("Paper beats rock! You lose!")
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock") {
        alert("Tie! Try again!")
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        alert("Paper beats rock! You win!")
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        alert("Scissors beats paper! You lose!")
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        alert("Tie! Try again!")
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        alert("Rock beats scissors! You lose!")
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        alert("Scissors beats paper! You win!")
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        alert("Tie! Try again!")
    }
    else {
        alert("Try again!")
    }
}
playRound();
