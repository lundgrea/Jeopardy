import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
// const spy = chai.spy()

chai.use(spies);


import Turn from '../src/Turn';
import domUpdates from "../src/domUpdates";

chai.spy.on(domUpdates, ['updateScore'], () => {});



var turn; 

beforeEach(() => {
  turn = new Turn()
});

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });
});
