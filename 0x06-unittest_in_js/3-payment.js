const Utils = require('./utils.js');

function sendPaymentsRequestToApi (totalAmount, totalShipping) {
  let sumTotal;

  sumTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sumTotal}`);
}
// sendPaymentsRequestToApi(100, 10);

module.exports = sendPaymentsRequestToApi;
