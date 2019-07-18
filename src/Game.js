import Player from '../src/Player';
import Round from '../src/Round';
import Clue from '../src/Clue';
import domUpdates from './domUpdates.js';
import data from '../src/data';


class Game {
  constructor(boards) {
    this.currentRound = {};
    this.roundTracker = 0;
    this.players = [];
    this.winner = null;
    this.boards = boards
    this.dailyDoubleTurns = []
  }


  generateDailyDoubleTurns() {
    if (this.dailyDoubleTurns < 3) {
      let round1DailyDouble = Math.floor(Math.random() * (1,16));
      console.log(round1DailyDouble)
      let round2DailyDouble1 = Math.floor(Math.random() * (1,7)+1);
            console.log(round2DailyDouble1)
      let round2DailyDouble2 = Math.floor(Math.random() * (1,8) + 8);
            console.log(round2DailyDouble2)
      this.dailyDoubleTurns.push(round1DailyDouble);
      this.dailyDoubleTurns.push(round2DailyDouble1);
      this.dailyDoubleTurns.push(round2DailyDouble2);
      console.log(this.dailyDoubleTurns)
    }
  }

  generateRound() {
    if (this.roundTracker <= 2) {
      this.currentRound = new Round(this.boards[this.roundTracker]);
      domUpdates.populateGameBoard(this.currentRound.board)
      this.roundTracker ++;
      console.log('THE ROUND', this.roundTracker)
      this.currentRound.beginTurn() ;
    }
  }

    //   Math.floor(Math.random() * (1, 8));
    // this.dailyDoubleTurn2 = Math.floor(Math.random() * (9, 16));
  
    //random number generator and assign that to dailyDouble
    //daily double extends turn

  //     Math.floor(Math.random() * (1, 8));
  //   this.dailyDoubleTurn2 = Math.floor(Math.random() * (9, 16));
  
  // }
   

    // if(this.roundTracker === 3 {
      //create super/extends round class
    // }

  // generateClues() {
  // maybecome another fetch call
  //   let clue = new Clue();
  //    // this.boards = clue.makeBoardObject();
  // }

  generatePlayers(playerInput) {
    this.player1 = new Player(playerInput[0]);
    this.players.push(this.player1);
    this.player2 = new Player(playerInput[1]);
    this.players.push(this.player2);
    this.player3 = new Player(playerInput[2]);
    this.players.push(this.player3);
    return this.players;
  }
  
  startGame(playerNames) {
    this.generatePlayers(playerNames);
    domUpdates.populatePlayerDashboard(this.players);
    // this.generateClues(data);
    this.generateRound();
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