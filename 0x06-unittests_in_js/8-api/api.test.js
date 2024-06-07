const { expect } = require("chai");
const request = require("request")

describe('Index page', function () {
  it('status code', (done) => {
    request.get('http://localhost:7865/').on('response', (response) => {
      expect(response.statusCode).to.equal(200)
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8')
      done()
    })
  })

  it('check the header', (done) => {
    request.get('http://localhost:7865/').on('response', (response) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8')
      done()
    })
  })

  it('check the body', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system')
      done()
    })
  })
})