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

var data;
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    data = parsedData.data
    console.log(data)
  })
  .catch(err => console.error(err));



$(document).ready(function() {
  $('#main-score-cards').hide();
  $('#user-name-inputs').hide();
  $('#puzzle-table').hide();
  $('#welcome-message').delay(2500).fadeOut("slow");
  $('#user-name-inputs').append(`
  <input type="text" id="player1-name__input" class="player-input"> Player 1 </input>
  <p></p>
  <input type="text" id="player2-name__input" class="player-input"> Player 2 </input>
  <p></p>
  <input type="text" id="player3-name__input" class="player-input"> Player 3:</input>
  <p></p>
  <button type="button" id="players-name__submit" name="submitUserNames" class="buttonStyled">Game on!</button>`).delay(3000).fadeIn('slow');
  //$('.user-name-inputs').delay(3000).fadeIn("slow");
  //let $grid = $('.grid').packery({itemSelector: '.grid-item', columnWidth: 100});
  //$('.grid').packery({itemSelector: '.grid-item', gutter: 15, percentPosition: true, columnWidth: 100, });
  domUpdates.disableUserInputButton();

  $('#players-name__submit').click( () => {
    console.log($('#player1-name__input').val());
    let playerNames = [$('#player1-name__input').val(), $('#player2-name__input').val(),$('#player3-name__input').val()]
    domUpdates.populatePlayerDashboard(playerNames)
    let game = new Game();
    //game.startGame(playerNames);
    $('#user-name-inputs').fadeOut();
    $('#main-score-cards').delay(1000).fadeIn();
    $('#puzzle-table').delay(1000).fadeIn();
  })

  $('.player-input').blur(() => {
    console.log(`player-input value is: ${$( '#player1-name__input' ).val()}`)
    if($( '#player1-name__input' ).val() != '' && $( '#player2-name__input' ).val() != '' && $( '#player3-name__input' ).val() != ''){
      domUpdates.enableUserInputButton();
    } else {
      domUpdates.disableUserInputButton();
    }
  })

});




