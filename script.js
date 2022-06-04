const computerPlay = () => {
  const rpsArray = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * rpsArray.length);

  return rpsArray[random];
};

const playRound = (playerSelection, computerSelection) => {
  const inputToLowercase = playerSelection.toLowerCase();

  // Scissors & Paper
  if (inputToLowercase == "scissors" && computerSelection == "paper")
    return "You Won! Scissors beats Paper";
  if (computerSelection == "scissors" && inputToLowercase == "paper")
    return "You Lose! Scissors beats Paper";

  // Paper & Rock
  if (inputToLowercase == "paper" && computerSelection == "rock")
    return "You Won! Paper beats Rock";
  if (computerSelection == "paper" && inputToLowercase == "rock")
    return "You Lose! Paper beats Rock";

  // Rock & Scissors
  if (inputToLowercase == "rock" && computerSelection == "scissors")
    return "You Won! Rock beats Scissors";
  if (computerSelection == "rock" && inputToLowercase == "scissors")
    return "You Lose! Rock beats Scissors";

  // Draw
  if (inputToLowercase == computerSelection)
    return `Draw! ${inputToLowercase} equals ${computerSelection}`;

  // Invalid Input
  if (
    inputToLowercase != "rock" ||
    inputToLowercase != "paper" ||
    inputToLowercase != "scissors"
  )
    return `Invalid input "${playerSelection}"! Please select from Rock, Paper, Scissors`;
};

const game = () => {
    let yourScore = 0;
    let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Make a wise choice! Rock, Paper, or Scissors"
    );
    
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if(result.includes('Won')) yourScore++
    if(result.includes('Lose')) computerScore++
    console.log(result)
    console.log( `Current Score = you: ${yourScore} - computer: ${computerScore}`)
    console.log(' ')
  }

  console.log(' ')
  if (yourScore > computerScore) console.log('**********YOU WON THE GAME**********')
  if (computerScore > yourScore) console.log('**********COMPUTER WON THE GAME**********')
  if (yourScore == computerScore) console.log('******** DRAW!! ************')
};

game();
