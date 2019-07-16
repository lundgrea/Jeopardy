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

  it.only("should be able to find 4 random clues based upon the category that was selected", function() {
    let board = clue.getRoundOneClues();

    expect(board.length).to.equal(4);
    expect(board[0].clues.length).to.equal(4);
    expect(board[1].clues.length).to.equal(4);
    expect(board[2].clues.length).to.equal(4);
    expect(board[3].clues.length).to.equal(4);
  });
    
  it.only('should order clues based upon the the point value', function() {
    let board = clue.makeBoardObject();

    expect(board[0][0].clues[0].pointValue).to.equal(100);
    expect(board[0][0].clues[1].pointValue).to.equal(200);
    expect(board[0][0].clues[2].pointValue).to.equal(300);
    expect(board[0][0].clues[3].pointValue).to.equal(400);
  });

  it.only('should double scores for the second round board', function() {
    let board = clue.makeBoardObject();

    expect(board[1][1].clues[0].pointValue).to.equal(200);
    expect(board[1][1].clues[1].pointValue).to.equal(400);
    expect(board[1][2].clues[2].pointValue).to.equal(600);
    expect(board[1][3].clues[3].pointValue).to.equal(800);
  })

  it.only('should return one question for the third round', function() {
    let board = clue.makeBoardObject();

    expect(board[2].length).to.equal(1);
  });
});