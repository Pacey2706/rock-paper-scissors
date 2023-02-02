let buttons = document.querySelectorAll('button');
let player = document.getElementById('player-area');
let computer = document.getElementById('computer-area');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let resultMessage = document.getElementsByClassName('message')[0];
let choices = ['rock', 'paper', 'scissor']

for (let button of buttons){
    button.addEventListener('click', function(){
        let playerChoice = this.getAttribute('data-type');
        startGame(playerChoice);
    })
};

function startGame(playerChoice){
    player.innerHTML = `<img src="assets/images/${choices[playerChoice]}.png">`;

    let computerChoice = Math.floor(Math.random() * choices.length);
    computer.innerHTML = `<img src="assets/images/${choices[computerChoice]}.png">`;

    getResult(choices[playerChoice], choices[computerChoice]);

    scores(winner);
};

let var1 = choices[playerchoice];
let var2 = choices[computerChoice];

function getResult(var1, var2){
    if (var1 === var2){
        resultMessage.innerHTML = "It's a DRAW!";
    }else if(var1 === choices[0] && var2 === choices[1]){
        resultMessage.innerHTML = "Sorry better luck next time!";
        console.log('howdy');
    }else if(var1 === choices[0] && var2 === choices[2]){
        resultMessage.innerHTML = "You Won!";
    }else if(var1 === choices[1] && var2 === choices[2]){
        resultMessage.innerHTML = "Sorry better luck next time!";
    }else if(var1 === choices[1] && var2 === choices[0]){
        resultMessage.innerHTML = "You Won!";
    }else if(var1 === choices[2] && var2 === choices[0]){
        resultMessage.innerHTML = "Sorry better luck next time!";
    }else if(var1 === choices[2] && var2 === choices[1]){
        resultMessage.innerHTML = "You won!";
    }
};

scores(winner)