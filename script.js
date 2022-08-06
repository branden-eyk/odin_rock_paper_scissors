//Function for playing a five round game of rock, paper, scissors with the computer
function game(){
    let computerSelection = "";
    let playerSelection = "";
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){ //For loop ensures each game will have 5 rounds
        console.group(`Round ${i + 1}`); //create a console log group for each round to neatly seperate printed results
        computerSelection = getComputerSelection(); //call the getComputerSelection function to get the computer's choice
        playerSelection = getPlayerSelection(); //call the getPlayerSelection function to get the player's choice
        let result = playRound(computerSelection, playerSelection); //call the playRound function to play the round, result is returned as a string
        switch (result){ //switch case increments the appropriate score variable based on the result string
            case "win":
                playerScore++;
                break;
            case "lose":
                computerScore++;
            case "draw": // if there's a draw, nothing increments
                break;
        }
        console.log(`The score is now: Player ${playerScore} - Computer ${computerScore}`); //print current score to console
        console.groupEnd(`Round ${i + 1}`); //end the console log group so that when the loop occurs a new group will be created seperately
    }

    if (playerScore > computerScore){ //If statement determines, based on score variables, who the winner is and prints result to console
        console.log(`Winner: Player`);
    } else if (playerScore < computerScore){
        console.log("Winner: Computer");
    } else {
        console.log("It's a draw!");
    }
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

//Function for getting the player's selection of rock, paper, or scissors
function getPlayerSelection(){
    let invalidResponse = true;
    let playerSelection = "";

    while (invalidResponse) { //While loop loops over the following code until the user enters rock, paper, or scissors and nothing else
        playerSelection = prompt("Enter your selection: Rock, Paper, or Scissors").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){ //Checks if user entered rock or paper or scissors
            invalidResponse = false; //makes invalidResponse false and breaks the loop
        } else {
            alert("Invalid entry. Please only enter Rock, Paper, or Scissors"); //alert the user about invalid input so they know why they need to enter again
        }
    }

    return playerSelection;
}

//Function for playing 1 round of Rock Paper Scissors
function playRound(computerSelection, playerSelection){
    //Canned responses are setup so that win, lose, and draw responses only need to be written once and can be changed easily
    const winResponse = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseReponse = `You lose. ${playerSelection} beats ${computerSelection}`;
    const drawReponse = `Draw! ${playerSelection} matches ${computerSelection}`;
    
    //Nested switch cases determine the end result based on what the computer chose and what the player chose
    //Corresponding canned response is printed to console and a value is returned that can be used to do score keeping logic
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