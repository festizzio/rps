

const startButton = document.querySelector(".start");
const playerScoreSpan = document.querySelector(".playerScore");
const computerScoreSpan = document.querySelector(".compScore");
const goodEnd = document.querySelector(".goodEnd");
const badEnd = document.querySelector(".badEnd");
const resultMessage = document.querySelector(".resultMessage");
const playerSelectionSpan = document.querySelector(".selection .player");
const computerSelectionSpan = document.querySelector(".selection .computer");
const selectionSpan = document.querySelector(".selection");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let playerScore = 0, computerScore = 0;


function setup() {
    rock.addEventListener("click", e => playRound("rock"));
    paper.addEventListener("click", e => playRound("paper"));
    scissors.addEventListener("click", e => playRound("scissors"));
    startButton.textContent = "Start";
    startButton.addEventListener("click", e => {
        startButton.style.visibility = "hidden";
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    });

    goodEnd.style.visibility = "hidden";
    badEnd.style.visibility = "hidden";
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
}

setup();

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

function playRound(playerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = getComputerChoice();
    document.querySelector(".player").textContent = player;
    document.querySelector(".computer").textContent = computer;
    playerSelectionSpan.style.visibility = "visible";
    computerSelectionSpan.style.visibility = "visible";
    selectionSpan.style.visibility = "visible";

    if(player === computer) {

    } else if((player === "rock" && computer === "scissors") ||
              (player === "scissors" && computer === "paper") ||
              (player === "paper" && computer === "rock")) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }

    // Player should only lose the game if the computer wins 5-0 or 5-1
    if(computerScore === 5 || playerScore === 5) {
        if(playerScore <= 1) {
            badEnd.style.visibility = "visible";
        } else {
            goodEnd.style.visibility = "visible";
        }
        gameOver();
    } 
}

function gameOver() {
    startButton.textContent = "Play again";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    startButton.style.visibility = "visible";
    setup();
}