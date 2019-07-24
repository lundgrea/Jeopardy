import chai from 'chai';
const expect = chai.expect;
import domUpdates from "../src/domUpdates";


import Player from '../src/Player';

var player1, player2

beforeEach(() => {
  player1 = new Player('John');
  player2 = new Player('John', 101);
});

describe('Player', function() {

  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of Player', function() {
    expect(player1).to.be.an.instanceof(Player);
  });


  it('should have a name', function() {
    expect(player1.name).to.equal('John')
  });

  it('should start with a score of 100', function() {
    expect(player1.score).to.equal(100)
  })

});
