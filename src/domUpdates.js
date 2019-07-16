import $ from 'jquery'

export default {

  disableUserInputButton () {
    console.log(`disableUserInputButton called on ${$('#players-name__submit').name}`)
    $('#players-name__submit').prop('disabled', true);
  },

  enableUserInputButton () {
    console.log('enableUserInputButton called!')
    $('#players-name__submit').prop('disabled', false);
  },

  populatePlayerDashboard(playerNames) {
    $('#js-player1-name').text(playerNames[0] || 'Player 1');
   // $('#player-1-score').text(game.player1.score || 0);
    $('#js-player2-name').text(playerNames[1] || 'Player 2');
   // $('#player-2-score').text(game.player2.score || 0);
    $('#js-player3-name').text(playerNames[2] || 'Player 3');
   // $('#player-3-score').text(game.player3.score || 0)
  },

  populateGameBoard(currentBoard){

  }
}
