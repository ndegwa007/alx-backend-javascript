const request = require('request');
const assert = require('assert');

describe('api test', () => {
  it('index', (done) => {
    url = 'http://localhost:7865/';
    request.get(url, (err, res, body) => {
      assert.equal(body, 'Welcome to the payment system');
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});
