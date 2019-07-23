import Clue from '../src/Clue';
import Turn from '../src/Turn';
import Game from '../src/Game';
import Round from '../src/Round';


class FinalRound extends Round {
  constructor(board) { 
    super(board); 
    this.player1Wager = null
    this.player1Guess = null
    this.player2Wager = null
    this.player2Guess = null
    this.player3Wager = null
    this.player3Guess = null
    

  }
  takeGuess(playerNum) {
    this.player`${playerNum}`Wager = $(`player${playerNum}-wager__input`).val()
    }
  }
  

  


}

export default FinalRound;