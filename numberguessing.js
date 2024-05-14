// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
  // Generate a random number between 1 and 100
  const randomNumber = getRandomNumber(1, 100);
  let attempts = 0;

  // Function to handle user input
  function guessNumber() {
    if (attempts >= 5) {
      alert(`Sorry, you've used all 5 attempts. The number was ${randomNumber}.`);
      return;
    }

    const guess = parseInt(prompt(`Guess a number between 1 and 100. You have ${5 - attempts} attempts remaining:`));

    if (isNaN(guess)) {
      alert('Please enter a valid number.');
    } else {
      attempts++;

      if (guess === randomNumber) {
        alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
      } else if (guess < randomNumber) {
        alert('Too low. Try again.');
        guessNumber();
      } else {
        alert('Too high. Try again.');
        guessNumber();
      }
    }
  }

  // Start the game by asking for the first guess
  guessNumber();
}

// Start the game when the page is loaded
startGame();
