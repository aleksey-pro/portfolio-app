var preloaderModule = function() {
  
  var percentsTotal = 0,
    preloader = $('.preloader');
  
  var setPercents = function (total, current) {
    var percents = Math.ceil(current / total * 100);
    
    $('.preloader__percents').text(percents + '%');
    
    if (percents >= 100) {
      preloader.fadeOut();
    }
  };
  
  var loadImages = function(images) {
    if(!images.length) {
      preloader.fadeOut();
    }
    
    images.forEach(function (img, i, images) {
      var fakeImage = $('<img>', {
        attr: {
          src: img
        }
      });
      
      fakeImage.on('load error', function () {
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    });
  };
  
  var onInit = function () {
    
    var imgPath = $('*').map(function(ndx, element) {
      var background = $(element).css('background-image'),
        img = $(element).is('img'),
        path = '';
      
      if (background != 'none') {
        path = background.replace('url("', '').replace('")', '');
      }
      
      if (img) {
        path = $(element).attr('src');
      }
      
      if (path) return path;
    }).toArray();
    
    loadImages(imgPath);
  }
  
  return {
    init : onInit
  };
  
};

module.exports = preloaderModule;