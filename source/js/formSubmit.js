import prepareSend from './prepareSend';

function sendForm() {
  const formMail = document.querySelector('#mail');
  const $formMail = $('#mail');
  const fields = $('.form-fields__field');
  
  function _setUpListeners() {
    if (formMail) {
      formMail.addEventListener('submit', function(e) {
        e.preventDefault();
        if ( event.which == 13 ) {
          event.preventDefault();
        }
        _validateForm();
        if (!_validateForm(formMail)) return false;
        prepareSendMail();
      });
      formMail.addEventListener('reset', _clearForm);
    }
  }
    
  function prepareSendMail() {
    let data = {
      name: formMail.name.value.trim(),
      email: formMail.email.value.trim(),
      text: formMail.text.value.trim()
    };
    prepareSend('/contact', formMail, data);
  }
  
  function _validateForm() {
    var valid = true;
    
    $.each(fields, function(index, val) {
      let field = $(val),
        vals = field.val();
      
      if(vals.length === 0){
        field.addClass('has-error');
        $formMail.find('.status').text('Заполните все поля!');
        valid = false;
        field.on('keydown', _removeError);
      }
    });
    
    return valid;
  }
  
  function _removeError() { // Убирает красную обводку у элементов форм
    $(this).removeClass('has-error');
    $formMail.find('.status').text('');
  }
  
  function _clearForm() {
    $formMail.find('.has-error').removeClass('has-error');
    $formMail.find('.status').text('');
  }
  
  return {
    init: _setUpListeners
  };
  
}

module.exports = sendForm;



  

