let computerSelection = getComputerSelection();
let playerSelection = getPlayerSelection();
playRound(computerSelection, playerSelection);

function getComputerSelection(){
    const number = Math.floor((Math.random() * 3) + 1);
    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.error("getComputerSelection function generated a number that wasn't between 1 and 3");
            break;
    }
}

function getPlayerSelection(){
    let invalidResponse = true;
    let playerSelection = "";

    while (invalidResponse) {
        playerSelection = prompt("Enter your selection: Rock, Paper, or Scissors").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
            invalidResponse = false;
        } else {
            alert("Invalid entry. Please only enter Rock, Paper, or Scissors");
        }
    }

    return playerSelection;
}

function playRound(computerSelection, playerSelection){
    const winResponse = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseReponse = `You lose. ${playerSelection} beats ${computerSelection}`;
    const drawReponse = `Draw! ${playerSelection} matches ${computerSelection}`;
    
    switch (computerSelection){
        case "rock":
            switch (playerSelection){
                case "rock":
                    console.log(drawReponse);
                    return "draw";
                case "paper":
                    console.log(winResponse);
                    return "win";
                case "scissors":
                    console.log(loseReponse);
                    return "lose";
            }
            break;
        case "paper":
            switch (playerSelection){
                case "rock":
                    console.log(loseReponse);
                    return "lose";
                case "paper":
                    console.log(drawReponse);
                    return "draw";
                case "scissors":
                    console.log(winResponse);
                    return "win";

            }
            break;
        case "scissors":
            switch (playerSelection){
                case "rock":
                    console.log(winResponse);
                    return "win";
                case "paper":
                    console.log(loseReponse);
                    return "lose";
                case "scissors":
                    console.log(drawReponse);
                    return "draw";    
            }
        break;
    }
}