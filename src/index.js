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

function createPlayers(Player1, Player2, Player3) {
  let player1 = new Player(Player1)
  let player2 = new Player(Player2)
  let player3 = new Player(Player3)
  return [player1, player2, player3]
}

// $(window).load(function() {
//   // will first fade out the loading animation
// $('.welcome-message').delay(1500).fadeOut("slow");
//   // will fade out the whole DIV that covers the website.
// //$("#preloader").delay(2000).fadeOut("slow");
// })
$(document).ready(function() {
  $('#user-name-inputs').hide();
  $('#puzzle-table').hide();
  $('#welcome-message').delay(2500).fadeOut("slow");
  $('#user-name-inputs').append(`
  <input type="text"id="player1-name__input"> Player 1 </input>
  <p></p>
  <input type="text"id="player2-name__input"> Player 2 </input>
  <p></p>
  <input type="text"id="player3-name__input" label="Player3">Player 3:</input>
  <p></p>
  <button id="player3-name__submit">Game on!</button>`).delay(3000).fadeIn('slow');
  //$('.user-name-inputs').delay(3000).fadeIn("slow");

  $('#player3-name__submit').click( () => {
 getPlayerName('#player3-name__input', '#player3-name__display');
 $('#user-name-inputs').fadeOut();
 $('#puzzle-table').delay(1000).fadeIn();
})

  function getPlayerName(playerInput, playerDisplay) {
    console.log('Hey :');
    let playerName = $(`${playerInput}`).val();
    $(`${playerDisplay}`).text(playerName)
  }
})
