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
    /* Compare lowercase of playerSelection vs. computer Selection
    and return the winner. Rock > Scissors, Scissors > Paper, and
    Paper > Rock. */

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

for(let i = 0; i < 10; i++) {
    let player = getComputerChoice();
    let computer = getComputerChoice();
    let result = playRound(player, computer);
    let resultString = result > 0 ? "The player!" 
                    : (result < 0 ? "The computer!" : "Nobody, it's a tie!");
    console.log(`Player chose ${player} and computer chose ${computer}.
                The winner is ${resultString}`);
}

function game() {
    /* Play 5 rounds of RPS with the computer
    Each time, prompt the user for a selection, then
    call the playRound function passing the result returned from
    getComputerChoice. */
}