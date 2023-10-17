const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentsRequestToApi = require('./4-payment.js');
const assert = require('assert');

describe('test equality utils && sendPayment func', function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  it('spies on util && check if its called', function () {
    calculateNumberStub.withArgs('SUM', 100, 20).returns(10);
    sendPaymentsRequestToApi(100, 20);
    assert(consoleLogSpy.calledWith('The total is: 10'));
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
