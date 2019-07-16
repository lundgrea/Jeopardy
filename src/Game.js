import Player from '../src/Player';
import Round from '../src/Round';
import Clue from '../src/Clue';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.currentRound = {};
    this.roundTracker = 0;
    this.players = [];
    this.winner = null;
    this.boards = []
  }

  generateRound() {
    if (this.roundTracker <= 2) {
      this.currentRound = new Round();
      // domUpdates.populateGameBoard(this.boards[this.roundTracker])
      this.roundTracker ++;
    }

    // if(this.roundTracker === 3 {
      //create super/extends round class
    // }

  }

  generateClues() {
    let clue = new Clue();
    // this.boards = clue.createBoardObject();
  }

  generatePlayers(playerInput) {
    this.player1 = new Player(playerInput[0]);
    this.players.push(this.player1);
    this.player2 = new Player(playerInput[1]);
    this.players.push(this.player2);
    this.player3 = new Player(playerInput[2]);
    this.players.push(this.player3);
    console.log(this.players);
    return this.players;
  }
  
  startGame(playerNames) {
    this.generatePlayers(playerNames);
    domUpdates.populatePlayerDashboard(this.players);
    this.generateClues();
    this.generateRound();
  }

  determineGameWinner() {
    let sortedScores = this.players.sort((a,b) => a.score - b.score);
    let highestScorer = sortedScores[sortedScores.length - 1].name;
    this.winner = highestScorer;
    console.log(this.winner)
    return this.winner;
  }


  endGame() {
    this.determineGameWinner();
    // domUpdates.displayRequestToPlayAgain();
  }    
}


export default Game;