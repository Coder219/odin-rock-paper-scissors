const rpsList = ['rock','paper','scissors'];
let humanScore = 0;
let computerScore = 0;
let ties = 0;
function getHumanChoice(){
    let humanChoice = prompt('Rock, paper, or scissors.');
    while (!rpsList.includes(humanChoice)) humanChoice = prompt('Not a valid responce. Please choose rock, paper, or scissors.');
    return humanChoice;
}
function getComputerChoice(){
    return rpsList[Math.floor(Math.random() * 3)];
}
function printScore(){
    console.log('Computer Score: '+computerScore);
    console.log('Human Score: '+ humanScore);
    console.log('Ties: '+ ties);
    console.log('=====================')
}
function computerWins(){
    computerScore += 1;
    console.log('Computer wins!');
}
function humanWins(){
    humanScore += 1;
    console.log('Human wins!');
}
function tie(){
    ties += 1;
    console.log('Tie!');
}
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice)  tie();
    if (humanChoice == 'rock'){
        if (computerChoice == 'paper') computerWins();
        if (computerChoice == 'scissors') humanWins();
    } else if (humanChoice == 'paper'){
        if (computerChoice == 'scissors') computerWins();
        if (computerChoice == 'rock' ) humanWins();
    } else if (humanChoice == 'scissors'){
        if (computerChoice == 'rock') computerWins();
        if (computerChoice == 'paper' ) humanWins();
    }
    printScore();
}
function playGame(){
    for (let round = 1; round <= 5; round++){
        playRound();
    }
}
playGame();