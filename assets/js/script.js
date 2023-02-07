let buttons = document.querySelectorAll('button');  /*dont forget to add descriptions to functions*/
let player = document.getElementById('player-area');    /*most varibles can be declared as const*/
let computer = document.getElementById('computer-area');  /*dont forget add more comments describing possible future maintainability*/
let playerScore = parseInt(document.getElementById('player-score').innerText);
let computerScore = parseInt(document.getElementById('computer-score').innerText);
let resultMessage = document.getElementsByClassName('message')[0];
let choices = ['rock1', 'paper1', 'scissor1','lizard','spock'];

for (let button of buttons){
    button.addEventListener('click', function(){
        let playerChoice = this.getAttribute('data-type');
        startGame(playerChoice);
    })
};

function startGame(playerChoice){
    player.innerHTML = `<p>You:</p> <br> <img src="assets/images/${choices[playerChoice]}.png">`;

    let computerChoice = Math.floor(Math.random() * choices.length);  /*choices.length allows for more button choices*/
    computer.innerHTML = `<p>Computer:</p> <br> <img src="assets/images/${choices[computerChoice]}.png">`;

    getResult(choices[playerChoice], choices[computerChoice]);

    
};

let var1 = choices[playerchoice];
let var2 = choices[computerChoice];

function getResult(var1, var2){     /*possibly change to a switch statement also look into declaring objects for results*/
    if (var1 === var2){
        resultMessage.innerHTML = "It's a DRAW!";
    }else if(var1 === choices[0] && var2 === choices[1]){
        resultMessage.innerHTML = "paper covers rock";
        loser();
    }else if(var1 === choices[0] && var2 === choices[2]){
        resultMessage.innerHTML = "rock crushes scissors";
        winner();
    }else if(var1 === choices[1] && var2 === choices[2]){
        resultMessage.innerHTML = "scissors cut paper";
        loser();
    }else if(var1 === choices[1] && var2 === choices[0]){
        resultMessage.innerHTML = "paper covers rock";
        winner();
    }else if(var1 === choices[2] && var2 === choices[0]){
        resultMessage.innerHTML = "rock crushes scissors";
        loser();
    }else if(var1 === choices[2] && var2 === choices[1]){
        resultMessage.innerHTML = "scissors cut paper";
        winner();
    }else if(var1 === choices[3] && var2 === choices[0]){
        resultMessage.innerHTML = "rock crushes lizard";
        loser();
    }else if(var1 === choices[0] && var2 === choices[3]){
        resultMessage.innerHTML = "rock crushes lizard!";
        winner();
    }else if(var1 === choices[4] && var2 === choices[3]){
        resultMessage.innerHTML = "lizard poisons Spock";
        loser();
    }else if(var1 === choices[3] && var2 === choices[4]){
        resultMessage.innerHTML = "lizard poisons Spock";
        winner();
    }else if(var1 === choices[2] && var2 === choices[4]){
        resultMessage.innerHTML = "spock smashes scissors";
        loser();
    }else if(var1 === choices[4] && var2 === choices[2]){
        resultMessage.innerHTML = "spock smashes scissors";
        winner();
    }else if(var1 === choices[3] && var2 === choices[2]){
        resultMessage.innerHTML = "scissors decapitate lizard";
        loser();
    }else if(var1 === choices[2] && var2 === choices[3]){
        resultMessage.innerHTML = "scissors decapitate lizard";
        winner();
    }else if(var1 === choices[1] && var2 === choices[3]){
        resultMessage.innerHTML = "lizard eats paper";
        loser();
    }else if(var1 === choices[3] && var2 === choices[1]){
        resultMessage.innerHTML = "lizard eats paper";
        winner();
    }else if(var1 === choices[4] && var2 === choices[1]){
        resultMessage.innerHTML = "paper disproves Spock";
        loser();
    }else if(var1 === choices[1] && var2 === choices[4]){
        resultMessage.innerHTML = "paper disproves Spock";
        winner();
    }else if(var1 === choices[0] && var2 === choices[4]){
        resultMessage.innerHTML = "Spock vaporizes rock";
        loser();
    }else if(var1 === choices[4] && var2 === choices[0]){
        resultMessage.innerHTML = "Spock vaporizes rock";
        winner();
    }
};

function winner(){
    document.getElementById('player-score').innerText = ++playerScore;
}

function loser(){
    document.getElementById('computer-score').innerText = ++computerScore;
}