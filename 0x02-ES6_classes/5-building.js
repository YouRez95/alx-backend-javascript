export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'string') {
      throw new Error('sqft must be a number');
    } else {
      this._sqft = value;
    }
  }
}
