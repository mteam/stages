var Stage = require('./stage.js');

module.exports = Container;

function Container(element) {
  this.element = element;
}

Container.prototype.use = function(stage) {
  if (!(stage instanceof Stage)) {
    throw new Error('object is not a stage');
  }

  var el = this.element;

  el.firstChild && el.removeChild(el.firstChild)
  el.appendChild(stage.element);
};
