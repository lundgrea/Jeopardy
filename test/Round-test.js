import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round';

//Declare variables for beforeEach here//
let round;

beforeEach(() => {
  round = new Round()

});

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should start with 0 rounds', function() {
  expect(round.turnTracker).to.equal(0);
  });

  it('should start with no clues', function() {
  expect(round.currentClue).to.equal(null)
  });

  it('should generate clues', function() {
  round.generateClues()
  expect(round.currentClue).to.be.a('object');
  });

  // it('should be able to begin the turn', function(){
  // expect(round.beginTurn()).to.equal();
  // });

  // it('should generate clues', function(){
  // expect(round.generateRound()).to.equal();
  // });


});
