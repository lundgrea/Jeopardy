import $ from 'jquery';
import Player from '../src/Player';
import Round from '../src/Round';
import FinalRound from '../src/FinalRound';
import Clue from '../src/Clue';
import domUpdates from './domUpdates.js';




class Game {
  constructor(boards) {
    this.currentRound = {};
    this.roundTracker = 0;
    this.players = [];
    // this.winner = null;
    this.boards = boards
    this.dailyDoubleTurns = []
    this.questionsArray = [];
  }

  generateRound() {

    if (this.roundTracker < 2) {
      this.currentRound = new Round(this.boards[this.roundTracker], this.players, this.dailyDoubleTurns);
      domUpdates.populateGameBoard(this.currentRound.board)
      this.roundTracker ++;
      domUpdates.highlightCurrentPlayer(this.currentRound.currentPlayer);
      this.currentRound.beginTurn();
      return
    }
    if (this.roundTracker === 2) {
      this.currentRound = new FinalRound(this.boards[this.roundTracker], this.players, this.dailyDoubleTurns);
      domUpdates.startFinalRound(this.currentRound.board)
      ///move bottom limne to a fnction in incex that calls a method in domUpdates//
      $('#final-round__category').text(this.boards[2][0].category)
      this.roundTracker ++;
      this.currentRound.beginTurn()
    }

    if (this.roundTracker > 2) {
      this.currentRound.endGame()
    }
  }

  startGame(playerNames) {
    this.generatePlayers(playerNames);
    this.generateDailyDoubleTurns()
    domUpdates.populatePlayerDashboard(this.players);
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
      let round1DailyDouble = Math.floor(Math.random() * (15 - 1) + 1);
      let round2DailyDouble1 = Math.floor(Math.random() * (8 - 1) + 1);
      let round2DailyDouble2 = Math.floor(Math.random() * (16 - 8) + 8);
      this.dailyDoubleTurns.push(round1DailyDouble);
      this.dailyDoubleTurns.push(round2DailyDouble1);
      this.dailyDoubleTurns.push(round2DailyDouble2);
    }
  }

  // determineGameWinner() {
  //   let sortedScores = this.players.sort((a, b) => a.score - b.score);
  //   let highestScorer = sortedScores[sortedScores.length - 1].name;
  //   this.winner = highestScorer;
  //   return this.winner;
  // }


  // endGame(players) {
  //   let winner = this.determineGameWinner(players);
  //   console.log('winner is: ', winner);
  //   window.alert(`Congratulations ${winner}! You are the Jeopardy Champion!`);
  //   //domUpdates.updateQuestionDisplay(`Congratulations ${winner}! You are the Jeopardy Champion!`)
  //   return winner;
  //   // domUpdates.displayRequestToPlayAgain();
  // }    

  // restartGame() {
  // // maybecome another fetch call
  // //   let clue = new Clue();
  // //    // this.boards = clue.makeBoardObject();
  // }
}


export default Game;