var ElementBase = require('./ElementBase');
var AbstractBase = require('./AbstractBase');

class CaseBase extends AbstractBase {
  constructor() {
    super();
    Object.assign(this.data, {
      desc: ElementBase.getNew('desc')
    });
  }
}

module.exports = CaseBase;
