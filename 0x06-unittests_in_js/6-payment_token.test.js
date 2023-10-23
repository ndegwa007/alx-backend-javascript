getPaymentTokenFromApi = require('./6-payment_token.js');
const assert = require('assert');

describe('payment_token_async', () => {
  it('test async function success', function (done) {
    getPaymentTokenFromApi(true)
      .then(res => {
        assert.equal(res, { data: 'Successful response from the API' });
      });
    done();
  });
});
