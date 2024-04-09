export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  const newArray = [];
  for (const element of array) {
    newArray[index] = appendString + element;
    index += 1;
  }

  return newArray;
}
