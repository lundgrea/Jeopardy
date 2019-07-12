import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player';

describe('Player', function() {

  it('should be a function', function() {
    
    expect(Player).to.be.a('function');
  });

  it('should have a name', function() {
  
    const player1 = new Player('John')
   

    expect(player1.name).to.equal('John')

  })
  
  it('should start with a score of 0', function() {

    const player1 = new Player('John')

    expect(player1.score).to.equal(0)
  })

  it('should be able to increment score', function () {

    const player1 = new Player('John')

    player1.incrementScore(400)

    expect(player1.score).to.equal(400)
  })

  it('should be able to decrement score', function () {

    const player1 = new Player('John', 101)

    player1.decrementScore(100)

    expect(player1.score).to.equal(1)
  })
});
