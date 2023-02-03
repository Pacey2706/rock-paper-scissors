let buttons = document.querySelectorAll('button');  /*dont forget to add descriptions to functions*/
let player = document.getElementById('player-area');    /*most varibles can be declared as const*/
let computer = document.getElementById('computer-area');  /*dont forget add more comments describing possible future maintainability*/
let playerScore = parseInt(document.getElementById('player-score').innerText);
let computerScore = parseInt(document.getElementById('computer-score').innerText);
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

    let computerChoice = Math.floor(Math.random() * choices.length);  /*choices.length allows for more button choices*/
    computer.innerHTML = `<img src="assets/images/${choices[computerChoice]}.png">`;

    getResult(choices[playerChoice], choices[computerChoice]);

    
};

let var1 = choices[playerchoice];
let var2 = choices[computerChoice];

function getResult(var1, var2){     /*possibly change to a switch statement also look into declaring objects for results*/
    if (var1 === var2){
        resultMessage.innerHTML = "It's a DRAW!";
    }else if(var1 === choices[0] && var2 === choices[1]){
        resultMessage.innerHTML = "Sorry better luck next time!";
    }else if(var1 === choices[0] && var2 === choices[2]){
        resultMessage.innerHTML = "You Won!";
        winner();
    }else if(var1 === choices[1] && var2 === choices[2]){
        resultMessage.innerHTML = "Sorry better luck next time!";
    }else if(var1 === choices[1] && var2 === choices[0]){
        resultMessage.innerHTML = "You Won!";
        winner();
    }else if(var1 === choices[2] && var2 === choices[0]){
        resultMessage.innerHTML = "Sorry better luck next time!";
    }else if(var1 === choices[2] && var2 === choices[1]){
        resultMessage.innerHTML = "You won!";
        winner();
    }
};

function winner(){
    playerScore = ++playerScore;
}