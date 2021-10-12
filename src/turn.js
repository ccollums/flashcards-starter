const Card = require('../src/Card.js');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = new Card(card);
    this.correct = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      this.correct = true;
      return true;
    } else {
      this.correct = false;
      return false;
    }
  }

  giveFeedback() {
    if (!this.correct) {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
