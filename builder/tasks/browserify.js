(() => {
  'use strict';

  const browserify = require('browserify'),
        gulp = require('gulp'),
        source = require('vinyl-source-stream'),
        nontify = require('gulp-notify'),
        browserSync = require('browser-sync');

  gulp.task('browserify', () => {
    return browserify('src/js/app/index.js')
      .bundle()
      .on('error', nontify.onError(error => {
        return {
          title: 'Browserify',
          message: error.message
        };
      }))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('src/js'))
      .pipe(browserSync.reload({stream: true}));
  });
})();
