'use strict';
let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
function startGuessTextChange(msg) {
  document.querySelector('.start-guess-text').textContent = msg;
}
// handling check button click
document.querySelector('.checkBtn').addEventListener('click', function () {
  const inputVal = Number(document.querySelector('.guess-input').value);
  if (!inputVal) {
    startGuessTextChange('Please enter a number');
    // document.querySelector('.start-guess-text').textContent =
    //   'Please enter a number';
  } else {
    document.querySelector('.guess-number span').textContent = inputVal;
    // comparing input value and random num
    if (randomNum === inputVal) {
      startGuessTextChange('Correct Guess');
      // document.querySelector('.start-guess-text').textContent =
      //   'Correct Guess 🎉';
      document.querySelector('body').style.backgroundColor = 'green';
      // generating high score value
      if (score > highScore) {
        highScore = score;
        document.querySelector('.high-score').textContent = highScore;
      }
    } else if (randomNum !== inputVal) {
      if (score > 1) {
        startGuessTextChange(
          randomNum > inputVal ? 'input is low' : 'input is high'
        );
        // document.querySelector('.start-guess-text').textContent =
        // randomNum > inputVal ? 'input is low' : 'input is high';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        startGuessTextChange('You lost the game');
        // document.querySelector('.start-guess-text').textContent =
        //   'You lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }
    // else if (randomNum > inputVal) {
    //   if (score > 1) {
    //     document.querySelector('.start-guess-text').textContent =
    //       'input is low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.start-guess-text').textContent =
    //       'You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (randomNum < inputVal) {
    //   if (score > 1) {
    //     document.querySelector('.start-guess-text').textContent =
    //       'input is high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.start-guess-text').textContent =
    //       'You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});

document.querySelector('.resetBtn').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess-input').value = '';
  startGuessTextChange('Start guessing...');
  // document.querySelector('.start-guess-text').textContent = 'start gussing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess-number span').textContent = '?';
});
