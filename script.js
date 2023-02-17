let options = ["rock", "paper", "scissors"];

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