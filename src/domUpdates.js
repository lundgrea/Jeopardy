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
    $(`#js-player-card-${playerIndex - 1}`).toggleClass('player-highlight')
    $(`#js-player-card-${playerIndex}`).toggleClass('player-highlight')
    }
  },

  updateQuestionDisplay(question) {
    $('#daily-double-question__display').text(question)
    $('#current-question__display').text(question);
  },


  
  dailyDoubleTurnActions(clickedItem) {  
    $(`#${clickedItem}`).css({
      'background-color': 'pink',
      'background-image': 'url("http://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555924671/shape/mentalfloss/daily_double.jpg")',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'transition': 'transform 4s',
      'transform- style': 'preserve - 3d',
    })
    $(`#${clickedItem}`).text('')
    $('audio#pop')[0].play();
    $('.correct-answer__display').hide();
    $('.incorrect-answer__display').hide();
    $('main').delay(700).fadeOut('fast')
    $('#daily-double-question__display').hide()
    $('#player-guess__input').hide();
    $('#submit-button__guess').hide()
    $('#daily-double__container').css({ 'z-index': 100 }).delay(900).fadeIn(900)
  },

  normalTurnActions(clickedItem) {
    $(`#${clickedItem}`).css({
      'background-color': 'mediumblue',
      'transition': 'transform 2s',
      'transform- style': 'preserve - 3d',
      'transform': 'rotateX(180deg)'
    })
    $('.correct-answer__display').hide();
    $('.incorrect-answer__display').hide();
    $('main').delay(700).fadeOut('fast')
    $('.alert-question__container').css({ 'z-index': 100 }).delay(900).fadeIn(900)
    $('#submit-button').delay(1000).fadeIn(900);
    $('#current-answer__input').delay(1000).fadeIn(900);
    $('alert-question__display').delay(1000).fadeIn(900)
    $('#current-question__display').delay(1000).fadeIn(900);
  }




  
  
}

export default domUpdates

