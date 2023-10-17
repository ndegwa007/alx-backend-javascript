const calculate = require('./1-calcul.js');
// const assert = require('node:assert');
const chai = require('chai');
// const assert = chai.assert;
const expect = chai.expect;

describe('test suite', function () {
  it('test sum function based on type', function () {
    expect(calculate('SUM', 1.4, 4.5)).to.be.equal(6);
    expect(calculate('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
    expect(calculate('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
    expect(calculate('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });
});
