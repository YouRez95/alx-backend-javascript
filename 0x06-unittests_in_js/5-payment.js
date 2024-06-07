const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`)
}

sendPaymentRequestToApi(100, 20)

module.exports = sendPaymentRequestToApi;