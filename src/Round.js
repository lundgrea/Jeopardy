import Clue from '../src/Clue';
import Turn from '../src/Turn';
import Game from '../src/Game';
import domUpdates from './domUpdates';

class Round {
  constructor(board, players) {
    this.currentTurn = null;
    this.turnTracker = 0;
    this.currentClue = null;
    this.board = board;
    this.currentPlayer = 0;
    this.dailyDoubleTurn = null || Math.random();
    this.players = players;
  }


  changePlayer() {
    if (this.currentPlayer < 2) {
      this.currentPlayer ++; 
    } else {
    this.currentPlayer = 0;
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
  
  }  

  takeTurn() {
    this.turnTracker++;
    console.log('Current player is: ', this.currentPlayer);
    this.updateScores(this.currentPlayer);
    this.changePlayer();
  }
  updateScores() {
    this.players[this.currentPlayer].score += parseInt(100);
    console.log(this.players)
    domUpdates.populatePlayerDashboard(this.players);
  }

  generateDailyDoubleTurn() {
    //random number generator and assign that to dailyDouble
    //daily double extends turn
  }

  increasePointValue() {

  }
 

}

export default Round;