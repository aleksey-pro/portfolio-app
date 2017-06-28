function formModule() {
  var authform = $('#auth_form');
  var loginBtn = $('#auth');
  var flag = true;
  
  var init = function(){
    _setUpListeners();
  };
  
  function _validateForm(authform) {
    var authElements = authform.find('input, checkbox, radio').not('input[type="file"], input[type="hidden"]'),
      valid = true;
    var checked = $('#man').prop('checked');
    var radioSet = $('#yes').prop('checked');
    
    $.each(authElements, function(index, value) {
      var authelement = $(value),
        values = authelement.val();
      
      if(values.length === 0 || !checked || !radioSet){
        authelement.addClass('has-error');
        authform.find('.error-mes').text('Заполните все поля').show();
        valid = false;
      }
      else {
        loginBtn.attr('href', 'admin.html');
        authform.find('.error-mes').hide();
        loginBtn.find('.user-nav__link').text('Войти');
        flag = false;
        loginBtn.trigger('click');
      }
    });
    
    return valid;
  }

  
  function clickEv(e){
    if(flag) {
      e.preventDefault();
    }
    _validateForm(authform);
  }
  
  function _setUpListeners() {
    authform.on('keydown', '.has-error', _removeError);
    loginBtn.on('click', clickEv);
  }
  
  
  function _removeError() {
    $(this).removeClass('has-error');
    loginBtn.attr('href', '');
    authform.find('.error-mes').hide();
  }
  
  return {
    init: init
  };
  
}
module.exports = formModule;
