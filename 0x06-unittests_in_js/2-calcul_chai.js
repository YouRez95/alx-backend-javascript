function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    result = Math.round(a) / Math.round(b);
    return result !== Infinity ? result : 'Error'
  }
}

module.exports = calculateNumber