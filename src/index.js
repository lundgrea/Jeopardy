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
import FinalRound from './FinalRound';


fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
  .then(response => response.json())
  .then(parsedData => getData(parsedData))
  .catch(err => console.error(err));

let answer;
let boards;
let game;
let wager;

// new Audio("https://www.myinstants.com/media/sounds/jeopardy-intro-1.mp3").play()

function getData(info) {
  let clue = new Clue(info);
  boards = clue.makeBoardObject();
}

function checkAnswer(location) {
  let correct = game.currentRound.evaluateGuess($(`${location}`).val());
  correct ? game.currentRound.updateScores(parseInt(answer[0])) : game.currentRound.updateScores(-(parseInt(answer[0])));
  if (correct) {
    $('.correct-answer__display').show()
    new Audio('http://www.nebo.edu/learning_resources/ppt/sounds/Applause.wav').play()
  } else {
    $('.incorrect-answer__display').show();
    new Audio('http://www.nebo.edu/learning_resources/ppt/sounds/wrongway.wav').play()
  }
}

$(document).ready(() => {
  domUpdates.pageLoadHandler()
  domUpdates.disableUserInputButton();
  
  $('#players-name__submit').click(() => {
    let playerNames = [$('#player1-name__input').val(), $('#player2-name__input').val(), $('#player3-name__input').val()]
    game = new Game(boards);
    game.startGame(playerNames);
    $('#user-name__inputs').fadeOut();
    $('#main-scorecard__display').delay(1000).fadeIn();
    $('#puzzle-table__display').delay(1000).fadeIn();
    $('#restart-game-button').delay(1000).fadeIn();

    domUpdates.highlightCurrentPlayer(game.currentRound.currentPlayer)
  })

  $('#main-board__display').click((e) => {
    new Audio("http://soundbible.com/grab.php?id=1891&type=mp3").play()
    let clickedItem = e.target.id;
    let dataIndex = e.target.getAttribute('data-index');
    
    console.log('game.roundTracker :', game.roundTracker);
    console.log('game.currentRound.dailyDoubleTurns :', game.currentRound.dailyDoubleTurns);

    if (game.roundTracker === 1 && game.currentRound.turnTracker === game.currentRound.dailyDoubleTurns[0]) {
      domUpdates.dailyDoubleTurnActions(clickedItem)
      answer = game.currentRound.takeTurn(dataIndex)
      return
    } 
    if (game.roundTracker === 2 && game.currentRound.turnTracker === game.currentRound.dailyDoubleTurns[1] ) {

      domUpdates.dailyDoubleTurnActions(clickedItem)
      answer = game.currentRound.takeTurn(dataIndex)
      return
    } 
    if (game.roundTracker === 2 && game.currentRound.turnTracker === game.currentRound.dailyDoubleTurns[2]) {

      domUpdates.dailyDoubleTurnActions(clickedItem)
      answer = game.currentRound.takeTurn(dataIndex)
      return
    } 
    else {
      domUpdates.normalTurnActions(clickedItem)
      $('#daily-double-wager__display__name-span').text(game.players[game.currentRound.currentPlayer+1].name)

      answer = game.currentRound.takeTurn(dataIndex);
      return
    }
  })

  $('#submit-button__wager').click(() => {
    wager = $('#player-wager__input').val()
    domUpdates.wagerSubmit()
  })


  $('#submit-button__guess').click(() => {

    checkAnswer('#player-guess__input')
    
    if (game.currentRound.turnTracker === 17) {
      $('.column-row__display').removeAttr('style')
      game.generateRound()
    }
    domUpdates.updateQuestionDisplay(answer[0]);
    domUpdates.dailyDoubleSubmitGuessActions()
    domUpdates.highlightCurrentPlayer(game.currentRound.currentPlayer)
  })

  $('#submit-button').click(() => {
    checkAnswer('#current-answer__input')
    
    if (game.currentRound.turnTracker === 17) {
      $('.column-row__display').removeAttr('style')
      game.generateRound()
    }
    domUpdates.updateQuestionDisplay(answer[0]);
    domUpdates.normalSubmitGuessActions()
    domUpdates.highlightCurrentPlayer(game.currentRound.currentPlayer)
  })


  $('#current-answer__input').keyup(() => {
    if ($( '#current-answer__input' ).val() !== '') {
      domUpdates.enableGuessInputButton();
    } else {
      domUpdates.disableGuessInputButton();
    }
  })

  $('.player-input').keyup(() => {
    if ($( '#player1-name__input' ).val() !== '' && $( '#player2-name__input' ).val() !== '' && $( '#player3-name__input' ).val() != '') {
      domUpdates.enableUserInputButton();
    } else {
      domUpdates.disableUserInputButton();
    }
  })

  $('#restart-game-button').click(() => {
    document.location.reload()
    // fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
    //   .then(response => response.json())
    //   .then(parsedData => getData(parsedData))
    //   .catch(err => console.error(err));
    // domUpdates.pageLoadHandler()
  })

});

