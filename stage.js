module.exports = Stage;

function Stage(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  this.element = div.firstChild;
}
