import chai from 'chai';
const expect = chai.expect;

import DailyDouble from '../src/DailyDouble';
import domUpdates from "../src/domUpdates";

var dailyDouble

beforeEach(() => {
  dailyDouble = new DailyDouble
});

describe('DailyDouble', function() {
  
  it('should be a function', function() {
    expect(DailyDouble).to.be.a('function');
  });

   it('should be an instance of DailyDouble', function() {
    expect(dailyDouble).to.be.an.instanceof(DailyDouble);
  });

});