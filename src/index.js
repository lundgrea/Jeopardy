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

let game

// let clue = new Clue(data)
// console.log(clue)
// var x = clue.makeBoardObject()

$(document).ready(function() {
  $('#main-scorecard__display').hide();
  $('#user-name__inputs').hide();
  $('#puzzle-table__display').hide();
  $('#welcome-message').delay(2500).fadeOut("slow");
  $('#user-name__inputs').append(`
  <input type="text" id="player1-name__input" class="player-input"></input>
  <p>Player 1</p>
  <input type="text" id="player2-name__input" class="player-input"></input>
  <p>Player 2</p>
  <input type="text" id="player3-name__input" class="player-input"></input>
  <p>Player 3</p>
  <button type="button" id="players-name__submit" name="submitUserNames" class="buttonStyled">Game on!</button>`).delay(3000).fadeIn('slow');
  //$('.user-name-inputs').delay(3000).fadeIn("slow");
  //let $grid = $('.grid').packery({itemSelector: '.grid-item', columnWidth: 100});
  //$('.grid').packery({itemSelector: '.grid-item', gutter: 15, percentPosition: true, columnWidth: 100, });
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


    if (game.currentRound.turnTracker === 16) {
      $('.column-row__display').removeAttr('style')
      game.generateRound()
    } else {
      game.currentRound.beginTurn()
   
    }
  })


  // $('#submit-button').click(() => {
  //   if (game.currentRound.turnTracker === 16) {
  //     game.generateRound()
  //   //   $('column-row__display').css({
  //   //     margin: 0 % 0 % 1 % 1 %;
  //   //     height: 25 %;
  //   //     border- radius: 7 %;
  //   //   display: flex;
  //   //   justify - content: center;
  //   //   align - items: center;
  //   //   align - content: end;
  //   //   font - size: 42px;
  //   //   font - weight: 800;
  //   //   color: goldenrod;
  //   //   border - style: solid;
  //   //   border - width: 5px;
  //   //   border - color: black;
  //   //   background - color: navy;
  //   //   opacity: 0.95;
  //   //   filter: drop - shadow(2px 4px 6px black);
  //   // }

  //     })
  //   } else {
  //     game.currentRound.beginTurn()
  //   }
  // })




  $('.player-input').blur(() => {
    console.log(`player-input value is: ${$( '#player1-name__input' ).val()}`)
    if ($( '#player1-name__input' ).val() != '' && $( '#player2-name__input' ).val() != '' && $( '#player3-name__input' ).val() != '') {
      domUpdates.enableUserInputButton();
    } else {
      domUpdates.disableUserInputButton();
    }
  })


});




