function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
// console.log(getRandomComputerResult());



function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

// function hasPlayerWonTheRound(player, computer) {
//   if (player == "Rock" && computer == "Scissors") {
//     return true;
//   } else if (player == "Scissors" && computer == "Paper") {
//     return true;
//   } else if (player == "Paper" && computer == "Rock") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(hasPlayerWonTheRound("Rock", "Scissors"));
// console.log(hasPlayerWonTheRound("Scissors", "Rock")); 

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return "It's a tie! Both chose " + userOption;
  } else {
    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}
// console.log(getRoundResults("Rock"));
// console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption); // 顯示本回合結果
  playerScoreSpanElement.innerText = playerScore; // 更新玩家分數
  computerScoreSpanElement.innerText = computerScore; // 更新電腦分數

  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
}

// showResults("Rock");

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  optionsContainer.style.display = "block";
  resetGameBtn.style.display = "none";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";

};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});