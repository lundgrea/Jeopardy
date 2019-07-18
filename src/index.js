// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

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

$(document).ready(function() {
  $('#main-scorecard__display').hide();
  $('#user-name__inputs').hide();
  $('#puzzle-table__display').hide();
  $('.alert-question__container').hide()
  $('fieldset').hide()
  $('#welcome-message').delay(2500).fadeOut("slow");
  // $('question-alert__display')
  $('#user-name__inputs').append(`
  <input type="text" id="player1-name__input" class="player-input"></input>
  <p>Player 1</p>
  <input type="text" id="player2-name__input" class="player-input"></input>
  <p>Player 2</p>
  <input type="text" id="player3-name__input" class="player-input"></input>
  <p>Player 3</p>
  <button type="button" id="players-name__submit" name="submitUserNames" class="buttonStyled">Game on!</button>`).delay(3000).fadeIn('slow');
  domUpdates.disableUserInputButton();

  $('#players-name__submit').click(() => {
    // console.log($('#player1-name__input').val());
    let playerNames = [$('#player1-name__input').val(), $('#player2-name__input').val(), $('#player3-name__input').val()]
    game = new Game(boards);
    game.startGame(playerNames);
    $('#user-name__inputs').fadeOut();
    $('#main-scorecard__display').delay(1000).fadeIn();
    $('#puzzle-table__display').delay(1000).fadeIn();
  })

  $('#main-board__display').click((e) => {
  
    let clickedItem = e.target.id;
    $(`#${clickedItem}`).css({
      'background-color': 'mediumblue',
      'transition': 'transform 2s',
      'transform- style': 'preserve - 3d',
      'transform': 'rotateX(180deg)'}
    )

    $('main').delay(700).fadeOut('fast')
    $('.alert-question__container').css({'z-index': 100}).delay(700.5).slideDown(900)
    $('fieldset').delay(1000).fadeIn(8000)

    $('#current-question__display').text('HEY IM A QUESTION')
  
    if (game.currentRound.turnTracker === 16) {
      $('.column-row__display').removeAttr('style')
      game.generateRound()
    } else {
     game.currentRound.takeTurn();
    }
  })

  $('#submit-button').click(() => {
    $('main').show()
    $('fieldset').hide()
    $('.alert-question__container').hide()
  })

  $('.player-input').keyup(() => {
    // console.log(`player-input value is: ${$( '#player1-name__input' ).val()}`)
    if ($( '#player1-name__input' ).val() != '' && $( '#player2-name__input' ).val() != '' && $( '#player3-name__input' ).val() != '') {
      domUpdates.enableUserInputButton();
    } else {
      domUpdates.disableUserInputButton();
    }
  })

});




