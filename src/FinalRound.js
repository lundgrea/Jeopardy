import $ from 'jquery';
import Round from '../src/Round';
import Clue from '../src/Clue';
// import Turn from '../src/Turn';
import Game from '../src/Game';


class FinalRound extends Round {
  constructor(board, players, dailyDoubleTurns) { 
    super(board, players, dailyDoubleTurns); 
    this.winner = null
  }

  takeGuess(playerNum) {
    this.playerWager[playerNum] = $(`player${playerNum}-wager__input`).val()
  }

  determineGameWinner() {
    let sortedScores = this.players.sort((a, b) => a.score - b.score);
    let highestScorer = sortedScores[sortedScores.length - 1].name;
    this.winner = highestScorer;
    return this.winner;
  }


  endGame() {
    let winner = this.determineGameWinner();
    return winner;
  }    
    
}
  

  




export default FinalRound;