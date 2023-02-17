let options = ["rock", "paper", "scissors"];

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let buttons = document.querySelectorAll(".player-button");

rock.addEventListener("click", playerSelection);
paper.addEventListener("click", playerSelection);
scissors.addEventListener("click", playerSelection);

buttons.forEach(button => button.addEventListener('transitionend', removeSelection));

function playerSelection(e) {
    this.classList.add('selected');
}

function removeSelection(e) {
    this.classList.remove('selected');
}



function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length)
    let computerSelection = options[randomIndex]
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Select rock, paper, or scissors. ");
    
    playerSelection = playerSelection.toLowerCase().trim();

    while (!options.includes(playerSelection)) {
        playerSelection = prompt("Invalid selection.\nSelect rock, paper, or scissors: ");
    }

    return playerSelection;
}

function playSingleRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        return "Tie!"
    } else if ((playerSelection === "paper" && computerSelection === "scissors") || 
                (playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "scissors" && computerSelection === "rock")) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}