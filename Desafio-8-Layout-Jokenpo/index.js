const $rockButton1 = document.querySelector(".player-1-rock-button");
const $paperButton1 = document.querySelector(".player-1-paper-button");
const $scissorsButton1 = document.querySelector(".player-1-scissors-button");

const $rockButton2 = document.querySelector(".player-2-rock-button");
const $paperButton2 = document.querySelector(".player-2-paper-button");
const $scissorsButton2 = document.querySelector(".player-2-scissors-button");

const $player1Field = document.querySelector(".player-1-field");
const $player2Field = document.querySelector(".player-2-field");

const $winnerTitle = document.querySelector(".winner-title");

let movePlayer1 = "-";
let movePlayer2 = "";
let gameResult = null;

function verifyGame() {
  if (
    (movePlayer1 == "rock" && movePlayer2 == "scissor") ||
    (movePlayer1 == "paper" && movePlayer2 == "rock") ||
    (movePlayer1 == "scissor" && movePlayer2 == "paper")
  ) {
    gameResult = 1;
  } else if (
    (movePlayer2 == "rock" && movePlayer1 == "scissor") ||
    (movePlayer2 == "paper" && movePlayer1 == "rock") ||
    (movePlayer2 == "scissor" && movePlayer1 == "paper")
  ) {
    gameResult = 2;
  } else if (movePlayer1 == movePlayer2) {
    gameResult = 0;
  }
}

function printGameResult() {
  if (gameResult == 0) {
    $winnerTitle.innerHTML = "Empatou!";
  } else if (gameResult == 1){
    $winnerTitle.innerHTML = "Jogadora 1 ganhou!"
  } else if (gameResult == 2){
    $winnerTitle.innerHTML = "Jogadora 2 ganhou!"
  } else {
    $winnerTitle.innerHTML = "Resultado"
  }
}

$rockButton1.addEventListener("click", function () {
  $player1Field.innerHTML = '<img class="move-image" src="/assets/rock.png" />';
  movePlayer1 = "rock";
  verifyGame();
  printGameResult();
});
$paperButton1.addEventListener("click", function () {
  $player1Field.innerHTML = '<img class="move-image" src="/assets/paper.png"/>';
  movePlayer1 = "paper";
  verifyGame();
  printGameResult();
});
$scissorsButton1.addEventListener("click", function () {
  $player1Field.innerHTML =
    '<img class="move-image" src="/assets/scissors.png"/>';
  movePlayer1 = "scissor";
  verifyGame();
  printGameResult();
});

$rockButton2.addEventListener("click", function () {
  $player2Field.innerHTML = '<img class="move-image" src="/assets/rock.png" />';
  movePlayer2 = "rock";
  verifyGame();
  printGameResult();
});
$paperButton2.addEventListener("click", function () {
  $player2Field.innerHTML = '<img class="move-image" src="/assets/paper.png"/>';
  movePlayer2 = "paper";
  verifyGame();
  printGameResult();
});
$scissorsButton2.addEventListener("click", function () {
  $player2Field.innerHTML =
    '<img class="move-image" src="/assets/scissors.png"/>';
  movePlayer2 = "scissor";
  verifyGame();
  printGameResult();
});
