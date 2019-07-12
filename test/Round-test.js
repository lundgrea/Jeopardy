import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round';

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

});
