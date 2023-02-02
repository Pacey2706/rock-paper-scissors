let buttons = document.querySelectorAll('button');
let player = document.getElementById('player-area');
let computer = document.getElementById('computer-area');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let resultMessage = document.getElementsByClassName('message');
let choices = ['rock', 'paper', 'scissor']

for (let button of buttons){
    button.addEventListener('click', function(){
        let playerChoice = this.getAttribute('data-type');
        startGame(playerChoice);
    })
};

function startGame(playerChoice){
    player.innerHTML = `<img src="assets/images/${choices[playerChoice]}.png">`;
    console.log('hello');
};

function getComputerChoice(){

};