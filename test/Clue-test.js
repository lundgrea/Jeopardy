import chai from 'chai';
const expect = chai.expect;

import Clue from '../src/Clue';
import data from '../src/data';

var clue

beforeEach(() => {
  clue = new Clue(data)
});

describe('Clue', function() {

  it('should be a function', function() {
   
    expect(Clue).to.be.a('function');
  });

  it('should be able to generate a random number between a min and max. The number should be a whole number', function() {

    let randomId = clue.generateRandomId(0, 9)
    
    expect(randomId >= 0).to.equal(true);
    expect(randomId <= 9).to.equal(true);
    expect(Number.isInteger(randomId)).to.equal(true);
  });

  it.skip("should be able to find a category based of the random number generated but never the same category for an enitre game", function() {
    let category1 = clue.getCategory(clue.data.categories, 0);
    let category2 = clue.getCategory(clue.data.categories, 3);
    let category3 = clue.getCategory(clue.data.categories, 7);

    expect(category1).to.equal("unitedStatesHistory");
    expect(category2).to.equal("nameThatBoardGame");
    expect(category3).to.equal("cableTV");
    expect(clue.usedCategories.length).to.equal(3);
  }),
  it("should be able to find 4 random clues based upon the category that was selected", function() {
    let column = clue.createBoardColumnObj();

    expect(column.clues.length).to.equal(4);
  });
    
  it('should order clues based upon the the point value', function() {
    let column = clue.createBoardColumnObj();

    expect(column.clues[0].pointValue).to.equal(100);
    expect(column.clues[1].pointValue).to.equal(200);
    expect(column.clues[2].pointValue).to.equal(300);
    expect(column.clues[3].pointValue).to.equal(400);
  });
});