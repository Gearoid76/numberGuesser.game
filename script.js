let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

 const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    let humanDiff = Math.abs(targetGuess - humanGuess);
    let computerDiff = Math.abs(targetGuess - computerGuess);
    if (humanGuess < 0 || humanGuess > 9) {
      alert("These numbers are out of range");
      return 
    }
  
  //  if (humanDiff <= computerDiff)
  //  {
  //    return true;
  //    console.log('human wins');
  //  }else {
  //    return false;
  //    console.log('computer wins');
  //  }
   return humanDiff <= computerDiff;

 }
 const updateScore = winner => { 
   if(winner === "human") {humanScore++;} else if (winner === "computer") computerScore++;}
 const advanceRound = () => {
     currentRoundNumber ++;
 }