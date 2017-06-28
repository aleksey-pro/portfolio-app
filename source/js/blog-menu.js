function blogModule() {
  
  var label = $('.tail');
  var aside = $('.blog-nav');
  var link = $('.blog-items__link');
  
  function _push() {
    aside.toggleClass('blog-nav--opened');
  }
  
  function _stickyMenu() {
    var navPos, scrolled;
    navPos = aside.offset().top;

    $(window).scroll(function(){
      scrolled = $(window).scrollTop();
      if( scrolled >= navPos) {
        aside.addClass('blog-nav--fixed');
      } else if (scrolled < navPos){
        aside.removeClass('blog-nav--fixed');
      }
    })
  }
  
  function _scrolling() {
    var lastId, topMenu = $('.blog-items'),
      topPadding = 50,
      menuItems = topMenu.find('.blog-items__link'),
      scrollItems = menuItems.map(function () {
        var item = $($(this).attr('href'));
        if (item.length) {return item;}
      });
  
    menuItems.on('click', function(e){
      e.preventDefault();
      var href = $(this).attr('href');
      var offsetTop = href === '#' ? 0 : $(href).offset().top;
      window.location.hash = href;
      $('body, html').stop().animate({scrollTop: offsetTop}, 500);
    });
  
    $(window).scroll(function(){
      var fromTop = $(this).scrollTop() + topPadding;
      var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
          return this;
      });
      
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";
      if (lastId !== id) {
        lastId = id;
        menuItems.closest('.blog-items__item').removeClass("blog-items__item--green");
        var activeItem = menuItems.filter("[href='#"+id+"']");
        activeItem.closest('.blog-items__item').addClass("blog-items__item--green");
      }
    });
  }

  
  
  
  function init() {
    _stickyMenu();
    _scrolling();
    label.on('click', function(e) {
      e.preventDefault();
      _push();
    });
    $(window).resize(function() {
      if (  $(window).width() > 768 ) {
        aside.removeClass('blog-nav--opened');
      }
    });
  }

  return {
    init: init
  }
}

module.exports = blogModule;
