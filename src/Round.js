import Clue from '../src/Clue';
import Turn from '../src/Turn';
import Game from '../src/Game';
import domUpdates from './domUpdates';
import $ from 'jquery';

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

  takeTurn(clueID) {
    this.turnTracker++;
    console.log(`Players is: ${this.players} clueID is: ${clueID}`)
    console.log(`board value is: ${this.board[0].clues[0].question}`)
    console.log(`clue question is: ${this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].question}`)
    console.log(`clue answer is: ${this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].answer}`)
    let value = this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].pointValue;
    console.log(`clue value is: ${this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].pointValue}`)
 
    $('#current-question__display').text(this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].question);



    this.updateScores(value);
    this.changePlayer(this.currentPlayer);
  }
  updateScores(pointValue) {
    this.players[this.currentPlayer].score += parseInt(pointValue);
    console.log('point value is: ', parseInt(pointValue))
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