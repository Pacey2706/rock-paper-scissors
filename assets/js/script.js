// variables assigned to html elements
let buttons = document.querySelectorAll('button');  /*dont forget to add descriptions to functions*/
let player = document.getElementById('player-area');    /*most varibles can be declared as const*/
let computer = document.getElementById('computer-area');  /*dont forget add more comments describing possible future maintainability*/
let playerScore = parseInt(document.getElementById('player-score').innerText);
let computerScore = parseInt(document.getElementById('computer-score').innerText);
let drawScore = parseInt(document.getElementById('draw-score').innerText);
let resultMessage = document.getElementsByClassName('message')[0];
// array used to link to player and computer choices
let choices = ['rock', 'paper', 'scissor','lizard','spock'];

// for loop used to link buttons to choices arrray
for (let button of buttons){
    button.addEventListener('click', function(){
        let playerChoice = this.getAttribute('data-type');
        startGame(playerChoice);
    });
}

/** compairs two varibles that link to the choices array
* if either varible beats the other
* returns winner() function or loser function()
* and updates the result message accordingly */
function getResult(var1, var2){  
    if (var1 === var2){
        resultMessage.innerHTML = "It's a DRAW!";
        draw();
    }else if(var1 === choices[0] && var2 === choices[1]){
        resultMessage.innerHTML = "paper covers rock, you lose!";
        loser();
    }else if(var1 === choices[1] && var2 === choices[0]){
        resultMessage.innerHTML = "paper covers rock, you won!";
        winner();
    }else if(var1 === choices[2] && var2 === choices[0]){
        resultMessage.innerHTML = "rock crushes scissors, you lose!";
        loser();
    }else if(var1 === choices[0] && var2 === choices[2]){
        resultMessage.innerHTML = "rock crushes scissors, you won!";
        winner();
    }else if(var1 === choices[1] && var2 === choices[2]){
        resultMessage.innerHTML = "scissors cut paper, you lose!";
        loser();
    }else if(var1 === choices[2] && var2 === choices[1]){
        resultMessage.innerHTML = "scissors cut paper, you won!";
        winner();
    }else if(var1 === choices[3] && var2 === choices[0]){
        resultMessage.innerHTML = "rock crushes lizard, you lose!";
        loser();
    }else if(var1 === choices[0] && var2 === choices[3]){
        resultMessage.innerHTML = "rock crushes lizard, you won!";
        winner();
    }else if(var1 === choices[4] && var2 === choices[3]){
        resultMessage.innerHTML = "lizard poisons Spock, you lose!";
        loser();
    }else if(var1 === choices[3] && var2 === choices[4]){
        resultMessage.innerHTML = "lizard poisons Spock, you won!";
        winner();
    }else if(var1 === choices[2] && var2 === choices[4]){
        resultMessage.innerHTML = "spock smashes scissors, you lose!";
        loser();
    }else if(var1 === choices[4] && var2 === choices[2]){
        resultMessage.innerHTML = "spock smashes scissors, you won!";
        winner();
    }else if(var1 === choices[3] && var2 === choices[2]){
        resultMessage.innerHTML = "scissors decapitate lizard, you lose!";
        loser();
    }else if(var1 === choices[2] && var2 === choices[3]){
        resultMessage.innerHTML = "scissors decapitate lizard, you won!";
        winner();
    }else if(var1 === choices[1] && var2 === choices[3]){
        resultMessage.innerHTML = "lizard eats paper, you lose!";
        loser();
    }else if(var1 === choices[3] && var2 === choices[1]){
        resultMessage.innerHTML = "lizard eats paper, you won!";
        winner();
    }else if(var1 === choices[4] && var2 === choices[1]){
        resultMessage.innerHTML = "paper disproves Spock, you lose!";
        loser();
    }else if(var1 === choices[1] && var2 === choices[4]){
        resultMessage.innerHTML = "paper disproves Spock, you won!";
        winner();
    }else if(var1 === choices[0] && var2 === choices[4]){
        resultMessage.innerHTML = "Spock vaporizes rock, you lose!";
        loser();
    }else if(var1 === choices[4] && var2 === choices[0]){
        resultMessage.innerHTML = "Spock vaporizes rock, you won!";
        winner();
    }
}

/** start game function to be called when player presses button referenced in for loop,
 * the player area is updated with playerChoice.
 * Computer area generates a random number inbetween 0-4 and links to choices array, 
 * calls getResult() function*/
function startGame(playerChoice){
    player.innerHTML = `<p>You:</p> <br><br> <img alt="${choices[playerChoice]}" src="assets/images/${choices[playerChoice]}.png">`;

    let computerChoice = Math.floor(Math.random() * choices.length);  // choices.length allows for more button choices
    computer.innerHTML = `<p>Computer:</p> <br><br> <img alt="${choices[computerChoice]}" src="assets/images/${choices[computerChoice]}.png">`;

    getResult(choices[playerChoice], choices[computerChoice]);

    
}

/** when called adds 1 to playerscore */
function winner(){
    document.getElementById('player-score').innerText = ++playerScore;
}
/** when called adds 1 to computerscore */ 
function loser(){
    document.getElementById('computer-score').innerText = ++computerScore;
}

function draw(){
    document.getElementById('draw-score').innerText = ++drawScore;
}