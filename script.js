let options = ["Rock", "Paper", "Scissors"];

let buttons = document.querySelectorAll(".player-button");
let computerChoiceParagraph = document.querySelector('#computer-selection');
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', addButtonBorder));

buttons.forEach(button => button.addEventListener('transitionend', removeButtonBorder));

buttons.forEach(button => button.addEventListener('click', () => {
    computerSelection = getComputerChoice()
    computerChoiceParagraph.textContent = computerSelection;

    playerSelection = button.value;

    playRound(playerSelection, computerSelection);
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

function playRound(player, computer) {
    if (player === computer){
        document.querySelector('.game-round').textContent = "This round was a tie!";
        return;
    } else if ((player === "Paper" && computer === "Scissors") || 
                (player === "Rock" && computer === "Paper") ||
                (player === "Scissors" && computer === "Rock")) {
        computerScore++;
        document.querySelector('#computer-score').textContent = computerScore;
        document.querySelector('.game-round').textContent = `Hammond won this round. ${computer} beats ${player}.`;
        return;
    } else {
        playerScore++;
        document.querySelector('#player-score').textContent = playerScore;
        document.querySelector('.game-round').textContent = `You won this round! ${player} beats ${computer}.`;
        return;
    }
}