import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = value;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('cuurency must be an Currency');
    } else {
      this._currency = value;
    }
  }

  displayFullPrice() {
    const fullCurrency = this._currency.displayFullCurrency();
    return `${this._amount} ${fullCurrency}`;
  }
}
