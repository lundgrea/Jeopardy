import Clue from '../src/Clue';
import Turn from '../src/Turn';


class Round {
  constructor(arrayOfColumnObjects) {
    this.currentTurn = null;
    this.turnTracker = 0;
    this.currentClue = null;
    this.discardPile = [];
    this.board = arrayOfColumnObjects;
  }


  updateScores() {
  }


  increasePointValue() {

  }

  beginTurn() {
    if (this.turnTracker > 0) { 
      this.discardPile.push(this.currentTurn)
    }
    this.currentTurn = new Turn()
    this.turnTracker ++
  }  


}

export default Round;