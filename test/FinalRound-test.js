import chai from 'chai';
const expect = chai.expect;

import FinalRound from '../src/FinalRound';
import domUpdates from "../src/domUpdates";


var finalRound

beforeEach(() => {
  finalRound = new FinalRound
});

describe('FinalRound', function() {

  it.only('should be a function', function() {
    expect(FinalRound).to.be.a('function');
  });

 it('should be an instance of FinalRound', function() {
    expect(finalRound).to.be.an.instanceof(FinalRound);
  });

});