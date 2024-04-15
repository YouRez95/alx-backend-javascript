export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const uint8 = new DataView(buffer);
  try {
    uint8.setUint8(position, value);
  } catch (err) {
    if (err.name === 'RangeError') {
      throw new Error('Position outside range');
    }
  }
  return uint8;
}
