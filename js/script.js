'use strict';

const player1El = document.querySelector('.player-1');
const player2El = document.querySelector('.player-2');

const score1El = document.getElementById('score-1');
const score2El = document.getElementById('score-2');



const current1EL = document.getElementById('current-1');
const current2EL = document.getElementById('current-2');

const rollDice = document.querySelector('.btn-roll');
const hold = document.querySelector('.btn-hold');
const newGame = document.querySelector('.btn-new');
const diceImage = document.querySelector('.dice');

let currentPlayer = 1;

let current1 = 0;
let current2 = 0;

let score1 = 0;
let score2 = 0;

score1El.textContent = 0;
score2El.textContent = 0;

const switchPlayer = function (n) {
    if(n === 1){
        current1 = 0;
        current1EL.textContent = current1;
        currentPlayer = 2;
        player1El.classList.remove('player-active');
        player2El.classList.add('player-active');
    }else {
        current2 = 0;
        current2EL.textContent = current2;
        currentPlayer = 1;
        player2El.classList.remove('player-active');
        player1El.classList.add('player-active');
        
    }
}


//when the dice is rolled

rollDice.addEventListener('click', function () {
    
    if (score1 < 100 && score2 < 100) {
        
        //generating random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //display dice roll
        diceImage.src = `images/dice-${dice}.png`;
        diceImage.classList.remove('hidden');
    
        if (dice !== 1) {//add dice point to current
            
            if (currentPlayer === 1) {
                
                current1 += dice;
                current1EL.textContent = current1;
            } else {
                
                current2 += dice;
                current2EL.textContent = current2;
                
            }
        } else {//switch player
            if (currentPlayer === 1) {
                switchPlayer(1);
    
            } else {
                switchPlayer(2);
            }
        }
    }
});



hold.addEventListener('click', function () {

    if (score1 < 100 && score2 < 100){
        if (currentPlayer === 1) {
    
            score1 += current1;
            score1El.textContent = score1;
                    
            if (score1 >= 100) {
                player1El.classList.add('player-winner');
                diceImage.classList.add('hidden');
    
            }
            else {
                current1 = 0;
                switchPlayer(1);
            }
    
        }
        else if (currentPlayer === 2)
        {
            score2 += current2;
            score2El.textContent = score2;
    
            if (score2 >= 100) {
                player2El.classList.add('player-winner');
                diceImage.classList.add('hidden');
    
            } else {
    
                current2 = 0;
                switchPlayer(2);
                
            }
        }
    }
});


newGame.addEventListener('click', function () {
    
    score1 = 0;
    score2 = 0;

    current1 = 0;
    current2 = 0;

    currentPlayer = 1;


    score1El.textContent = score1;
    score2El.textContent = score2;
    current1EL.textContent = current1;
    current2EL.textContent = current2;
    diceImage.classList.add('hidden');
    player1El.classList.add('player-active');

    if (player1El.classList.contains('player-winner')) {
        
        player1El.classList.remove('player-winner');
    } else {
        
        player2El.classList.remove('player-winner');
    }
})

