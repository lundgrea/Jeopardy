import chai from 'chai';
const expect = chai.expect;

import Clue from '../src/Clue';
import data from '../src/data';

var clue

beforeEach(() => {
  clue = new Clue(data)
});

describe('Clue', function() {

  it.only('should be a function', function() {
   
    expect(Clue).to.be.a('function');
  });

  it.only('should be able to shuffle the array of category ids', function() {

    let randomArray = clue.shuffleArray()
    
    expect(randomArray.length).to.equal(10);
    expect(randomArray.sort()).to.eql(clue.roundCategories.sort());
  });

  it.only("should be able to find a category based on the randomized array and never repeat a category for an enitre game", function() {
    let categories = clue.getCategory();

    expect(categories.length).to.equal(4);
    expect(clue.roundCategories.length).to.equal(6);
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

  it('should', function() {

    // clue.getRoundOneClues()
    // clue.getRoundTwoClues()
    // clue.getRoundThreeClue()
    // clue.makeBoardObject();
    
  })
});