var ElementBase = require('./ElementBase');

class AbstractBase {
  constructor() {
    this.header = {
        createdDate: '',
        product: ''
    };
    this.data = {
        message: ElementBase.getNew('message')
    };
  }
}

module.exports = AbstractBase;
