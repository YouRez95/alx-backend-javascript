export default function cleanSet(set, startString) {
  const text = [];
  if (!set || !startString) {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      text.push(value.slice(startString.length));
    }
  });
  return text.join('-');
}
