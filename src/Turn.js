class Turn {
  constructor(player) {
    this.player = player;
  }

  turnThings() {
    this.evaluateGuess()   
  }


  evaluateGuess() {
    if (this.guess.toLowerCase().replace(/[^\w\s]|_/g, "") === this.answer.toLowerCase().replace(/[^\w\s]|_/g, "")) {
      this.player.score += this.question.pointValue
      domUpdates.updateScore(this.player)
    } else {
      this.player.score -= this.question.pointValue;
      domUpdates.updateScore(this.player)
    }
    round.currentPlayer ++
  }


}

export default Turn; 