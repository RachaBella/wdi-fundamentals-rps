
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors' . \n");

	}
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
move = move || getinput();

   return move;
   
}

function getComputerMove(move) {
    
move = move|| randomPlay();
   return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    s 'rock'.
 
	if ((playerMove == "scissors")&& (computerMove == "rock")){
	return "computer";
} else if ((playerMove == "scissors")&& (computerMove == "paper")){
	return "player";
} else if ((playerMove == "rock")&& (computerMove == "scissors")){
	return "player";
} else if ((playerMove == "rock")&& (computerMove == "paper")){
	return "computer";
} else if ((playerMove == "paper")&& (computerMove == "scissors")){
	return "computer";
} else if ((playerMove == "paper")&& (computerMove == "rock")){
	return "player";
} else return "tie"

   
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors" + '\n');

    var playerWins = 0;
    var computerWins = 0;
    var pMove;
    var cMove;

while ((playerWins < 5) || (computerWins <5))
   {
	 pMove = getPlayerMove();
	 cMove = getComputerMove();
	console.log('Player chose ' + pMove + ' while Computer chose ' +    cMove + '\n');
	var winner = getWinner(pMove,cMove);
	if (winner=="player")
	{
		playerWins=playerWins+1;
		console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

        }else if (winner=="computer"){
	computerWins=computerWins+1;
		console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
	}else console.log('Tie, The score is currently ' + playerWins + ' to ' + computerWins + '\n');

    }
   
    
    return [playerWins, computerWins];

}

