const rpsIcons = document.querySelectorAll('.rps-icon');
rpsIcons.forEach((rpsIcon) => {
    rpsIcon.addEventListener('click', handleRPSClick);
});

function handleRPSClick(e){
    const roundElement = document.querySelector('.roundNumber');
    const roundNum = parseInt(roundElement.textContent);
    const playerScore = document.querySelector('.playerScore');
    const comScore = document.querySelector('.comScore');

    if(roundNum <= 5){
        const result = playRound(getComputerSelection(), e.currentTarget.alt);
        switch (result) {
            case 'lose':
                comScore.textContent = 1 + parseInt(comScore.textContent);
                break;

            case 'win':
                playerScore.textContent = 1 + parseInt(playerScore.textContent);
                break;
            case 'draw':
                break;
        };
        if (roundNum <= 4){
            roundElement.textContent = roundNum + 1;
        }else{
            displayResults(parseInt(playerScore.textContent), parseInt(comScore.textContent));
            rpsIcons.forEach((rpsIcon) => {
                rpsIcon.removeEventListener('click', handleRPSClick);
            });
        };
    };
}

//Function for randomly generating the computer's selection of rock, paper, or scissors
function getComputerSelection(){
    const number = Math.floor((Math.random() * 3) + 1); //randomly generates an int between 1 and 3 inclusively
    switch (number) { //switch case is used to translate random number into a selection for the game
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

//Function for playing 1 round of Rock Paper Scissors
function playRound(computerSelection, playerSelection){

    const winResponse = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseReponse = `You lose. ${computerSelection} beats ${playerSelection}`;
    const drawReponse = `Draw! ${playerSelection} matches ${computerSelection}`;

    const gameStatus = document.querySelector('.gameStatus');
    
    switch (computerSelection){
        case "rock":
            switch (playerSelection){
                case "rock":
                    gameStatus.textContent = drawReponse;
                    return "draw";
                case "paper":
                    gameStatus.textContent = winResponse;
                    return "win";
                case "scissors":
                    gameStatus.textContent = loseReponse;
                    return "lose";
            }
            break;
        case "paper":
            switch (playerSelection){
                case "rock":
                    gameStatus.textContent = loseReponse;
                    return "lose";
                case "paper":
                    gameStatus.textContent = drawReponse;
                    return "draw";
                case "scissors":
                    gameStatus.textContent = winResponse;
                    return "win";

            }
            break;
        case "scissors":
            switch (playerSelection){
                case "rock":
                    gameStatus.textContent = winResponse;
                    return "win";
                case "paper":
                    gameStatus.textContent = loseReponse;
                    return "lose";
                case "scissors":
                    gameStatus.textContent = drawReponse;
                    return "draw";    
            }
        break;
    }
}

//Function for displaying the final results
function displayResults(playerScore, comScore){
    const resultsDiv = document.querySelector('.results');
    const resultP = document.createElement('p');
    if(playerScore > comScore){
        resultP.textContent = "You Win!";
    } else if(playerScore < comScore){
        resultP.textContent = "You Lose.";
    } else {
        resultP.textContent = "Draw.";
    }
    resultP.classList.add('resultP');
    resultsDiv.appendChild(resultP);
}