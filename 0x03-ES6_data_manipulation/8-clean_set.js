export default function cleanSet(set, startString) {
  const text = [];
  if (!set || !startString) {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const portion = value.slice(startString.length);
      if (portion) {
        text.push(portion);
      }
    }
  });
  return text.join('-');
}
