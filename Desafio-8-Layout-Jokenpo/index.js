const $rockButton1 = document.querySelector ('.player-1-rock-button')
const $paperButton1 = document.querySelector ('.player-1-paper-button')
const $scissorsButton1 = document.querySelector ('.player-1-scissors-button')

const $rockButton2 = document.querySelector ('.player-2-rock-button')
const $paperButton2 = document.querySelector ('.player-2-paper-button')
const $scissorsButton2 = document.querySelector ('.player-2-scissors-button')

const $player1Field = document.querySelector('.player-1-field')
const $player2Field = document.querySelector('.player-2-field')


$rockButton1.addEventListener('click', function (){
    $player1Field.innerHTML = '<img class="move-image" src="/assets/rock.png" />'
})
$paperButton1.addEventListener('click', function (){
    $player1Field.innerHTML = '<img class="move-image" src="/assets/paper.png"/>'
})
$scissorsButton1.addEventListener('click',function (){
    $player1Field.innerHTML = '<img class="move-image" src="/assets/scissors.png"/>'
})

$rockButton2.addEventListener('click', function (){
    $player2Field.innerHTML = '<img class="move-image" src="/assets/rock.png" />'
})
$paperButton2.addEventListener('click', function (){
    $player2Field.innerHTML = '<img class="move-image" src="/assets/paper.png"/>'
})
$scissorsButton2.addEventListener('click',function (){
    $player2Field.innerHTML = '<img class="move-image" src="/assets/scissors.png"/>'
})