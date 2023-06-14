
function playGame(){
    const computerSelection = getComputerChoice();
    
}

getComputerChoice();
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length); 
    // console.log(choices[randomChoice]);
    return choices[randomChoice];
}

