export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](wichType) {
    if (wichType === 'number') {
      return this._size;
    }

    if (wichType === 'string') {
      return this._location;
    }

    return this;
  }
}
