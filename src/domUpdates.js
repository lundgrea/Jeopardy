import $ from 'jquery';
import Game from '../src/Game';

let domUpdates = {


  disableUserInputButton () {
    $('#players-name__submit').prop('disabled', true);
  },

  enableUserInputButton () {
    $('#players-name__submit').prop('disabled', false);
  },

  populatePlayerDashboard(playerNames) {
    $('#js-player1-name').text(playerNames[0].name || 'Player 1');
    $('#player-1-score').text(playerNames[0].score || 0);
    $('#js-player2-name').text(playerNames[1].name  || 'Player 2');
    $('#player-2-score').text(playerNames[1].score || 0);
    $('#js-player3-name').text(playerNames[2].name  || 'Player 3');
    $('#player-3-score').text(playerNames[2].score || 0)
  },

  populateGameBoard(currentBoard) {
    let column0 = currentBoard[0]
    let column1 = currentBoard[1]
    let column2 = currentBoard[2]
    let column3 = currentBoard[3]

    $('#column0-row0__category').text(this.convertCategoryToUpperCase(column0.category));
    $('#column1-row0__category').text(this.convertCategoryToUpperCase(column1.category));
    $('#column2-row0__category').text(this.convertCategoryToUpperCase(column2.category));
    $('#column3-row0__category').text(this.convertCategoryToUpperCase(column3.category));

    $('#column0-row1__clue').text(column0.clues[0].pointValue)
    $('#column0-row2__clue').text(column1.clues[1].pointValue)
    $('#column0-row3__clue').text(column2.clues[2].pointValue)
    $('#column0-row4__clue').text(column3.clues[3].pointValue)

    $('#column1-row1__clue').text(column0.clues[0].pointValue)
    $('#column1-row2__clue').text(column1.clues[1].pointValue)
    $('#column1-row3__clue').text(column2.clues[2].pointValue)
    $('#column1-row4__clue').text(column3.clues[3].pointValue)

    $('#column2-row1__clue').text(column0.clues[0].pointValue)
    $('#column2-row2__clue').text(column1.clues[1].pointValue)
    $('#column2-row3__clue').text(column2.clues[2].pointValue)
    $('#column2-row4__clue').text(column3.clues[3].pointValue)

    $('#column3-row1__clue').text(column0.clues[0].pointValue)
    $('#column3-row2__clue').text(column1.clues[1].pointValue)
    $('#column3-row3__clue').text(column2.clues[2].pointValue)
    $('#column3-row4__clue').text(column3.clues[3].pointValue)
  },

  convertCategoryToUpperCase(category) {
    let upperCaseCategory = category.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    let splitCategoryName = upperCaseCategory.split(/(?=[A-Z])/);
    let joinedCategory = splitCategoryName.join(' ');
    return joinedCategory;
  },

  highlightCurrentPlayer(playerIndex) {
    if (playerIndex === 0) {
      $(`#js-player-card-${playerIndex}`).toggleClass('player-highlight')
      $('#js-player-card-2').removeClass('player-highlight')
    } else {
    $(`#js-player-card-${playerIndex-1}`).toggleClass('player-highlight')
    $(`#js-player-card-${playerIndex}`).toggleClass('player-highlight')
    }
  },

  updateQuestionDisplay(question) {
    $('#current-question__display').text(question);
  },

  displayRequestToPlayAgain() {  
  },


  populateQuestion(path) {

   
  },



  
  
}

export default domUpdates

