import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game';

//Declare variables for beforeEach here//
let game;

beforeEach(() => {
  game = new Game()
});

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should hold a place for the current round', function(){
    expect(game.currentRound).to.be.a('object');
  });

  it('should start with current round as 0', function(){
    expect(game.roundTracker).to.equal(0);
  });

  it('should hold a spot for the players', function(){
    expect(game.players).to.be.a('array');
  });

it('should create be able to create new rounds', function(){
    game.generateRound()
    expect(game.currentRound).to.be.a('object');
  }); 

  it('should create three new Players from the player input fields', function(){
    game.generatePlayers('Jon', 'Chris', 'Alyssa');
    expect(game.players).to.deep.equal([{name: 'Jon', score: 0} , {name: 'Chris', score: 0 } , { name: 'Alyssa', score: 0 }]);
  });

  it('should be able to start the game', function(){
    game.startGame();
    expect(game.currentRound).to.be.a('object');
    expect(game.roundTracker).to.equal(1);
    expect(game.players).to.be.a('array')
  });

  it('should keep track of the current round', function(){
    game.startGame()
    expect(game.roundTracker).to.equal(1);
  });   

});
