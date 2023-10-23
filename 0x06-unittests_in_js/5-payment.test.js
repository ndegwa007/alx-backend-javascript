const sendPaymentRequestToApi = require('./5-payment.js');
const sinon = require('sinon');

describe('test sendPayments', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy to its original state before running the next test.
    consoleLogSpy.restore();
  });

  it('test with 100 & 20', () => {
    sendPaymentRequestToApi(100, 20);
    consoleLogSpy.calledWith('The total is: 120');
    consoleLogSpy.calledOnce;
  });

  it('test with 10 & 10', () => {
    sendPaymentRequestToApi(10, 10);
    consoleLogSpy.calledWith('The total is: 20');
    consoleLogSpy.calledOnce;
  });
});
