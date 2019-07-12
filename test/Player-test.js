import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player';

describe('Player', function() {

  it('should be a function', function() {
    const player = new Player();
    expect(Player).to.be.a('function');
  });

});
