let computerSelection = getComputerSelection();
let playerSelection = "";

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