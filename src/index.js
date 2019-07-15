// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import Game from './Game';
import Clue from './Clue';
import Player from './Player';
import Round from './Round';
import Turn from './Turn';
import domUpdates from './domUpdates.js';

function createPlayers(playerInput) {
  let player1 = new Player(playerInput[0], 100)
  let player2 = new Player(playerInput[1], 200)
  let player3 = new Player(playerInput[2], 300)
  console.log(`Player1 name: ${player1.name}`);
  console.log(`Player2 name: ${player2.name}`);
  console.log(`Player3 name: ${player3.name}`);
  $('#js-player1-name').text(player1.name || 'Player 1');
  $('#player-1-score').text(player1.score || 0);
  $('#js-player2-name').text(player2.name || 'Player 2');
  $('#player-2-score').text(player2.score || 0);
  $('#js-player3-name').text(player3.name || 'Player 3');
  $('#player-3-score').text(player3.score || 0);
  return [player1, player2, player3]
}

$(document).ready(function() {
  $('#main-score-cards').hide();
  $('#user-name-inputs').hide();
  $('#puzzle-table').hide();
  $('#welcome-message').delay(2500).fadeOut("slow");
  $('#user-name-inputs').append(`
  <input type="text"id="player1-name__input"> Player 1 </input>
  <p></p>
  <input type="text"id="player2-name__input"> Player 2 </input>
  <p></p>
  <input type="text"id="player3-name__input"> Player 3:</input>
  <p></p>
  <button id="player3-name__submit" type="button" class="buttonStyled">Game on!</button>`).delay(3000).fadeIn('slow');
  //$('.user-name-inputs').delay(3000).fadeIn("slow");
  //let $grid = $('.grid').packery({itemSelector: '.grid-item', columnWidth: 100});
  //$('.grid').packery({itemSelector: '.grid-item', gutter: 15, percentPosition: true, columnWidth: 100, });
  domUpdates.disableUserInputButton();

  $('#player3-name__submit').click( () => {
    console.log($('#player1-name__input').val());
    let playerNames = [$('#player1-name__input').val(), $('#player2-name__input').val(),$('#player3-name__input').val()]
    createPlayers(playerNames);
    $('#user-name-inputs').fadeOut();
    $('#main-score-cards').delay(1000).fadeIn();
    $('#puzzle-table').delay(1000).fadeIn();
  })

  $('#player3-name__submit').hover( () => {
    console.log('button hover!')
   $( this ).css('color',"red");
    // $( this ).fadeOut( 100 );
    // $( this ).fadeIn( 500 );
  });

  $('player3-name__input').blur(() => {
    console.log('Player3 input blur');
    //if($( this ).val() != '') domUpdates.enableUserInputButton();
  })

});




