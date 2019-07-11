import chai from 'chai';
const expect = chai.expect;


import Turn from '../src/Turn';

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

});
