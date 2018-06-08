function menuHandler() {
  var handler = $(".header__trigger");
  var link = $(".popup-menu_link");

  function _pushBlocks() {
    $(".slide-blocks").toggleClass("loaded");
  }

  function _popupMenu() {
    $(".popup-menu").toggleClass("popup-menu--show");
  }

  function _transform() {
    $(".header__trigger-link").toggleClass("active");
  }

  function init() {
    handler.on("click", function() {
      _transform();
      _pushBlocks();
      setTimeout(function() {
        _popupMenu();
      }, 2000);
    });

    link.hover(function() {
      $(this).toggleClass("popup-menu_link--hovered");
    });
  }

  return {
    init: init
  };
}

module.exports = menuHandler;
