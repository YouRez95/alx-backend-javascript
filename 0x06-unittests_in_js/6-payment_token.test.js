const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(true)', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      console.log(result)
      expect(result).to.be.an('object')
      expect(result).to.have.property('data','Successful response from the API')
      done()
    })
  });
})