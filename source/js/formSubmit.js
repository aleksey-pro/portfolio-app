import prepareSend from './prepareSend';

function sendForm() {
  const formMail = document.querySelector('#mail');
  
  
  function _setUpListeners() {
    if (formMail) {
      formMail.addEventListener('submit', _submitEvent);
      formMail.addEventListener('keydown', '.has-error', _removeError);
      formMail.addEventListener('reset', _clearForm);
    }
  }
  
  function _submitEvent() {
    _validateForm();
    if (!_validateForm(formMail)) return false;
    // prepareSendMail();
  }
  
    
  function prepareSendMail(e) {
    e.preventDefault();
    let data = {
      name: formMail.name.value.trim(),
      email: formMail.email.value.trim(),
      text: formMail.text.value.trim()
    };
    prepareSend('/contact', formMail, data);
  }
  
  function _validateForm(formMail) {
    
    var elements = formMail.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
      valid = true;
    
    $.each(elements, function(index, val) {
      let element = $(val),
        vals = element.val();
      
      if(vals.length === 0){
        element.addClass('has-error');
        valid = false;
      }
    });
    
    return valid;
  }
  
  function _removeError() { // Убирает красную обводку у элементов форм
    $(this).removeClass('has-error');
  }
  
  function _clearForm() {
    var formMail = $(this);
    formMail.find('.has-error').removeClass('has-error');
    formMail.find('.error-mes, success-mes').text('').hide();
  }
  
  return {
    init: _setUpListeners
  };
  
}

module.exports = sendForm;



  

