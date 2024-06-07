const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('SUM', 3.0, 3.0)).to.equal(6);
    });

    it('round b', () => {
      expect(calculateNumber('SUM', 2.4, 1.9)).to.equal(4);
    });

    it('negative numbers', () => {
      expect(calculateNumber('SUM', -3.0, -3.0)).to.equal(-6);
    });

    it('round b', () => {
      expect(calculateNumber('SUM', -2.4, -1.9)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -3.0, 4.0)).to.equal(1);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 3.0, -3.0)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.0, 3.0)).to.equal(0);
    });

    it('round b', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 1.9)).to.equal(0);
    });

    it('negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.0, -3.0)).to.equal(0);
    });

    it('round b', () => {
      expect(calculateNumber('SUBTRACT', -2.4, -1.9)).to.equal(0);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.0, 4.0)).to.equal(-7);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.0, -3.0)).to.equal(6);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 10.0, 2.0)).to.equal(5.0);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('DIVIDE', -6.0, 2.0)).to.equal(-3);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('positive numbers (equal)', () => {
      expect(calculateNumber('DIVIDE', 3.0, 3.0)).to.equal(1);
    });

    it('negative numbers (equal)', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('round a (equal)', () => {
      expect(calculateNumber('DIVIDE', 3.6, 4.0)).to.equal(1);
    });

    it('round b (equal)', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.4)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('negative number', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});