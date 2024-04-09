export default function guardrail(mathFunction) {
  const array = [];
  try {
    const result = mathFunction();
    array.push(result);
  } catch (err) {
    array.push(`Error: ${err.message}`);
  }

  array.push('Guardrail was processed');
  return array;
}
