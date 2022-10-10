function addClickListeners() {
    let buttons = document.querySelectorAll("button");
    console.log(buttons);
    buttons.forEach((btn) => {
        addEventListener("click", e => {
            playRound(btn.textContent, getComputerChoice());
        });
    });
}

addClickListeners();

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
        console.log("tie!");
        return 0;
    } else if((player === "rock" && computer === "scissors") ||
              (player === "scissors" && computer === "paper") ||
              (player === "paper" && computer === "rock")) {
        console.log("you win that round!");
        return 1;
    } else {
        console.log("computer won that round! One step closer to total annihilation!");
        return -1;
    }
}

function game() {
    console.log("Let's play Rock Paper Scissors!");
    console.log("The games will be played against the computer.\n" + 
                "Whoever reaches 5 points first wins!");

    let playerWins = 0, computerWins = 0;
    let promptMessage = "Let's start! What is your first choice?";

    while(playerWins < 5 && computerWins < 5) {
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
        promptMessage = "Another round, who will be victorious?";
    }
    let resultString = playerWins > computerWins ? "Congratulations, you have won!"
        : (computerWins > playerWins ? "So sad, the computer won!" 
        : "What a twist! Nobody won, it's a tie!");

    console.log(resultString);
    console.log(`Final score: \nComputer: ${computerWins}\nPlayer: ${playerWins}`);
}

// game();