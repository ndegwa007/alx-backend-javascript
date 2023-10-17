const calculate = require('./1-calcul.js');
const assert = require('node:assert');
// const chai = require('chai');
// const assert = chai.assert;

describe('test suite', function () {
  it('test sum function based on type', function () {
    assert.equal(calculate('SUM', 1.4, 4.5), 6, 'test passed');
    assert.equal(calculate('SUBTRACT', 1.4, 4.5), -4, 'test passed');
    assert.equal(calculate('DIVIDE', 1.4, 4.5), 0.2, 'test passed');
    assert.equal(calculate('DIVIDE', 1.4, 0), 'Error', 'test passed');
  });
});
