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

$(document).ready(function() {

  $('#player1-name__submit').click( () => {
 getPlayerName('#player1-name__input', '#player1-name__display')
})

  function getPlayerName(playerInput, playerDisplay) {
    console.log('Hey :');
    let playerName = $(`${playerInput}`).val();
    $(`${playerDisplay}`).text(playerName)
  }
})