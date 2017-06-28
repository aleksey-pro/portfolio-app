var svg = require('svg4everybody');
require('es6-promise').polyfill();

function loadSVG() {
  function loadSVGs() {
    document.addEventListener("DOMContentLoaded", svg);
  }
  
  this.init = function() {
    loadSVGs()
  };
}

module.exports = loadSVG;
