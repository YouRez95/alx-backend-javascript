const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('call Utils.calculateNumber with "SUM", 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);
  });
});
