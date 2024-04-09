export default function createIteratorObject(report) {
  const array = [];
  for (const item in report) {
    if (typeof report[item] === 'object') {
      for (const elem in report[item]) {
        if (typeof report[item][elem] === 'object') {
          array.push(...report[item][elem]);
        }
      }
    }
  }
  return array;
}
