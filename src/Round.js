import Clue from '../src/Clue';
import Turn from '../src/Turn';
import Game from '../src/Game';

class Round {
  constructor(board) {
    this.currentTurn = null;
    this.turnTracker = 0;
    this.currentClue = null;
    this.board = board;
    this.currentPlayer = 1;
  }

  initiateDailyDoubleTurn(round) {
    this.currentTurn = new DailyDouble(this.currentPlayer)
    this.turnTracker ++
  }

  changePlayer() {
    if (this.player < 3) {
      this.currentPlayer ++; 
    } else {
    this.currentPlayer = 1;
    }
  }

  beginTurn() {
    if (this.turnTracker === 16) {
      this.endRound()
    } else if (this.turnTracker === game.dailyDoubleTurns[round]) {
      initiateDailyDoubleTurn()
    } else {
      this.currentTurn = new Turn(this.currentPlayer)
      this.turnTracker ++
    }
  }1 

  updateScores() {
  }

}

export default Round;