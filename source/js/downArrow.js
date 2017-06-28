function ArrowModule() {
  
  var scrollTo = $('.to_scroll');
  
  var init = function () {
    
    _setUpListeners();
    
  };
  
  var _setUpListeners = function () {
    
    $('.down-arrow').on('click', function(e) {
      e.preventDefault();
      _scrollToSection();
    });
  };
  
  var _scrollToSection = function () {
    
    var reqPos = scrollTo.offset().top;
    
    $('body, html').animate({scrollTop: reqPos}, 500);
    
  };
  
  return{
    
    init:init
    
  };
  
}

module.exports = ArrowModule;

