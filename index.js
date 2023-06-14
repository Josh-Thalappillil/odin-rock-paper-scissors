
const gameContainer = document.getElementById("game");

let userScore = 0;
let computerScore = 0;



const player = document.getElementById("userScore");
player.textContent = `Player Score: ${userScore}`;

const computer = document.getElementById("computerScore");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.getElementById("output");
output.textContent = "Good Luck!"



gameContainer.addEventListener("click", function(event){
    if(event.target.matches("button")){
        const userSelection = event.target.dataset.choice;
        console.log("User chose:", userSelection);

        const computerSelection = getComputerChoice();
        console.log("Computer chose:", computerSelection);

        const winner = getWinner(userSelection, computerSelection);
        console.log(winner);

        player.textContent = `Player Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;

        if (userScore === 5 || computerScore === 5) {
            endGame();
        }
    }
})


const computerSelection = getComputerChoice();

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length); 
    // console.log(choices[randomChoice]);
    return choices[randomChoice];
}

function getWinner(userSelection, computerSelection){
    if (userSelection === computerSelection){
        output.textContent = `Its a tie! You chose ${userSelection} and The computer chose ${computerSelection}`;
    }
    else if (userSelection === "Rock" && computerSelection === "Scissors"){
        output.textContent = `You won! You chose ${userSelection} and The computer chose ${computerSelection}`;
        userScore++;;
    }
    else if (userSelection === "Paper" && computerSelection === "Rock"){
        output.textContent = `You won! You chose ${userSelection} and The computer chose ${computerSelection}`;
        userScore++;;
    }
    else if (userSelection === "Scissors" && computerSelection === "Paper"){
        output.textContent = `You won! You chose ${userSelection} and The computer chose ${computerSelection}`;
        userScore++;
    }
    else{
        output.textContent = `You lost! You chose ${userSelection} and The computer chose ${computerSelection}`;
        computerScore++;
    }
    return output.textContent;
}


function endGame() {
    // Disable further button clicks
    const buttons = gameContainer.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Determine the final winner
    let winner;
    if (userScore === computerScore) {
        winner = "It's a tie!";
    } else if (userScore > computerScore) {
        winner = "You win!";
    } else {
        winner = "Computer wins!";
    }
    output.textContent = `Game over! ${winner} Select an option to play again!`;

    // Reset the scores
    userScore = 0;
    computerScore = 0;
    player.textContent = `Player Score: ${userScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;

    // Enable button clicks for a new game
    buttons.forEach(button => {
        button.disabled = false;
    });
}