require("babel-polyfill");
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello Webpack 2"

  return element;
}

document.body.appendChild(component());
