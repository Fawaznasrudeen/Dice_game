'use strict'
//selecting element

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let activePlayer = 0;

//sstarting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let playing = true;
//creating score array
let score = [0, 0]

const switchPlayer = function() {
    
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0
    player0El.classList.toggle('player--active')      
    player1El.classList.toggle('player--active')
}
//rollig dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        //Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        //console.log(dice);
        //Number display
        diceEl.classList.remove('hidden')
        //diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if(dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            //switching player
            switchPlayer();
        }
    }
    
})
btnHold.addEventListener('click', function() {
    if(playing) {
        //Add cuurent score to the total score of active player
    score[activePlayer] += currentScore
    //check if active player score is >100
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    //if >100, active player win
    if(score[activePlayer] >= 100) {
        playing = false
        diceEl.classList.add('hidden')
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        alert(`Congratulation, first person to reach 100 won. please click OK to add up to your score, then New game to start all over again`);

    }
    //if <100 switch player
    else{
        switchPlayer();
    }
    } 
})
const init = function() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    current0El.textContent = 0;
    current1El.textContent = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    diceEl.classList.add('hidden');  
}
btnNew.addEventListener('click', init);

alert("welcomer to my dice web game.\n\nlet me walk you through the game by explaining every aspect of it.\n\nPlayers: This game can be play by either one individual against one's self or two individual against each other.\n\nRoll Dice: when you click on Roll dice, the dice will roll, and then display the number your luckily rolled.\n\nHold: when you click on Hold, your current scores will be move to total Total scores but the active player will change to the opponent.\n\nCurrent scores: This is where your scores will be compiling till you click on Hold.\n\nNew Game: when you click this, the game will reset and all value will get back to their initial.\n\n\nNote: when you roll a dice and the value is 1, your current scores will get back to Zero. so Play wisely.🤗\n\nThank you😋. Click OK to continue.");
