export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    Airport.prototype[Symbol.toStringTag] = `${this._code}`;
    return toString.call(new Airport());
  }
}
