import chai from 'chai';
const expect = chai.expect;

import Clue from '../src/Clue';

describe('Clue', function() {

  it('should be a function', function() {
    const clue = new Clue();
    expect(Clue).to.be.a('function');
  });

});