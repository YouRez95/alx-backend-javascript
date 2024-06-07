const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('call Utils.calculateNumber with "SUM", 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);
  });

  it('call Utils.calculateNumber with "SUM", 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);
  });
})