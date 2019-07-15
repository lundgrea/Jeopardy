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

  // it('should generate clues', function(){
  // expect(game.generateRound()).to.equal(1);
  // });

});
