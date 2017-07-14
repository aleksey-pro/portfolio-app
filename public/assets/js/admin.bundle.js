webpackJsonp([1],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _upload = __webpack_require__(41);

var _upload2 = _interopRequireDefault(_upload);

var _prepareSend = __webpack_require__(1);

var _prepareSend2 = _interopRequireDefault(_prepareSend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jTabsModule = __webpack_require__(42);
var jQueryTabs = new jTabsModule();
jQueryTabs.init();

var formUpload = document.querySelector('#upload');
var formBlog = document.querySelector('#blog');
var formSkills = document.querySelector('#skillForm');

if (formUpload && formBlog && formSkills) {
  formUpload.addEventListener('submit', prepareSendFile);
  formBlog.addEventListener('submit', prepareSendPost);
  formSkills.addEventListener('submit', _prepareSendSkills);
}

// function prepareSendSkill(e) {
//   e.preventDefault();
//   let data = {
//     num: formSkill.num.value,
//     num2: formSkill.num2.value
//   };
//   prepareSend('/admin/addskill', formSkill, data);
// }

function prepareSendFile(e) {
  e.preventDefault();
  var resultContainer = formUpload.querySelector('.status');
  var formData = new FormData();
  var file = document.querySelector('#file-select').files[0];
  var url = document.querySelector('#file-url').value;
  var name = document.querySelector('#file-desc').value;

  formData.append('photo', file, file.name);
  formData.append('name', name);
  formData.append('url', url);

  resultContainer.innerHTML = 'Uploading...';
  (0, _upload2.default)('/admin/upload', formData, function (data) {
    resultContainer.innerHTML = data;
    formUpload.reset();
  });
}

function prepareSendPost(e) {
  e.preventDefault();
  var data = {
    title: formBlog.title.value,
    date: formBlog.date.value,
    text: formBlog.text.value
  };
  (0, _prepareSend2.default)('/admin/addpost', formBlog, data);
}

function _prepareSendSkills(e) {
  e.preventDefault();

  var data = {};
  var itemsElement = document.querySelectorAll('.admin-skill__title');

  for (var i = 0; i < itemsElement.length; i++) {
    var inputs = itemsElement[i].parentNode.querySelectorAll('input');
    data[itemsElement[i].textContent] = [];

    for (var input = 0; input < inputs.length; input++) {
      var a = inputs[input].name;
      var b = inputs[input].value;
      data[itemsElement[i].textContent].push({ name: a, value: b });
    }
    console.log(data);
  }
  (0, _prepareSend2.default)('/admin/addskills', formSkills, data);
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);

  xhr.onload = function (e) {
    var result = JSON.parse(xhr.responseText);
    cb(result.status);
  };

  xhr.send(data);
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

function jTabsModule() {

  var $wrapper = $('.admin-wrapper'),
      $allTabs = $wrapper.find('.tabs-content > form'),
      $tabMenu = $wrapper.find('.tabs-nav > div');

  function hideOtherTabs() {
    $allTabs.not(':first-of-type').hide();
  }

  function addActiveClass() {
    $wrapper.find('.tabs-nav > div:first-child').addClass('active');
  }

  function addDataAttr() {
    $tabMenu.each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
    });
    $allTabs.each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
    });
  }

  function setUpListeners() {
    $tabMenu.on('click', function (e) {
      var dataTab = $(this).data('tab');
      var $getWrapper = $(this).closest($wrapper);
      $getWrapper.find($tabMenu).removeClass('active');
      $(this).addClass('active');
      $getWrapper.find($allTabs).hide();
      $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
      e.preventDefault();
    });
  }

  this.init = function () {
    hideOtherTabs();
    addActiveClass();
    addDataAttr();
    setUpListeners();
  };
}

module.exports = jTabsModule;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[40]);
//# sourceMappingURL=admin.bundle.js.map