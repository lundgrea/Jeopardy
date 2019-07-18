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

  changePlayer() {
    if (this.player < 3) {
      this.currentPlayer ++; 
    } else {
    this.currentPlayer = 1;
    }
  }

  beginTurn() {
    //instantiate a new turn

    if(this.currentTurn === this.dailyDoubleTurn) {
    //instantiate daily double extends class//
    }

    // if(this.turnTracker === 16) {
    //   this.endRound()
    // }
    
    this.currentTurn = new Turn(this.currentPlayer)
    this.turnTracker ++
    console.log(this.turnTracker)
  }  

  updateScores() {
  }

  increasePointValue() {
  }
 

}

export default Round;