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
    
    if (game.roundTracker === 1 && game.currentRound.turnTracker === game.currentRound.dailyDoubleTurns[0]) {
      domUpdates.dailyDoubleTurnActions(clickedItem)
      answer = game.currentRound.takeTurn(dataIndex)

    } 
    if (game.currentRound.turnTracker === game.currentRound.dailyDoubleTurns[1] || game.currentRound.turnTracker === game.currentRound.dailyDoubleTurns[2] && game.roundTracker === 2 ) {
      domUpdates.dailyDoubleTurnActions(clickedItem)
      answer = game.currentRound.takeTurn(dataIndex)
    } else {
      domUpdates.normalTurnActions(clickedItem)
      answer = game.currentRound.takeTurn(dataIndex);
    }
  })

  $('#submit-button__wager').click(() => {
    wager = $('#player-wager__input').val()
    $('#daily-double-wager__display').delay(500).fadeOut('slow')
    $('#player-wager__input').delay(500).fadeOut('slow')
    $('#submit-button__wager').delay(500).fadeOut('slow')
    $('#daily-double-question__display').delay(1000).fadeIn('slow')
    $('#player-guess__input').delay(1000).fadeIn('slow')
    $('#submit-button__guess').delay(1000).fadeIn('slow')
  })

  $('#submit-button__guess').click(() => {
    domUpdates.updateQuestionDisplay(answer[0]);
    let correct = game.currentRound.evaluateGuess($('#player-guess__input').val());
    correct ? game.currentRound.updateScores(parseInt(answer[0])) : game.currentRound.updateScores(-(parseInt(answer[0])));

    $('main').delay(1750).fadeIn('slow');
    $('#daily-double-question__display').delay(1500).fadeOut('fast');

    $('#submit-button__guess').hide();
    $('#current-question__display').hide();
    $('#current-answer__input').hide();
    $('#player-guess__input').val('');
    $('#player-guess__input').hide;
    $('#daily-double__display').delay(2500).fadeOut('slow')
    if (game.currentRound.turnTracker === 17) {
      $('.column-row__display').removeAttr('style')
      game.generateRound()
    }
    domUpdates.highlightCurrentPlayer(game.currentRound.currentPlayer)
    $('#current-answer__input').val('');
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

