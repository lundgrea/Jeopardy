import Player from '../src/Player';
import Round from '../src/Round';
import FinalRound from '../src/FinalRound';
import Clue from '../src/Clue';
import domUpdates from './domUpdates.js';
// import data from '../src/data';



class Game {
  constructor(boards) {
    this.currentRound = {};
    this.roundTracker = 0;
    this.players = [];
    this.winner = null;
    this.boards = boards
    this.dailyDoubleTurns = []
  }

  generateRound() {
    if (this.roundTracker <= 2) {
      // this.currentRound = new Round(this.boards[this.roundTracker]);
      // domUpdates.populateGameBoard(this.currentRound.board)
      this.roundTracker ++;
      console.log('round tracker', this.roundTracker)
      console.log('round number', this.currentRound)
      // this.currentRound.beginTurn();
    }
    if (this.roundTracker === 3) {
      // this.currentRound = new FinalRound(this.boards[this.roundTracker]);
      console.log('final round tracker', this.roundTracker)
      console.log('final round', this.currentRound)
      // domUpdates.populateGameBoard(this.currentRound.board)
      this.roundTracker ++;
      // this.currentRound.beginTurn()
    }

    
  }


  // generateClues() {
  // maybecome another fetch call
  //   let clue = new Clue();
  //    // this.boards = clue.makeBoardObject();
  // }

  
  startGame(playerNames) {
    this.generatePlayers(playerNames);
    this.generateDailyDoubleTurns()
    // domUpdates.populatePlayerDashboard(this.players);
    // this.generateClues(data);
    this.generateRound();
  }

  generatePlayers(playerInput) {
    this.player1 = new Player(playerInput[0]);
    this.players.push(this.player1);
    this.player2 = new Player(playerInput[1]);
    this.players.push(this.player2);
    this.player3 = new Player(playerInput[2]);
    this.players.push(this.player3);
    return this.players;
  }

  generateDailyDoubleTurns() {
    if (this.dailyDoubleTurns.length < 3) {
      let round1DailyDouble = Math.floor(Math.random() * (1, 16));
      let round2DailyDouble1 = Math.floor(Math.random() * (1, 7) + 1);
      let round2DailyDouble2 = Math.floor(Math.random() * (1, 8) + 8);
      this.dailyDoubleTurns.push(round1DailyDouble);
      this.dailyDoubleTurns.push(round2DailyDouble1);
      this.dailyDoubleTurns.push(round2DailyDouble2);
    }
  }

  determineGameWinner() {
    let sortedScores = this.players.sort((a,b) => a.score - b.score);
    let highestScorer = sortedScores[sortedScores.length - 1].name;
    this.winner = highestScorer;
    return this.winner;
  }


  endGame() {
    this.determineGameWinner();
    // domUpdates.displayRequestToPlayAgain();
  }    
}


export default Game;