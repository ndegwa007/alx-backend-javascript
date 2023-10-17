const calculateNumber = require('./0-calcul.js');
const assert = require('node:assert');
// const chai = require('chai');
// const assert = chai.assert;

describe('tests suite', function () {
  it('test sum function', function () {
    assert(calculateNumber(1, 3), 4);
    assert(calculateNumber(1, 3.7), 5);
    assert(calculateNumber(1.2, 3.7), 5);
    assert(calculateNumber(1.5, 3.7), 6);
  });
});
