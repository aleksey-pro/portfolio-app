function SliderModule() {
  var index = 1;
  var items = $('.slider__list-down').find('.slider__item');

  
  var init = function () {
    _setUpListeners();
  };
  
  var _setUpListeners = function () {
    $('.slider__btn').on('click', function (e) {
      e.preventDefault();
      
      if($(e.target).closest('a').hasClass('btn-down')) {
        index--;
      } else {
        index++;
      }
      
      if (index > items.length-1) {
        index = 0
      }
      
      if (index < 0) {
        index = items.length-1
      }
  
      var mainSrc = items.eq(index).find('img').attr('src');
      var mainAlt = items.eq(index).find('img').attr('alt');
  
      var activeSlide = $('.slider__active-image');
      activeSlide.attr('src', mainSrc);
      activeSlide.attr('alt', mainAlt);
  
      var activeTitle = $('.work-sample--active').find('.works__sample__title');
      var titleText = activeSlide.attr('alt');
      activeTitle.text(titleText);
  
      _showNextSlide($('.slider__list-down'), 'down');
      _showNextSlide($('.slider__list-up'), 'up');
      _changeLinks();
      
    });
  };
  
    var _changeLinks = function() {
      var links = $('.works__links-btn'),
        newLink = links.eq(index);
      var mainLink = items.eq(index).find('img').attr('data-link');
      newLink.attr('href', mainLink);
      links.removeClass('works__links-btn-active');
      newLink.addClass('works__links-btn-active');
    };
  
  var _showNextSlide = function (container, direction) {
    var innerCounter = index;
    var items = container.find('.slider__item'),
      oldItem = items.filter('.active');
    
    if (direction === 'down') {
      (innerCounter - 1 < 0) ? innerCounter = items.length-1 : innerCounter-- ;
    } else {
      (innerCounter + 1 > items.length-1) ? innerCounter = 0 : innerCounter++ ;
    }
    
    var newItem = items.eq(innerCounter);
    onSlide(newItem, oldItem, direction);
  };
  
  
  function onSlide(newItem, oldItem, direction) {
    if(direction == 'down') {
        newItem.css('top', '-225px');
        oldItem.animate({'top': '225px'}, 300);
        newItem.animate({'top': '0'}, 300, function(){
          newItem.siblings().removeClass('active');
          newItem.addClass('active');
        });
      }
     else {
      newItem.css('top', '225px');
      oldItem.animate({'top': '-225px'}, 300);
      newItem.animate({'top': '0'}, 300, function(){
        newItem.siblings().removeClass('active');
        newItem.addClass('active');
      });
    }
  }

  return {
    init:init
  };
}

module.exports = SliderModule;

