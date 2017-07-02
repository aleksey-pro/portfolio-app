import prepareSend from './prepareSend';


function formModule() {
  const loginBtn = $('#auth');
  const formLogin = document.querySelector('#auth_form');
  const $formLogin = $('#auth_form');
  
  function prepareSendLogin() {
    
    let data = {
      login: formLogin.login.value,
      password: formLogin.password.value
    };
    
    prepareSend('/login', formLogin, data, function (data) {
      if (data === 'Авторизация успешна!') {
        location.href = '/admin';
      }
    });
  }
  
  function _submitEvent(e) {
    e.preventDefault();
    _validateForm($formLogin);
    if (!_validateForm($formLogin)){
      return false;
    }else
      prepareSendLogin();
  }
    
  function _setUpListeners() {
    if (formLogin) {
      formLogin.addEventListener('submit', _submitEvent);
      formLogin.addEventListener('keydown', '.has-error', _removeError);
    }
  }
    
  function _validateForm($formLogin) {
      
    var authElements = $formLogin.find('input, checkbox, radio').not('input[type="file"], input[type="hidden"], input[type="submit"]');
    var checked = $('#man').prop('checked');
    var radioSet = $('#yes').prop('checked');
    var valid = true;

    $.each(authElements, function (index, value) {
      var authelement = $(value),
        values = authelement.val();
  
      if (values.length === 0 || !checked || !radioSet) {
        authelement.addClass('has-error');
        $('.status').text('Заполните все поля');
        authelement.on('keydown', _removeError());
        valid = false;
      }
    });
  
    return valid;
  }
    
  function _removeError() {
    $(this).removeClass('has-error');
    alert.text = '';
  }
    
  return {
    init: _setUpListeners
  };
    
  
}//formModule

module.exports = formModule;