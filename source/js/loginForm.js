function formModule() {
  
  var form = $('#ajax_form');
  
  var init = function(){
    _setUpListeners();
  };
  
  function _validateForm(form) {
    
    var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
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

  function _setUpListeners() {
    form.on('keydown', '.has-error', _removeError);
    form.on('reset', _clearForm);
    form.on('submit', _submitForm);
  }
  
   function _removeError() { // Убирает красную обводку у элементов форм
    $(this).removeClass('has-error');
  }
  
   function _clearForm() {
    var form = $(this);
    form.find('.has-error').removeClass('has-error');
    form.find('.error-mes, success-mes').text('').hide();
  }
   
    
   function _submitForm (ev, form) {
      ev.preventDefault();
      
      var form = $(this),
        url = './form.php',
        defObject = _ajaxForm(form, url);
      
      if (defObject) {
        defObject.done(function(resp) {
          var mes = resp.mes,
            status = resp.status;
          
          if ( status === 'OK'){
            form.trigger('reset');
            form.find('.success-mes').text(mes).show();
          } else{
            form.find('.error-mes').text(mes).show();
          }
        });
      }
    }
    
   function _ajaxForm(form, url) {
      
      if (!_validateForm(form)) return false;  // Возвращает false, если не проходит валидацию
      var data = form.serialize(); // собираем данные из формы в объект data
      
      return $.ajax({ // Возвращает Deferred Object
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
      }).fail( function(resp) {
        form.find('.error-mes').text('На сервере произошла ошибка').show();
      });
    };
  
  return {
    init: init
  };
}
module.exports = formModule;
