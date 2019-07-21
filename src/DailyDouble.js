import Turn from '../src/Turn';

class DailyDouble extends Turn {
  constructor(player, wager) { 
    super(player);   
    this.wager;
               
  }
  wagerCheck(wager) {
    this.players[this.currentPlayer].score += parseInt(wager);

    if (this.players[this.currentPlayer].score < 0) {
      this.players[this.currentPlayer].score = 0
    }

    domUpdates.populatePlayerDashboard(this.players);
    this.changePlayer(this.currentPlayer);
  }
}

export default DailyDouble;