import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
// const spy = chai.spy()

chai.use(spies);

import Round from '../src/Round';
import domUpdates from "../src/domUpdates";

let round;

chai.spy.on(domUpdates, ['disableUserInputButton', 'enableUserInputButton', 'populateGameBoard', 'convertCategoryToUpperCase', 'highlightCurrentPlayer', 'updateQuestionDisplay', 'displayRequestToPlayAgain'], () => {});

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

  it('should be able to begin the turn', function(){
    round.beginTurn();
    expect(round.currentTurn).to.be.a('object')
    expect(round.turnTracker).to.equal(1);
  });

  it.only('should return a string with any puctuation removed', function(){
    expect(round.evaluateTestGuess('St. Paul', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('St Paul', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('St Paul!', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('st paul', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('Saint Paul', 'St. Paul')).to.equal(false);

 
  });


});
