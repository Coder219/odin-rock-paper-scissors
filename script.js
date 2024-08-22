const choices = ['rock','paper','scissors'];
const rounds = 5;
const gameLogic = {
    rock : {paper : 'computer', rock : 'tie' , scissors : 'human'},
    paper : {paper : 'tie', rock : 'human' , scissors : 'computer'},
    scissors : {paper : 'human', rock : 'computer' , scissors : 'tie'}
};

const rock_button = document.querySelector('.rock-button');
const paper_button = document.querySelector('.paper-button');
const scissors_button = document.querySelector('.scissors-button');

let humanScore = 0;
let computerScore = 0;
let ties = 0;
function getHumanChoice(){
    let humanChoice = prompt('Rock, paper, or scissors.').toLowerCase();
    while (!choices.includes(humanChoice)) humanChoice = prompt('Not a valid responce. Please choose rock, paper, or scissors.').toLowerCase();
    return humanChoice;
}
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}
function printScore(){
    console.log('Computer Score: '+computerScore);
    console.log('Human Score: '+ humanScore);
    console.log('Ties: '+ ties);
    console.log('===================')
}
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let outcome = gameLogic[humanChoice][computerChoice];
    switch(outcome){
        case 'human':
            console.log('Human Wins!');
            humanScore ++;
            break;
        case 'computer':
            console.log('Computer Wins!');
            computerScore ++;
            break;
        case 'tie':
            console.log('Tie!');
            ties++;
            break;
    }
    printScore();
}
function playGame(){
    for (let round = 1; round <= rounds; round++){
        playRound();
    }
}
playGame();