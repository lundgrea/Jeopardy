import $ from 'jquery';
import Game from '../src/Game';

let domUpdates = {

  pageLoadHandler() {
    // new Audio("https://www.myinstants.com/media/sounds/jeopardy-intro-1.mp3").play()
    $('#main-scorecard__display').hide();
    $('#user-name__inputs').hide();
    $('#puzzle-table__display').hide();
    $('.alert-question__container').hide();
    $('fieldset').hide();
    $('.correct-answer__display').hide();
    $('#daily-double__container').hide();
    $('.final-round').hide();
    $('#welcome-message').delay(9000).fadeOut("slow");
    $('#user-name__inputs').delay(6000).append(`
  <p class="player-input__label">Player 1</p>
  <input type="text" id="player1-name__input" class="player-input"></input>
  <p class="player-input__label">Player 2</p>
  <input type="text" id="player2-name__input" class="player-input"></input>
  <p class="player-input__label">Player 3</p>
  <input type="text" id="player3-name__input" class="player-input"></input>
  <button type="button" id="players-name__submit" name="submitUserNames" class="button-styled hvr-grow">Game On!</button>`).delay(3700).fadeIn('slow');
  },

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
      'transform-style': 'preserve-3d',
    })
    $(`#${clickedItem}`).text('')
    $('audio#pop')[0].play();
    $('main').delay(3000).fadeOut('slow')

    $('#daily-double-question__display').hide()
    $('#player-guess__input').hide()
    $('#submit-button__guess').hide()
    $('#daily-double-incorrect__image').hide()
    $('#daily-double-incorrect__image').hide()

    $('#daily-double__container').delay(3500).fadeIn(3750)
    $('#daily-double__display').delay(3700).fadeIn(4000)
    $('#daily-double-wager__display').delay(4100).fadeIn(4500)
    $('#player-wager__input').delay(4300).fadeIn(4500)
    $('#submit-button__wager').delay(4500).fadeIn(4500)
  },

  wagerSubmit() {
    $('#daily-double-wager__display').delay(500).fadeOut('slow')
    $('#player-wager__input').delay(500).fadeOut('slow')
    $('#submit-button__wager').delay(500).fadeOut('slow')
    $('#daily-double-question__display').delay(1000).fadeIn('slow')
    $('#player-guess__input').delay(1000).fadeIn('slow')
    $('#submit-button__guess').delay(1000).fadeIn('slow')
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
  },
  
  dailyDoubleSubmitGuessActions() {
    $('main').delay(1000).fadeIn('slow');
    $('#daily-double-question__display').delay(1500).fadeOut('fast');

    $('#submit-button__guess').hide();
    $('#daily-double-question__display').hide();
    $('#player-guess__input').hide()
    $('#player-guess__input').val('');
    $('#daily-double__display').delay(1000).fadeOut('fast')
    $('#daily-double__container').delay(1000).hide()
  },
  
  normalSubmitGuessActions() {

    $('main').delay(1750).fadeIn('slow');
    $('.alert-question__container').delay(1500).fadeOut('fast');
    $('#submit-button').hide();
    $('#current-question__display').hide();
    $('#current-answer__input').hide();
    $('#current-answer__input').val('');
  },

  startFinalRound() {
    $('main').hide();

    $('#final-round__container').delay(1250).fadeIn('slow');
    $('.final-round-wager__display').delay(1400).fadeIn('slow')
    $('#player1-wager__input').delay(1400).fadeIn('slow')
    $('#player2-wager__input').delay(1400).fadeIn('slow')
    $('#player3-wager__input').delay(1400).fadeIn('slow')
    $('#submit-button__wager1').delay(1400).fadeIn('slow')
    $('#submit-button__wager2').delay(1400).fadeIn('slow')
    $('#submit-button__wager3').delay(1400).fadeIn('slow')


  },
}

export default domUpdates

