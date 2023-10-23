getPaymentTokenFromApi = require('./6-payment_token.js');
const assert = require('assert');

describe('payment_token_async', () => {
  it('test async function where success === true', function (done) {
    getPaymentTokenFromApi(true)
      .then(res => {
        assert.deepEqual(res, { data: 'Successful response from the API' });
      });
    done();
  });
});
