import Clue from '../src/Clue';
import Turn from '../src/Turn';
import Game from '../src/Game';
import Round from '../src/Round';


class FinalRound extends Round {
  constructor(board, players, dailyDoubleTurns) { 
    super(board, players, dailyDoubleTurns); 
    this.playerWager1 = null
    this.playerGuess1 = null
    this.playerWager2 = null
    this.playerGuess2 = null
    this.playerWager3 = null
    this.playerGuess3 = null
    

  }
  takeGuess(playerNum) {
    this.playerWager[playerNum] = $(`player${playerNum}-wager__input`).val()
  }
    
}
  

  




export default FinalRound;