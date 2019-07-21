// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'


import Game from './Game';
import Clue from './Clue';
import Player from './Player';
import Round from './Round';
import Turn from './Turn';
import domUpdates from './domUpdates.js';

var boards;
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
  .then(response => response.json())
  .then(parsedData => getData(parsedData))
  .catch(err => console.error(err));

function getData(info) {
  let clue = new Clue(info);
  boards = clue.makeBoardObject();

}

let game;
let answer;
let wager;

$(document).ready(function() {
  $('#main-scorecard__display').hide();
  $('#user-name__inputs').hide();
  $('#puzzle-table__display').hide();
  $('.alert-question__container').hide();
  $('fieldset').hide();
  $('.correct-answer__display').hide();
  $('#daily-double__container').hide();
  $('#welcome-message').delay(2500).fadeOut("slow");
  $('#user-name__inputs').append(`
  <p class="player-input__label">Player 1</p>
  <input type="text" id="player1-name__input" class="player-input"></input>
  <p class="player-input__label">Player 2</p>
  <input type="text" id="player2-name__input" class="player-input"></input>
  <p class="player-input__label">Player 3</p>
  <input type="text" id="player3-name__input" class="player-input"></input>
  <button type="button" id="players-name__submit" name="submitUserNames" class="button-styled hvr-grow">Game On!</button>`).delay(3700).fadeIn('slow');
  domUpdates.disableUserInputButton();

  $('#players-name__submit').click(() => {
    let playerNames = [$('#player1-name__input').val(), $('#player2-name__input').val(), $('#player3-name__input').val()]
    game = new Game(boards);
    game.startGame(playerNames);
    $('#user-name__inputs').fadeOut();
    $('#main-scorecard__display').delay(1000).fadeIn();
    $('#puzzle-table__display').delay(1000).fadeIn();
    domUpdates.highlightCurrentPlayer(game.currentRound.currentPlayer)
  })

  $('#main-board__display').click((e) => {
    
    let clickedItem = e.target.id;
    let dataIndex = e.target.getAttribute('data-index');
    console.log('game.roundTracker :', game.roundTracker);
    console.log('game.currentRound.turnTracker :', game.currentRound.turnTracker);
    console.log('game.currentRound.dailyDoubleTurns[0] :', game.currentRound.dailyDoubleTurns[0]);

    if (game.roundTracker === 1 && game.currentRound.turnTracker === game.currentRound.dailyDoubleTurns[0]) {
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
      $('#daily-double__container').css({'z-index': 100}).delay(900).fadeIn(900)
      game.currentRound.takeTurn(dataIndex)

    } else {
      $(`#${clickedItem}`).css({
        'background-color': 'mediumblue',
        'transition': 'transform 2s',
        'transform- style': 'preserve - 3d',
        'transform': 'rotateX(180deg)'
      })
      $('.correct-answer__display').hide();
      $('.incorrect-answer__display').hide();
      $('main').delay(700).fadeOut('fast')
      $('.alert-question__container').css({'z-index': 100}).delay(900).fadeIn(900)
      $('#submit-button').delay(1000).fadeIn(900);
      $('#current-answer__input').delay(1000).fadeIn(900);
      $('alert-question__display').delay(1000).fadeIn(900)
      $('#current-question__display').delay(1000).fadeIn(900);
      answer = game.currentRound.takeTurn(dataIndex);
    }
  })

  $('#submit-button__wager').click(() => {
    wager = $('player-wager__input').val()
    $('#daily-double-wager__display').delay(500).fadeOut('slow')
    $('#player-wager__input').delay(500).fadeOut('slow')
    $('#submit-button__wager').delay(500).fadeOut('slow')
    $('#daily-double-question__display').delay(1000).fadeIn('slow')
    $('#player-guess__input').delay(1000).fadeIn('slow')
    $('#submit-button__guess').delay(1000).fadeIn('slow')

  })

  $('#submit-button').click(() => {
    domUpdates.updateQuestionDisplay(answer[1]);
    let correct = game.currentRound.evaluateGuess($('#current-answer__input').val());
    correct ? game.currentRound.updateScores(parseInt(answer[0])) : game.currentRound.updateScores(-(parseInt(answer[0]))); 

    $('main').delay(1750).fadeIn('slow');
    $('.alert-question__container').delay(1500).fadeOut('fast');
    $('#submit-button').hide();
    $('#current-question__display').hide();
    $('#current-answer__input').hide();
    correct ? $('.correct-answer__display').show() : $('.incorrect-answer__display').show();
    $('#current-answer__input').val('');
    if (game.currentRound.turnTracker === 17) {
      $('.column-row__display').removeAttr('style')
      game.generateRound()
    }
    domUpdates.highlightCurrentPlayer(game.currentRound.currentPlayer)
    $('#current-answer__input').val('');
  })



  $('.player-input').keyup(() => {

    if ($( '#player1-name__input' ).val() !== '' && $( '#player2-name__input' ).val() !== '' && $( '#player3-name__input' ).val() != '') {
      domUpdates.enableUserInputButton();
    } else {
      domUpdates.disableUserInputButton();
    }
  })

});

