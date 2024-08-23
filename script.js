let humanScore = 0;
let computerScore = 0;
let ties = 0;
let in_round = false;
let currentRound = 1;
const choices = ['rock','paper','scissors'];
const gameLogic = {
    rock : {paper : 'computer', rock : 'tie' , scissors : 'human'},
    paper : {paper : 'tie', rock : 'human' , scissors : 'computer'},
    scissors : {paper : 'human', rock : 'computer' , scissors : 'tie'}
};
const choice_buttons = document.querySelectorAll('.choices');
const results = document.querySelector('.results');
const post_round_buttons = document.querySelector('.post-round-buttons');
const round = document.querySelector('.round');
const scoresElement = document.querySelector('.scores');
updateRound();
displayScore(humanScore,computerScore,ties);
choice_buttons.forEach(button => {
    button.onclick = ({ target }) => {
        if (in_round == false) playRound(target.id, getComputerChoice());
    };
});
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}
function determineOutcome(outcome){
    switch(outcome){
        case 'human':
            humanScore ++;
            return 'Human Wins!';
        case 'computer':
            computerScore ++;
            return 'Computer Wins!';
        case 'tie':
            ties++;
            return 'Tie!';
    }
}
function displayChoices(humanChoice, computerChoice) {
    const choicesHTML = `
      <div>Human choice: ${humanChoice}</div>
      <div>Computer choice: ${computerChoice}</div>
    `;
    results.innerHTML = choicesHTML;
  }
function displayWinner(outcome){
    const winnerElement = document.createElement('div');
    winnerElement.textContent = "Winner: "+outcome;
    results.appendChild(winnerElement);
  }
function resetRound(){
    in_round = false;
    currentRound += 1;
  }
function displayScore(humanScore,computerScore,ties){
    const scoresHTML = `
    <div>Human score: ${humanScore}</div>
    <div>Computer score: ${computerScore}</div>
    <div>Ties: ${ties}</div>
    `;
    scoresElement.innerHTML = scoresHTML;
  }
function updateRound(){
    round.textContent = `Current round: ${currentRound}`;
  }
function playRound(humanChoice,computerChoice){
    in_round = true;
    let outcome = gameLogic[humanChoice][computerChoice];
    displayChoices(humanChoice,computerChoice);
    displayWinner(determineOutcome(outcome));
    displayScore(humanScore,computerScore,ties);
    resetRound();
    updateRound();
}

