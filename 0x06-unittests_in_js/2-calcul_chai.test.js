const expect = require('chai').expect
const { describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('type == "SUM"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('SUM', 3.0, 3.0)).to.equal(6);
    });

    it('round second number', () => {
      expect(calculateNumber('SUM', 6.3, 1.7)).to.equal(8);
    });

    it('round first number', () => {
      expect(calculateNumber('SUM', 2.7, 1.3)).to.equal(4);
    });

    it('negative numbers', () => {
      expect(calculateNumber('SUM', -3.0, -3.0)).to.equal(-6);
    });

    it('negative numbers with round first number', () => {
      expect(calculateNumber('SUM', -2.7, -1.2)).to.equal(-4);
    });

    it('negative numbers with round second number', () => {
      expect(calculateNumber('SUM', -2.4, -1.7)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -3.0, 3.0)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 3.0, -3.0)).to.equal(0);
    });

    it('zero', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  })

  describe('SUBSTRACT', function() {
    it('should return 8', function () {
      expect(calculateNumber('SUBTRACT', 10.0, 2.0)).to.equal(8);
    });
  
    it('should return 9', function () {
      expect(calculateNumber('SUBTRACT', 10.7, 2.4)).to.equal(9);
    });
  
    it('should return 5', function () {
      expect(calculateNumber('SUBTRACT', 7.5, 2.9)).to.equal(5);
    });
  
    it('should return 5', function () {
      expect(calculateNumber('SUBTRACT', 7.4999, 2.49999)).to.equal(5);
    });
  })

  describe('DIVIDE', function() {
    it('should return 5', function () {
      expect(calculateNumber('DIVIDE', 10.0, 2.0)).to.equal(5);
    });
  
    it('should return 6', function () {
      expect(calculateNumber('DIVIDE', 11.7, 2.4)).to.equal(6);
    });
  
    it('should return 3.3333333333333335', function () {
      expect(calculateNumber('DIVIDE', 9.5, 2.9)).to.equal(3.3333333333333335);
    });
  
    it('should return 4', function () {
      expect(calculateNumber('DIVIDE', 8.4999, 2.49999)).to.equal(4);
    });
  
    it('should return 0', function () {
      expect(calculateNumber('DIVIDE', 0, 9)).to.equal(0);
    });
  
    it('should return Error', function () {
      expect(calculateNumber('DIVIDE', 7, 0)).to.equal('Error');
    });
  })
});