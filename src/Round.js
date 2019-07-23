import Clue from '../src/Clue';
import Turn from '../src/Turn';
import Game from '../src/Game';
import domUpdates from './domUpdates';
import $ from 'jquery';

class Round {
  constructor(board, players, dailyDoubleTurns) {
    this.currentTurn = null;
    this.turnTracker = 0;
    this.currentClue = null;
    this.board = board;
    this.currentPlayer = 0;
    this.players = players;
    this.answer = '';
    this.dailyDoubleTurns = dailyDoubleTurns;
  }
 
 
  changePlayer() {
    if (this.currentPlayer < 2) {
      this.currentPlayer ++; 
    } else {
      this.currentPlayer = 0;
    }
  }

  beginTurn() {
    if (this.turnTracker === 16) {
      this.endRound()
    } else {
      this.turnTracker ++
    }
  }

  takeTurn(clueID) {
    this.turnTracker++;
    let value = this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].pointValue; 
    this.answer = this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].answer; 
    domUpdates.updateQuestionDisplay(this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].question, this.players[this.currentPlayer].name, this.players[this.currentPlayer].score);
    return [value, this.answer];
  }
  
  updateScores(pointValue) {
    this.players[this.currentPlayer].score += parseInt(pointValue);
    if (this.players[this.currentPlayer].score < 0) {
      this.players[this.currentPlayer].score = 0
    }
    domUpdates.populatePlayerDashboard(this.players);
    this.changePlayer(this.currentPlayer);
  }

  evaluateGuess(guess) {
    return (guess.replace(/[\s\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase() === this.answer.replace(/[\s\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()) ? true : false;
  }
  
  evaluateTestGuess(guess, answer) {
    return (guess.replace(/[\s\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase() === answer.replace(/[\s\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()) ? true : false;
  }

  checkPlayerWager(wager) {
    return (parseInt(this.players[this.currentPlayer].score) >= parseInt(wager) ? true : false);
  }
}

export default Round;