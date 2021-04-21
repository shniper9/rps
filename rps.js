let playerScore = 0;
let computerScore = 0;  
function playRound() { 
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
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        alert("Rock beats scissors! You win this round!")
        playerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("Paper beats rock! You lose this round!")
        computerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "Rock") {
        alert("Tie! Try again!");
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert("Paper beats rock! You win this round!")
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("Scissors beats paper! You lose this round!")
        computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "Paper") {
        alert("Tie! Try again!")
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("Rock beats scissors! You lose this round!")
        computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert("Scissors beats paper! You win this round!")
        playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        alert("Tie Round!")
    }
    else {
        alert("Oops! Someting went wrong! Try again!")
    }
}
function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore > computerScore) {
        alert("You win the game with a score of "+ playerScore +"-" + computerScore + "!");
    }
    else if (playerScore === computerScore) {
        alert("Tie Game! "+ playerScore +"-" + computerScore) + "Boring!";
    }
    else {
        alert("You lose the game with a score of "+ playerScore +"-" + computerScore + "!");
    }
}
game();