/*
Rock Paper Scissors (Computer VS. Player)

1) The computer returns
either Rock, Paper or Scissors randomly. 
2) Retrieve input from computer selection 
and player selection.
3) The computer returns a message
that declares the winning and losing party.

Requirements

1) 1st implementation: Single round
    1.1) function computerPlay() for step 1
    1.2) function playRound(playerSelection, computerSelection) for step 2
    1.3) Make sure player selection is case insensitive

2) 2nd implementation: 5 round(s)
    2.1) function game() — For loop
    2.2) use prompt() to get user input
    2.3) use console.log() to display the results 
    of each round and the winner at the end

*/

const shapes = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return Math.floor(Math.random() * shapes.length);
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "Rock" && playerSelection == "Scissors") {
    return "You Lose! Rock beats Scissors";
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    return "You Lose! Paper beats Rock";
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    return "You Lose! Scissors beats Paper";
  } else {
    return "You Win!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
playRound(computerSelection, "Scissors");
