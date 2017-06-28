module.exports = function() {
  const webpack = require('webpack');
  const gulpWebpack = require('webpack-stream');
  
  $.gulp.task('webpack', function() {
    return $.gulp.src('source/js/app.js')
      // .pipe(gulpWebpack(require('../../webpack.config.js'), webpack).on('error', $.gp.notify.onError({ title: 'JavaScript' })))
      .pipe(gulpWebpack(require('../../webpack.config.js'),webpack))
      .on('error', function(){
        this.emit("end");
      })
      .on('error', $.gp.notify.onError({title: "Webpack error"}))
      .pipe($.gulp.dest('./public'));
  });
};


