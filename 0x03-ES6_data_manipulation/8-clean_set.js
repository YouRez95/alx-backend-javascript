export default function cleanSet(set, startString) {
  const text = [];
  set.forEach((value) => {
    if (startString.length > 0 && value.startsWith(startString)) {
      text.push(value.slice(startString.length));
    }
  });
  return text.join('-');
}
