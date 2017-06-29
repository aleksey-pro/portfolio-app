'use strict';

module.exports = function() {
  const patterns = [];
  $.gulp.task('pug', function() {
    patterns.push({ match: '%=suffix=%', replace: $.dev ? '' : '.min' });
    patterns.push({ match: '%=version=%', replace: $.dev ? '' : `?rel=${$.package.version}` });//Math.ceil(Math.random()*100000)
    return $.gulp.src('./views/pages/*.pug')
      .pipe($.gp.pug({
        // locals : JSON.parse($.fs.readFileSync('views/data/content.json', 'utf8')),
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        };
      }))
      .pipe($.gp.replaceTask({ patterns, usePrefix: false }))
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream({once: true}));
  });
};

// fs.existsSync(path.join('views/data/content2.json'),function (exists) { console.log(exists ? "true" : "false" );});

