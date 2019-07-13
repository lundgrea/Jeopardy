import chai from 'chai';
const expect = chai.expect;

import Clue from '../src/Clue';
import data from '../src/data';

var clue

beforeEach(() => {
  clue = new Clue()
});

describe('Clue', function() {

  it('should be a function', function() {
   
    expect(Clue).to.be.a('function');
  });

  it('should be able to generate a random number between a min and max. The number should be a whole number', function() {

    let randomId = clue.generateRandomId(0, 9)
    
    expect(randomId >= 1).to.equal(true);
    expect(randomId <= 9).to.equal(true);
    expect(Number.isInteger(randomId)).to.equal(true);
  });

  it('should be able to find a category based of the random number generated', function() {

    let category1 = clue.getCategory(data.categories, 0);
    let category2 = clue.getCategory(data.categories, 3);
    let category3 = clue.getCategory(data.categories, 7);

    expect(category1).to.equal('unitedStatesHistory');
    expect(category2).to.equal('nameThatBoardGame');
    expect(category3).to.equal('cableTV');
    expect(clue.usedCategories.length).to.equal(3)

  })

  // it('should be able to generate 3 categories from')
});