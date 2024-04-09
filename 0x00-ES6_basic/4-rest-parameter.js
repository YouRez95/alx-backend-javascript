export default function returnHowManyArguments(...args) {
  let total = 0;
  for (const arg of args) { // eslint-disable-line no-unused-vars
    total += 1;
  }
  return total;
}
