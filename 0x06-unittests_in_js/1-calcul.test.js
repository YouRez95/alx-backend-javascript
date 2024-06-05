const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {

  it('should return 12', function () {
    assert.strictEqual(calculateNumber('SUM', 10.0, 2.0), 12);
  });

  it('should return 13', function () {
    assert.strictEqual(calculateNumber('SUM', 10.7, 2.4), 13);
  });

  it('should return 11', function () {
    assert.strictEqual(calculateNumber('SUM', 7.5, 2.9), 11);
  });

  it('should return 9', function () {
    assert.strictEqual(calculateNumber('SUM', 7.4999, 2.49999), 9);
  });

  it('should return 8', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 10.0, 2.0), 8);
  });

  it('should return 9', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 10.7, 2.4), 9);
  });

  it('should return 5', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.5, 2.9), 5);
  });

  it('should return 5', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.4999, 2.49999), 5);
  });

  it('should return 5', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 10.0, 2.0), 5);
  });

  it('should return 6', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 11.7, 2.4), 6);
  });

  it('should return 3.3333333333333335', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.9), 3.3333333333333335);
  });

  it('should return 4', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 8.4999, 2.49999), 4);
  });

  it('should return 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 9), 0);
  });

  it('should return Error', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 7, 0), 'Error');
  });

});
