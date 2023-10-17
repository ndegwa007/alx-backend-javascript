const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentsRequestToApi = require('./3-payment.js');
const assert = require('assert');

describe('test equality utils && sendPayment func', function () {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  it('spies on util && check if its called', function () {
    sendPaymentsRequestToApi(100, 20);
    assert(calculateNumberSpy.calledWithExactly('SUM', 100, 20));
    assert(calculateNumberSpy.calledOnce);
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });
});
