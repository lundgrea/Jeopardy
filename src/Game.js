import Player from '../src/Player';
import Round from '../src/Round';


class Game {
  constructor() {
    this.currentRound = {};
    this.roundTracker = 0;
    this.players = [];
    this.winner
    this.boards = []
  }

  generateRound() {
    if (this.roundTracker <= 2) {
      this.currentRound = new Round();
      this.roundTracker ++;
    }


    // if(this.roundTracker === 3 {
      //create super/extends round class
    // }

  }

  generateClues() {
    let clue = new Clue();
    this.boards = clue.createBoardArray()
  }

  generatePlayers(player1Object, player2Object, player3Object) {
    this.player1 = new Player(player1Object);
    this.players.push(this.player1.name);
    this.player2 = new Player(player2Object);
    this.players.push(this.player2.name);
    this.player3 = new Player(player3Object);
    this.players.push(this.player3.name);
    return this.players;
  }
  
  startGame() {
    this.generatePlayers();
    this.generateClues();
    this.generateRound();
  }

  determineGameWinner() {
    let sortedScores = this.players.sort((a,b) => a.score - b.score);
    let highestScorer = sortedScores[sortedScores.length - 1].name
    this.winner = highestScorer
    return this.winner
  }


  endGame() {
    this.determineGameWinner();
    this.displayRequestToPlayAgain();
    domUpdates.displayRequestToPlayAgain();
  }    
}


export default Game;