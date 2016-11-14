class ElementBase {
  constructor(value) {
    this.mandatory = "";
    this.editable = "";
    this.value = "value";
  }
  static getNew(value) {
    return new ElementBase(value);
  }
}

module.exports = ElementBase;
