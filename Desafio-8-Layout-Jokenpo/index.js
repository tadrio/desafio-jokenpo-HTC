const $rockButton1 = document.querySelector(".player-1-rock-button");
const $paperButton1 = document.querySelector(".player-1-paper-button");
const $scissorButton1 = document.querySelector(".player-1-scissor-button");

const $rockButton2 = document.querySelector(".player-2-rock-button");
const $paperButton2 = document.querySelector(".player-2-paper-button");
const $scissorButton2 = document.querySelector(".player-2-scissor-button");

const $resetButton = document.querySelector(".reset-button");
const $startButton = document.querySelector(".start-button")

const $player1Field = document.querySelector(".player-1-field");
const $player2Field = document.querySelector(".player-2-field");

const $winnerTitle = document.querySelector(".winner-title");

const $scorePlayer1 = document.querySelector(".score-player-1");
const $scorePlayer2 = document.querySelector(".score-player-2");

let movePlayer1 = "-";
let movePlayer2 = "";
let gameResult = null;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let gameStart = false;

function printScoreboard() {
  if (scorePlayer1<10){
  $scorePlayer1.innerHTML = '0'+scorePlayer1;}
  else {$scorePlayer1.innerHTML = scorePlayer1}
  if (scorePlayer2<10){
    $scorePlayer2.innerHTML = '0'+scorePlayer2;}
    else {$scorePlayer2.innerHTML = scorePlayer2}
}

function addPoint(winnerNumber) {
  if (winnerNumber == 1) {
    scorePlayer1++;
  } else if (winnerNumber == 2) {
    scorePlayer2++;
  }
}

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
  addPoint(gameResult);
}

function printGameResult() {
  if (gameResult == 0) {
    $winnerTitle.innerHTML = "Empatou!";
  } else if (gameResult == 1) {
    $winnerTitle.innerHTML = "Jogadora 1 ganhou!";
  } else if (gameResult == 2) {
    $winnerTitle.innerHTML = "Jogadora 2 ganhou!";
  } else {
    $winnerTitle.innerHTML = "Resultado";
  }
  printScoreboard();
}

function resetMoveVariables() {
  movePlayer1 = "";
  movePlayer2 = "";
}

function resetBattlefield() {
  $player1Field.innerHTML = "";
  $player2Field.innerHTML = "";
  $winnerTitle.innerHTML = "Resultado";
}

function move(playerNumber, moveName) {
  if (gameStart){
    if (playerNumber == 1) {
      $player1Field.innerHTML =
        '<img class="move-image" src="./assets/' + moveName + '.png" />';
      movePlayer1 = moveName;
    } else if (playerNumber == 2) {
      $player2Field.innerHTML =
        '<img class="move-image" src="./assets/' + moveName + '.png" />';
      movePlayer2 = moveName;
    }
    verifyGame();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattlefield, 1000);
      resetMoveVariables();
      gameResult = null;
    }
  }
}

$rockButton1.addEventListener("click", function () {
  move(1, "rock");
});
$paperButton1.addEventListener("click", function () {
  move(1, "paper");
});
$scissorButton1.addEventListener("click", function () {
  move(1, "scissor");
});

$rockButton2.addEventListener("click", function () {
  move(2, "rock");
});
$paperButton2.addEventListener("click", function () {
  move(2, "paper");
});
$scissorButton2.addEventListener("click", function () {
  move(2, "scissor");
});

$resetButton.addEventListener("click", function () {
  //location.reload();
  resetBattlefield();
  resetMoveVariables();
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  printScoreboard();
});

$startButton.addEventListener("click", function () {
  gameStart = !gameStart;
  $startButton.classList.toggle('start');
  if (gameStart){
    $startButton.innerHTML = 'Pausar'
  }
  else{
    $startButton.innerHTML = 'Iniciar'
  }
});
  console.log(movePlayer1,movePlayer2,gameResult,scorePlayer1,scorePlayer2,gameStart)