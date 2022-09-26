
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Multiply 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
/*

Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

// function multiply(a, b){  
//     return a*b;
//   }
// console.log(multiply(2,3));




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: Age in Cat years 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Do the following:
   1. Invoke the catYears function below and pass an age value to it
   2. Use the received value to calculate the age in cat years (1 human year is equal to 7 cat years)
   3. Return the newly calculated age
*/
// let cat = 7;
// let human = 1;

// function catYear(cat, human){
//     return cat*human ;
// }
// console.log(catYear(7, 1));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax




// const myFunction = () => {
  
// };

// myFunction();

// let anotherFunction = (param) =>{
//   return param;
// };
// console.log(anotherFunction(4));


// const add =  (param1, param2) => {
//   return param1 + param2;
// };

// console.log(add(1,2));




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

// function game(user, computer){
//     /*add your code here*/
// }
// let playerScore = 0;
// let computerScore = 0;
// let playerWon = "Player";
// let computerWon = "Computer";
// document.getElementById("winnerIs").style.display = "none";

// function startGame() {
// document.getElementById("resultBox").innerHTML = playRound();
// }  

// function computerPlay() {
// let computerChoice = ["rock", "paper", "scissors"]
// return computerChoice[Math.floor(Math.random() * computerChoice.length)];
// }

// function playRound(playerSelection, computerSelection) {
// let roundResult = "";
// let computerChoice = computerPlay();

// const buttonRock = document.querySelector('#buttonRock');
// const buttonPaper = document.querySelector('#buttonPaper');
// const buttonScissors = document.querySelector('#buttonScissors');

// let playerChoiceRock = buttonRock;
// let playerChoicePaper = buttonPaper;
// let playerChoiceScissors = buttonScissors;

// if (playerChoiceRock && computerChoice === "paper") {
//     roundResult = "You've chosen ROCK and your enemy PAPER so you lose because PAPER beats ROCK";
//     computerScore++;
//     console.log("You've chosen ROCK and your enemy PAPER so you lose because PAPER beats ROCK");
// } else if (playerChoiceRock && computerChoice === "scissors") {
//     roundResult = "You've chosen ROCK and your enemy SCISSORS so you win because ROCK beats SCISSORS";
//     playerScore++;
//     console.log("You've chosen ROCK and your enemy SCISSORS so you win because ROCK beats SCISSORS");
// } else if (playerChoiceRock && computerChoice === "rock") {
//     roundResult = "You've chosen ROCK and your enemy ROCK so it's a tie!";
//     console.log("You've chosen ROCK and your enemy ROCK so it's a tie!");

// } else if (playerChoicePaper && computerChoice === "rock") {
//     roundResult = "You've chosen PAPER and your enemy ROCK so you win because PAPER beats ROCK";
//     console.log("You've chosen PAPER and your enemy ROCK so you win because PAPER beats ROCK");
// } else if (playerChoicePaper && computerChoice === "paper") {
//     roundResult = "You've chosen PAPER and your enemy PAPER so it's a tie!";
//     console.log("You've chosen PAPER and your enemy PAPER so it's a tie!");
// } else if (playerChoicePaper && computerChoice === "scissors") {
//     roundResult = "You've chosen PAPER and your enemy SCISSORS so you lose because SCISSORS beats PAPER";
//     console.log("You've chosen PAPER and your enemy SCISSORS so you lose because SCISSORS beats PAPER");

// } else if (playerChoiceScissors && computerChoice === "rock") {
//     roundResult = "You've chosen SCISSORS and your enemy ROCK so you lose because ROCK beats SCISSORS";
//     console.log("You've chosen SCISSORS and your enemy ROCK so you lose because ROCK beats SCISSORS");
// } else if (playerChoiceScissors && computerChoice === "paper") {
//     roundResult = "You've chosen SCISSORS and your enemy PAPER so you win because SCISSORS beats PAPER";
//     console.log("You've chosen SCISSORS and your enemy PAPER so you win because SCISSORS beats PAPER");
// } else if (playerChoiceScissors && computerChoice === "scissors") {
//     roundResult = "You've chosen SCISSORS and your enemy SCISSORS so it's a tie!";
//     console.log("You've chosen SCISSORS and your enemy SCISSORS so it's a tie!");
// }

// document.getElementById("playerClicks").innerHTML = playerScore;
// document.getElementById("computerClicks").innerHTML = computerScore;

// return roundResult;
// }

// function resetButton() {
// playerScore = 0;
// computerScore = 0;
// document.getElementById("resultBox").innerHTML = "";
// document.getElementById("winnerIs").style.display = "none";
// document.getElementById("playerClicks").innerHTML = playerScore;
// document.getElementById("computerClicks").innerHTML = computerScore;
// // document.getElementById("confetti-canvas").style.display = "none";
// }




/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(/*add your code here*/){
        /*add your code here*/
  }
//   let word = "bottles";
//   let count = 99;
//   while (count > 0) {
//       console.log(count + " " + word + " of soda on the wall");
//       console.log(count + " " + word + " of soda,");
//       console.log("Take one down, pass it around,");
//       count = count - 1;
//       if (count > 0) {
//           console.log(count + " " + word + " of soda on the wall.");
//       } else {
//           console.log("No more " + word + " of soda on the wall.");
//       }
//   }