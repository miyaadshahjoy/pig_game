'use strict';

const score1El = document.getElementById('score-1');
const score2El = document.getElementById('score-2');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn-roll');
const newBtn = document.querySelector('.btn-new');
const holdBtn = document.querySelector('.btn-hold');
const player1El = document.querySelector('.player-1');
const player2El = document.querySelector('.player-2');

score1El.textContent = 0;
score2El.textContent = 0;

const score = [0, 0];
let currentScore = 0;
let playing = true;
let currentPlayer = 1;

const switchPlayer = function () {
    
    document.querySelector(`#current-${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    player1El.classList.toggle('player-active');
    player2El.classList.toggle('player-active');

}

rollBtn.addEventListener('click', function () {
    if (playing) {
    
        //generating random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;
    
        //add dice to current score
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current-${currentPlayer}`).textContent = currentScore;
        } else {
            //switch player
            switchPlayer();
        }
        
    }
});

holdBtn.addEventListener('click', function () {

    if (playing) {
        score[currentPlayer - 1] += currentScore;
        document.querySelector(`#score-${currentPlayer}`).textContent = score[currentPlayer - 1];

        if (score[currentPlayer - 1] >= 20) {
            //current player wins
            document.querySelector(`.player-${currentPlayer}`).classList.remove('player-active');
            document.querySelector(`.player-${currentPlayer}`).classList.add('player-winner');
            diceEl.classList.add('hidden');
            playing = false;


        } else {//switch player
            switchPlayer();
        }
    }
});

newBtn.addEventListener('click', function () {
    
    score1El.textContent = 0;
    score2El.textContent = 0;
    document.querySelector(`#current-${currentPlayer}`).textContent = 0;
    document.querySelector(`.player-${currentPlayer}`).classList.remove('player-winner');
    diceEl.classList.add('hidden');
    player1El.classList.add('player-active');
    player2El.classList.remove('player-active');
    currentScore = 0;
    playing = true;
    currentPlayer = 1;
    score[0] = 0;
    score[1] = 0;
    
});