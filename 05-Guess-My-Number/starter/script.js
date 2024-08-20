'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20);
let scoreNumber = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    scoreNumber--;

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is different
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (scoreNumber > 1) {
  //     displayMessage('📉 Too Low!');
  //     scoreNumber--;
  //     document.querySelector('.score').textContent = scoreNumber;
  //   } else {
  //     displayMessage('💥 You lost the game!');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20);
  scoreNumber = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
});
