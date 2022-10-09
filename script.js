function getComputerChoice() {
    let rock = "rock", paper = "paper", scissors = "scissors";
    let choice = Math.floor((Math.random() * 3) + 1);
    switch(choice) {
        case 1: 
            return rock;
            break;
        case 2:
            return paper;
            break;
        case 3: 
            return scissors;
            break;
        default:
            return "No selection";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if(player === computer) {
        return 0;
    } else if((player === "rock" && computer === "scissors") ||
              (player === "scissors" && computer === "paper") ||
              (player === "paper" && computer === "rock")) {
        return 1;
    } else {
        return -1;
    }
}

function game() {
    console.log("Let's play Rock Paper Scissors!");
    console.log("The game will run 5 rounds against the computer.\n" + 
                "At the end of the 5th round, the highest score wins!");

    let playerWins = 0, computerWins = 0;
    let promptMessage = "Let's start! What is your first choice?";

    for(let i = 0; i < 5; i++) {
        player = prompt(promptMessage);
        let computer = getComputerChoice();
        let result = playRound(player, computer);
        if(result > 0) {
            playerWins++;
            console.log("You won that round!");
        } else if(result < 0) {
            computerWins++;
            console.log("The computer won that round! Oh no!");
        } else {
            console.log("It's a tie round! Phew, that was a close one!");
        }
        promptMessage = i < 3 ? "Another round, who will be victorious?" : 
                                "Time for the final round! It's anybody's game!";
    }
    let resultString = playerWins > computerWins ? "Congratulations, you have won!"
        : (computerWins > playerWins ? "So sad, the computer won!" 
        : "What a twist! Nobody won, it's a tie!");

    console.log(resultString);
    console.log(`Final score: \nComputer: ${computerWins}\nPlayer: ${playerWins}`);
}

game();