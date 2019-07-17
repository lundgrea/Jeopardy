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


  it('should start with no clues', function() {
  expect(round.currentClue).to.equal(null)
  });

  it('should have a place to hold used cards', function() {
  expect(round.discardPile).to.deep.equal([]);
  });


  it('should be able to begin the turn', function(){
  round.beginTurn();
  expect(round.currentTurn).to.be.a('object')
  expect(round.turnTracker).to.equal(1);
  });

  it('should keep all used cards', function(){
  expect(round.discardPile).to.deep.equal([])
  round.beginTurn();
  expect(round.turnTracker).to.equal(1);
  round.beginTurn();
  expect(round.turnTracker).to.equal(2);
  expect(round.discardPile).to.deep.equal([{}])
  });



});
