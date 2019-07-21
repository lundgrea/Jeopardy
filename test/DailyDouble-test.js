import chai from 'chai';
const expect = chai.expect;

import DailyDouble from '../src/DailyDouble';
import domUpdates from "../src/domUpdates";

var dailyDouble

beforeEach(() => {

});

describe('DailyDouble', function() {
  
  it('should be a function', function() {
    expect(DailyDouble).to.be.a('function');
  });

});