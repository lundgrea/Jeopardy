import chai from 'chai';
const expect = chai.expect;

import Turn from '../src/Turn';
import domUpdates from "../src/domUpdates";

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
