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
    console.log(`Hammond: ${computerSelection}`);

    playerSelection = button.value;
    console.log(`Player: ${playerSelection}`);

    console.log(playRound(playerSelection, computerSelection));
    console.log(`Hammond score: ${computerScore}, Player score: ${playerScore}`);
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

    computer = computer.toLowerCase();
    if (player === computer){
        document.querySelector('.game-round').textContent = "This round was a tie!";
        return
    } else if ((player === "paper" && computer === "scissors") || 
                (player === "rock" && computer === "paper") ||
                (player === "scissors" && computer === "rock")) {
        computerScore++;
        document.querySelector('#computer-score').textContent = computerScore;
        document.querySelector('.game-round').textContent = "Hammond won this round.";
        return
    } else {
        playerScore++;
        document.querySelector('#player-score').textContent = playerScore;
        document.querySelector('.game-round').textContent = "You won this round!";
        return
    }
}