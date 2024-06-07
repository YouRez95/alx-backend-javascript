const { expect } = require("chai");
const request = require("request")

describe('Index page', function () {
  it('status code for /', (done) => {
    request.get('http://localhost:7865/').on('response', (response) => {
      expect(response.statusCode).to.equal(200)
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8')
      done()
    })
  })

  it('check the header for /', (done) => {
    request.get('http://localhost:7865/').on('response', (response) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8')
      done()
    })
  })

  it('check the body for /', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system')
      done()
    })
  })

  it('check the 200 code for /cart/:id', (done) => {
    request.get('http://localhost:7865/cart/45', (error, response, body) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it('check the body for /cart/:id', (done) => {
    request.get('http://localhost:7865/cart/45', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 45')
      done()
    })
  })

  it('check the 404 code for /cart/:id', (done) => {
    request.get('http://localhost:7865/cart/string', (error, response, body) => {
      expect(response.statusCode).to.equal(404)
      done()
    })
  })

  it('check the 200 code for /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it('check the body for /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      body = JSON.parse(body)
      expect(body).to.have.property('payment_methods').that.deep.equal({"credit_cards": true, "paypal": false});
      done();
    })
  })

  it('check the post request for /login', (done) => {
    const userName = 'Betty'
    request.post({url: 'http://localhost:7865/login', body: {'userName': userName}, json: true}, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Welcome ${userName}`)
      done()
    })
  })

})