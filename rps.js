const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const choices = [rock, paper, scissors];
let random = Math.floor(Math.random() * choices.length);
let playerSelection = prompt("Rock, Paper, Scissors?")
function computerPlay() {
    console.log(random, choices[random]);
}
if (playerSelection == "Rock" && computerPlay == "Scissors") {
    alert("Rock beats scissors! You win!")
}
else if (playerSelection == "Rock" && computerPlay == "Paper") {
    alert("Paper beats rock! You lose!")
}
else if (playerSeletion == "Rock" && computerPlay == "Rock") {
    alert("Tie! Try again!")
}
console.log(computerPlay());
