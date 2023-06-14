
const gameContainer = document.getElementById("game");

gameContainer.addEventListener("click", function(event){
    if(event.target.matches("button")){
        const userSelection = event.target.dataset.choice;
        console.log("User chose:", userSelection);

        const computerSelection = getComputerChoice();
        console.log("Computer chose:", computerSelection);

        const winner = getWinner(userSelection, computerSelection);
        console.log(winner);

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
        return "It's a tie!";
    }
    else if (userSelection === "Rock" && computerSelection === "Scissors"){
        return "You win!";
    }
    else if (userSelection === "Paper" && computerSelection === "Rock"){
        return "You win!";
    }
    else if (userSelection === "Scissors" && computerSelection === "Paper"){
        return "You win!";
    }
    else{
        return "You lose!";
    }
}
