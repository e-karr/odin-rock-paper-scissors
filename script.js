let options = ["Rock", "Paper", "Scissors"];

let buttons = document.querySelectorAll(".player-button");
let computerChoiceParagraph = document.querySelector('#computer-selection');
let playerSelection = "";
let computerSelection = "";

buttons.forEach(button => button.addEventListener('click', addButtonBorder));

buttons.forEach(button => button.addEventListener('transitionend', removeButtonBorder));

buttons.forEach(button => button.addEventListener('click', () => {
    computerSelection = getComputerChoice()
    computerChoiceParagraph.textContent = computerSelection;
    console.log(`Hammond: ${computerSelection}`);

    playerSelection = button.value;
    console.log(`Player: ${playerSelection}`);
}));

function addButtonBorder(e) {
    this.classList.add('selected');
}

function removeButtonBorder(e) {
    this.classList.remove('selected');
}

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length)
    let computerSelection = options[randomIndex]
    return computerSelection;
}

// function getPlayerChoice() {
//     let playerSelection = prompt("Select rock, paper, or scissors. ");
    
//     playerSelection = playerSelection.toLowerCase().trim();

//     while (!options.includes(playerSelection)) {
//         playerSelection = prompt("Invalid selection.\nSelect rock, paper, or scissors: ");
//     }

//     return playerSelection;
// }

function playSingleRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
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