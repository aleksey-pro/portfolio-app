'use strict';

module.exports = function() {
  $.gulp.task('css:foundation', function() {
    return $.gulp.src($.path.cssFoundation)
      .pipe($.gp.concatCss('vendors.css'))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: '.min' })))
      .pipe($.gulp.dest($.config.root + '/assets/css'));
  });
};
