const sendPaymentRequestToApi = require('./5-payment.js');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

describe('test sendPayments', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(consoleLogSpy);
  });

  it('test with 100 & 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy).to.have.been.called.with('The total is: 120');
    expect(consoleLogSpy).to.have.been.called.once;
  });

  it('test with 10 & 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy).to.have.been.called.with('The total is: 20');
    expect(consoleLogSpy).to.have.been.called.once;
  });
});
