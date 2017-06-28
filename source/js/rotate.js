function rotateModule() {
  
  let button = document.querySelector('.welcome__auth');
  let buttonBack = document.querySelector('#flip');
  
  var _Flip = function() {
    let container = document.querySelector('.flip-container');
    container.classList.add('active');
    button.style.display = 'none';
  };
  
  var _backFlip = function() {
    let container = document.querySelector('.flip-container');
    container.classList.remove('active');
    button.style.display = 'block';
  };
  
  var _setUpListeners = function() {
    if(button) {
      button.addEventListener('click', _Flip);
    }
    if(buttonBack) {
      buttonBack.addEventListener('click', _backFlip);
    }
  };
  
  this.init = function() {
    _setUpListeners();
  };
}


module.exports = rotateModule;
