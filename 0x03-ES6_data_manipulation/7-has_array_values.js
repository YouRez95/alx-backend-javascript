export default function hasValuesFromArray(set, array) {
  let result = true;
  array.forEach((element) => {
    if (!set.has(element)) {
      result = false;
    }
  });
  return result;
}
