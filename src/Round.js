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
    this.dailyDoubleTurn = Math.floor(Math.random() * (1, 16));
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

  generateDailyDoubleTurn() {
    //random number generator and assign that to dailyDouble
    //daily double extends turn
  }

  increasePointValue() {

  }
 

}

export default Round;