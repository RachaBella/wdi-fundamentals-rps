////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
move = move || getinput();

   return move;
   
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
move = move|| randomPlay();
   return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
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
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
// This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
    
    return [playerWins, computerWins];

}

