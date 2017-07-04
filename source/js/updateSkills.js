import prepareSend from './prepareSend';

var updateSkills = function () {
  var formSkills = document.querySelector('#skillForm');
  
  var init = function init() {
    _setUpListeners();
  };
  
  var _setUpListeners = function _setUpListeners() {
    formSkills.addEventListener('submit', function (e) {
      e.preventDefault();
      _prepareSendSkills();
    });
  };
  
  var _prepareSendSkills = function _prepareSendSkills() {
    var data = {};
    var itemsElement = document.querySelectorAll('.skill-section__title');
    
    for (var i=0; i<itemsElement.length; i++) {
      var inputs = itemsElement[i].parentNode.querySelectorAll('input');
      data[itemsElement[i].textContent] = [];
      
      for (var input=0; input<inputs.length; input++) {
        var a = inputs[input].name;
        var b = inputs[input].value;
        data[itemsElement[i].textContent].push({ name: a, value: b });
      }
    }
    prepareSend('/addskills', formSkills, data);
  };
  
  return {
    init: init
  };
  
};

module.exports = updateSkills;
