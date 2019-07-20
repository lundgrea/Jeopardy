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
  console.log(boards)
}

let game;
let answer;

$(document).ready(function() {
  $('#main-scorecard__display').hide();
  $('#user-name__inputs').hide();
  $('#puzzle-table__display').hide();
  $('.alert-question__container').hide();
  $('fieldset').hide();
  $('.correct-answer__display').hide();
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
    // console.log($('#player1-name__input').val());
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
    console.log('data-index is:', e.target.getAttribute('data-index'));
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
  })


  $('#submit-button').click(() => {
    domUpdates.updateQuestionDisplay(answer[1]);
    let correct = game.currentRound.evaluateGuess($('#current-answer__input').val());
    correct ? game.currentRound.updateScores(parseInt(answer[0])) : game.currentRound.updateScores(-(parseInt(answer[0]))); 
    $('main').delay(1750).fadeIn('slow');
    // $('fieldset').hide();
    $('.alert-question__container').delay(1500).fadeOut('fast');
    $('#submit-button').hide();
    $('#current-question__display').hide();
    $('#current-answer__input').hide();
    correct ? $('.correct-answer__display').show() : $('.incorrect-answer__display').show();
    // $('fieldset').hide(); //might need a conditional here - if active, hide.
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

