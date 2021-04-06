const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const choices = [rock, paper, scissors];
let random = Math.floor(Math.random() * choices.length);

function computerPlay() {
    console.log(random, choices[random]);
}

console.log(computerPlay());
