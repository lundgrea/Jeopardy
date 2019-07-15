import Clue from '../src/Clue';


class Round {
  constructor() {
    this.turnTracker = 0;
    this.currentClue = null;
  }

  generateClues() {
    this.currentClue = new Clue()
  }

  populateJeopardyBoard() {
  }

  beginTurn() {
  }  

  popUpLeaderBoard() {

  }

}

export default Round;