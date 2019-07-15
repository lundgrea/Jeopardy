import Clue from '../src/Clue';
import Turn from '../src/Turn';


class Round {
  constructor() {
    this.currentTurn = null;
    this.turnTracker = 0;
    this.currentClue = null;
    this.discardPile = []
  }

  generateClues() {
    this.currentClue = new Clue()
  }

  populateJeopardyBoard() {
  }

  beginTurn() {
    if (this.turnTracker > 0) { 
      this.discardPile.push(this.currentTurn)
    }
    this.currentTurn = new Turn()
    this.turnTracker ++
  }  

  popUpLeaderBoard() {
  }

}

export default Round;